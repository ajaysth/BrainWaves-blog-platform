import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function AccountFAQsPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'To create an account, click the "Sign Up" button in the top right corner of the homepage. Fill in your email address, create a password, and verify your email. You\'ll be able to start using Brainwaves immediately after verification.',
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer:
        'Click on "Forgot Password" on the login page. Enter your email address and we\'ll send you a password reset link. Follow the instructions in the email to create a new password. The link expires after 24 hours for security reasons.',
    },
    {
      question: "Can I change my email address?",
      answer:
        "Yes, you can change your email address from your account settings. Go to Dashboard > Settings > Profile, enter your new email address, and verify it through the confirmation email we send you.",
    },
    {
      question: "How do I delete my account?",
      answer:
        'To delete your account, go to Dashboard > Settings > Account. Scroll down to the "Danger Zone" section and click "Delete Account". Please note that this action is permanent and cannot be undone. All your data will be permanently removed.',
    },
    {
      question: "Can I have multiple accounts?",
      answer:
        "While technically possible, we recommend using a single account per person. If you need separate accounts for different purposes (personal and business), please contact our support team to discuss the best solution for your needs.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        'Navigate to Dashboard > Settings > Profile. Here you can update your name, bio, profile picture, and other personal information. Changes are saved automatically when you click the "Save Changes" button.',
    },
    {
      question: "Is my account information secure?",
      answer:
        "Yes, we take security seriously. All passwords are encrypted using industry-standard bcrypt hashing. We use secure HTTPS connections for all data transmission and follow best practices for data protection and privacy.",
    },
    {
      question: "Can I connect my social media accounts?",
      answer:
        "Yes, you can connect your Twitter, LinkedIn, and GitHub accounts from your profile settings. This allows you to share your posts directly to these platforms and display your social links on your public profile.",
    },
    {
      question: "How do I enable two-factor authentication?",
      answer:
        'Go to Dashboard > Settings > Security. Click "Enable Two-Factor Authentication" and follow the setup instructions. You\'ll need an authenticator app like Google Authenticator or Authy to scan the QR code.',
    },
    {
      question: "What should I do if my account is compromised?",
      answer:
        "If you suspect your account has been compromised, immediately change your password and enable two-factor authentication. Contact our support team at security@brainwaves.com with details about the incident so we can help secure your account.",
    },
    {
      question: "Can I export my account data?",
      answer:
        'Yes, you can export all your account data including posts, comments, and profile information. Go to Dashboard > Settings > Privacy and click "Export Data". We\'ll email you a downloadable file within 24 hours.',
    },
    {
      question: "How do I manage my notification preferences?",
      answer:
        "Navigate to Dashboard > Settings > Notifications. Here you can customize which notifications you receive via email and in-app. You can choose to receive notifications for comments, likes, new followers, and more.",
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
          <h1 className="text-4xl font-bold mb-4">Account FAQs</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about managing your Brainwaves account.
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
            Still have questions about your account?
          </p>
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
