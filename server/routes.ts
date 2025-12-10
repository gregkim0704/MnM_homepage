import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

const RESOURCE_INFO: Record<string, { title: string; titleKr: string; description: string }> = {
  "company-brochure": {
    title: "Company Brochure",
    titleKr: "회사 소개서",
    description: "MnM Corp - Your trusted partner in automotive transmission remanufacturing"
  },
  "dct-spec": {
    title: "DCT Product Specifications",
    titleKr: "DCT 제품 사양서",
    description: "Dual Clutch Transmission Remanufacturing Specifications"
  },
  "ev-gear-spec": {
    title: "EV Reduction Gear Specifications",
    titleKr: "EV 감속기 사양서",
    description: "Electric Vehicle Reduction Gear Remanufacturing Specifications"
  },
  "quality-certification": {
    title: "Quality Certifications",
    titleKr: "품질 인증서",
    description: "IATF 16949 and ISO 45001 Certification Documentation"
  },
  "process-overview": {
    title: "Remanufacturing Process Overview",
    titleKr: "재제조 공정 안내",
    description: "Our 10-Step Precision Remanufacturing Process"
  }
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Serve placeholder PDF documents for resources
  app.get("/api/resources/:resourceId", (req, res) => {
    const { resourceId } = req.params;
    const resourceInfo = RESOURCE_INFO[resourceId];
    
    if (!resourceInfo) {
      res.status(404).json({ success: false, message: "Resource not found" });
      return;
    }

    // Generate a simple PDF-like content (placeholder)
    const pdfContent = generatePlaceholderPDF(resourceInfo);
    
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${resourceId}.pdf"`);
    res.send(pdfContent);
  });

  return httpServer;
}

// Generate a minimal PDF placeholder
function generatePlaceholderPDF(info: { title: string; titleKr: string; description: string }): Buffer {
  // Minimal PDF structure
  const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 350 >>
stream
BT
/F1 24 Tf
50 700 Td
(${info.title}) Tj
0 -40 Td
/F1 18 Tf
(${info.titleKr}) Tj
0 -60 Td
/F1 12 Tf
(${info.description}) Tj
0 -40 Td
(MnM Corp - Automotive Transmission Remanufacturing) Tj
0 -30 Td
(Contact: infrastructure@kakao.com) Tj
0 -20 Td
(Phone: 010-9143-0800) Tj
0 -40 Td
(This is a placeholder document.) Tj
0 -20 Td
(For the complete document, please contact our team.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000670 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
749
%%EOF`;

  return Buffer.from(pdfContent, "utf-8");
}
