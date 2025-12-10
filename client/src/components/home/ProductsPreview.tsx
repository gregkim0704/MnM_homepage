import { Link } from "wouter";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { PRODUCTS } from "@/data/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function ProductsPreview() {
  return (
    <SectionWrapper background="muted">
      <SectionHeader
        title="Our Products & Services"
        subtitle="Comprehensive remanufacturing solutions for automotive transmissions and EV components"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover-elevate" data-testid={`product-card-${product.id}`}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-bold text-lg text-card-foreground leading-tight">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <Badge className="bg-accent text-accent-foreground text-xs shrink-0">
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.types.map((type) => (
                    <Badge key={type} variant="secondary" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/business" data-testid={`link-product-${product.id}`}>
                  <Button variant="ghost" size="sm" className="gap-1 p-0 text-primary" data-testid={`button-learn-more-${product.id}`}>
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/business">
          <Button size="lg" data-testid="button-view-all-products">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
