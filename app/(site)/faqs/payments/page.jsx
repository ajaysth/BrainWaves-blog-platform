import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function PaymentsFAQsPage() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed securely through Stripe, ensuring your financial information is protected.",
    },
    {
      question: "How much does Brainwaves cost?",
      answer:
        "Brainwaves offers a free tier with basic features. Our Premium plan is $9.99/month or $99/year (save 17%). The Pro plan is $19.99/month or $199/year. All paid plans include a 14-day free trial with no credit card required.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period. No refunds are provided for partial months, but you won't be charged again.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for annual subscriptions. If you're not satisfied within the first 30 days, contact our support team for a full refund. Monthly subscriptions are non-refundable but can be cancelled at any time.",
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer:
        'Go to Dashboard > Settings > Billing and click "Change Plan". When upgrading, you\'ll be charged a prorated amount for the remainder of your billing cycle. When downgrading, the change takes effect at the end of your current billing period.',
    },
    {
      question: "Is there a student or educational discount?",
      answer:
        "Yes! We offer a 50% discount for students and educators. Verify your status through our education partner portal in the billing settings. You'll need a valid .edu email address or student ID.",
    },
    {
      question: "What happens if my payment fails?",
      answer:
        "If a payment fails, we'll retry the charge up to 3 times over the next 7 days. You'll receive email notifications about the failed payment. If all retries fail, your account will be downgraded to the free tier until payment is successful.",
    },
    {
      question: "Can I get an invoice for my subscription?",
      answer:
        "Yes, invoices are automatically generated and emailed to you after each successful payment. You can also download past invoices from Dashboard > Settings > Billing > Invoice History.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/faqs"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to FAQs
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Payments FAQs</h1>
          <p className="text-lg text-muted-foreground">
            Common questions about billing, subscriptions, and payment methods.
          </p>
        </div>

        {/* FAQs Accordion */}
        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Support */}
        <div className="bg-muted/50 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">
            Have billing questions or need help with payments?
          </p>
          <Button asChild>
            <Link href="/contact">Contact Billing Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
