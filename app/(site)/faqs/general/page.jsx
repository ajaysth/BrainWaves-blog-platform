import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function GeneralFAQsPage() {
  const faqs = [
    {
      question: "What is Brainwaves?",
      answer:
        "Brainwaves is a modern blogging platform designed for writers, creators, and thought leaders. We provide powerful tools for creating, publishing, and sharing your ideas with the world. Our platform combines beautiful design with robust features to help you build your audience and engage with readers.",
    },
    {
      question: "Who can use Brainwaves?",
      answer:
        "Brainwaves is for everyone! Whether you're a professional writer, hobbyist blogger, business owner, educator, or just someone with ideas to share, our platform is designed to meet your needs. We have plans suitable for individuals, teams, and organizations of all sizes.",
    },
    {
      question: "Is Brainwaves free to use?",
      answer:
        "Yes! We offer a free tier that includes basic blogging features, allowing you to create and publish unlimited posts. Premium and Pro plans unlock advanced features like custom domains, analytics, monetization tools, and priority support.",
    },
    {
      question: "How is Brainwaves different from other blogging platforms?",
      answer:
        "Brainwaves focuses on simplicity and performance. We offer a clean, distraction-free writing experience, lightning-fast page loads, built-in SEO optimization, and modern design templates. Our platform is built with the latest web technologies for the best user experience.",
    },
    {
      question: "Can I import my existing blog to Brainwaves?",
      answer:
        "Yes! We support importing from major platforms including WordPress, Medium, Ghost, and Blogger. Go to Dashboard > Settings > Import to get started. We'll guide you through the process and help migrate your content, images, and metadata.",
    },
    {
      question: "Do I own my content on Brainwaves?",
      answer:
        "You retain full ownership of all content you create on Brainwaves. You can export your data at any time and use it however you wish. We never claim ownership of your work.",
    },
    {
      question: "Can I use a custom domain?",
      answer:
        "Yes, Premium and Pro plan subscribers can connect custom domains. We provide detailed instructions for connecting domains from popular registrars like GoDaddy, Namecheap, and Google Domains. SSL certificates are included free.",
    },
    {
      question: "How do I grow my audience on Brainwaves?",
      answer:
        "We provide built-in SEO tools, social sharing features, email newsletter integration, and analytics to help you understand and grow your audience. Our blog also offers tips and best practices for content marketing and audience building.",
    },
    {
      question: "Can I collaborate with other writers?",
      answer:
        "Yes! Pro plan subscribers can invite team members to collaborate on their blog. You can assign different roles (Admin, Editor, Writer) with specific permissions. This is perfect for publications with multiple contributors.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all users, with response times of 24-48 hours for free users and priority support (within 4 hours) for paid subscribers. We also have comprehensive documentation, video tutorials, and an active community forum.",
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
          <h1 className="text-4xl font-bold mb-4">General FAQs</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about Brainwaves and how our platform works.
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
            Have more questions about Brainwaves?
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
