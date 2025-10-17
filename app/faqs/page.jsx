import Link from "next/link";
import {
  ArrowLeft,
  User,
  CreditCard,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQsPage() {
  const faqCategories = [
    {
      title: "Account",
      description:
        "Questions about account creation, login, and profile management",
      icon: User,
      href: "/faqs/account",
      color: "text-blue-600 dark:text-blue-400",
      count: "12 questions",
    },
    {
      title: "Payments",
      description: "Billing, subscriptions, refunds, and payment methods",
      icon: CreditCard,
      href: "/faqs/payments",
      color: "text-green-600 dark:text-green-400",
      count: "8 questions",
    },
    {
      title: "Technical Issues",
      description: "Troubleshooting common technical problems",
      icon: AlertCircle,
      href: "/faqs/technical",
      color: "text-red-600 dark:text-red-400",
      count: "15 questions",
    },
    {
      title: "General FAQs",
      description: "General questions about our platform and services",
      icon: HelpCircle,
      href: "/faqs/general",
      color: "text-purple-600 dark:text-purple-400",
      count: "10 questions",
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
          <h1 className="text-5xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find answers to common questions about Brainwaves. Browse by
            category or search for specific topics.
          </p>
        </div>

        {/* FAQ Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.href} href={category.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg bg-muted ${category.color}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">
                            {category.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base mb-2">
                          {category.description}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          {category.count}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to
            assist you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
