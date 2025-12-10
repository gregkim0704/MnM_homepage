import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface ContactFormProps {
  initialMessage?: string;
}

export function ContactForm({ initialMessage = "" }: ContactFormProps) {
  const { toast } = useToast();
  const { language } = useI18n();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: initialMessage,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === "ko" ? "메시지 전송 완료" : "Message Sent",
        description: language === "ko" 
          ? "문의해 주셔서 감사합니다. 곧 연락드리겠습니다." 
          : "Thank you for your inquiry. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: language === "ko" ? "오류" : "Error",
        description: error.message || (language === "ko" ? "메시지 전송에 실패했습니다. 다시 시도해 주세요." : "Failed to send message. Please try again."),
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertContact) {
    mutation.mutate(data);
  }

  if (mutation.isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {language === "ko" ? "메시지가 성공적으로 전송되었습니다" : "Message Sent Successfully"}
        </h3>
        <p className="text-muted-foreground mb-6">
          {language === "ko" ? "연락해 주셔서 감사합니다. 담당자가 곧 연락드리겠습니다." : "Thank you for reaching out. Our team will contact you shortly."}
        </p>
        <Button
          variant="outline"
          onClick={() => mutation.reset()}
          data-testid="button-send-another"
        >
          {language === "ko" ? "다른 메시지 보내기" : "Send Another Message"}
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{language === "ko" ? "성함" : "Full Name"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={language === "ko" ? "홍길동" : "John Smith"}
                  {...field}
                  data-testid="input-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{language === "ko" ? "회사명" : "Company"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={language === "ko" ? "회사명을 입력하세요" : "Your company name"}
                  {...field}
                  data-testid="input-company"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{language === "ko" ? "이메일 주소" : "Email Address"}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={language === "ko" ? "example@company.com" : "john@company.com"}
                  {...field}
                  data-testid="input-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{language === "ko" ? "문의 내용" : "Message"}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={language === "ko" ? "프로젝트 또는 문의 사항을 알려주세요..." : "Tell us about your project or inquiry..."}
                  className="min-h-[120px] resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={mutation.isPending}
          data-testid="button-submit"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {language === "ko" ? "전송 중..." : "Sending..."}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {language === "ko" ? "메시지 보내기" : "Send Message"}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
