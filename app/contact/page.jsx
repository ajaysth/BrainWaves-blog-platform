import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      icon: Mail,
      href: "/contact/email",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Call Us",
      description: "Speak directly with our support team",
      icon: Phone,
      href: "/contact/call",
      color: "text-green-600 dark:text-green-400",
    },
    {
      title: "Chat Support",
      description: "Get instant help through live chat",
      icon: MessageCircle,
      href: "/contact/chat",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Contact Form",
      description: "Fill out our form and we'll get back to you",
      icon: FileText,
      href: "/contact/form",
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're here to help. Choose your preferred way to reach us and we'll
            respond as quickly as possible.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link key={method.href} href={method.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg bg-muted ${method.color}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">
                            {method.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {method.description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Help Right Away?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Check out our comprehensive FAQ section for instant answers to
            common questions.
          </p>
          <Button asChild size="lg">
            <Link href="/faqs">
              Browse FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
