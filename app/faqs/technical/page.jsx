import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function TechnicalFAQsPage() {
  const faqs = [
    {
      question: "Why can't I log in to my account?",
      answer:
        "First, ensure you're using the correct email and password. Try resetting your password if needed. Clear your browser cache and cookies, or try a different browser. If you're still having issues, check if your account email has been verified. Contact support if the problem persists.",
    },
    {
      question: "The website is loading slowly. What should I do?",
      answer:
        "Slow loading can be caused by several factors: check your internet connection, clear your browser cache, disable browser extensions temporarily, or try a different browser. If the issue persists across devices, there might be a temporary server issue - check our status page or contact support.",
    },
    {
      question: "Why aren't my images uploading?",
      answer:
        "Ensure your image is under 5MB and in a supported format (JPG, PNG, GIF, WebP). Check your internet connection stability. Try compressing the image or using a different file. If you're on a mobile device, ensure the app has permission to access your photos.",
    },
    {
      question: 'I\'m getting a "404 Not Found" error. What does this mean?',
      answer:
        "A 404 error means the page you're trying to access doesn't exist or has been moved. Check the URL for typos, use the search function to find the content, or navigate from the homepage. If you believe this is an error, please report it to our support team with the URL.",
    },
    {
      question: "Why can't I see my published posts?",
      answer:
        'Check if your post is set to "Published" status in your dashboard. Ensure you\'re logged into the correct account. Clear your browser cache and refresh the page. If the post was just published, wait a few minutes for it to appear. Check if your post violates any community guidelines.',
    },
    {
      question: "The editor is not working properly. How do I fix this?",
      answer:
        "Try refreshing the page first. Clear your browser cache and cookies. Disable browser extensions that might interfere with the editor. Ensure JavaScript is enabled in your browser. Try using a different browser or device. If the issue persists, contact support with details about your browser and operating system.",
    },
    {
      question: "Why am I not receiving email notifications?",
      answer:
        "Check your spam/junk folder for our emails. Ensure notifications are enabled in your account settings. Add noreply@brainwaves.com to your contacts. Check if your email provider is blocking our emails. Verify your email address is correct in your profile settings.",
    },
    {
      question: "How do I report a bug or technical issue?",
      answer:
        'Go to the Contact page and select "Technical Support". Provide detailed information including: what you were trying to do, what happened instead, your browser and operating system, any error messages, and steps to reproduce the issue. Screenshots are very helpful.',
    },
    {
      question: "Is Brainwaves compatible with mobile devices?",
      answer:
        "Yes, Brainwaves is fully responsive and works on all modern mobile browsers (Safari, Chrome, Firefox). For the best experience, we recommend using the latest version of your mobile browser. We also have native mobile apps in development.",
    },
    {
      question: "Why is my content not saving?",
      answer:
        'Ensure you have a stable internet connection. Check if you\'re still logged in (sessions expire after inactivity). Try saving again after refreshing the page. If using the auto-save feature, wait for the "Saved" indicator. For large content, try saving in smaller sections.',
    },
    {
      question: "What browsers are supported?",
      answer:
        "Brainwaves supports the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience and security. Internet Explorer is not supported. If you're using an older browser version, some features may not work properly.",
    },
    {
      question: "How do I clear my browser cache?",
      answer:
        'Chrome: Press Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac), select "Cached images and files", and click Clear data. Firefox: Press Ctrl+Shift+Delete, select "Cache", and click Clear Now. Safari: Go to Safari > Preferences > Privacy > Manage Website Data > Remove All.',
    },
    {
      question: 'Why am I seeing a "Session Expired" message?',
      answer:
        "For security reasons, sessions expire after 30 minutes of inactivity. Simply log in again to continue. If you're being logged out frequently, check if your browser is blocking cookies, or if you're using private/incognito mode. Enable \"Remember Me\" when logging in for longer sessions.",
    },
    {
      question: "Can I use Brainwaves offline?",
      answer:
        "Currently, Brainwaves requires an internet connection to function. However, we're working on offline capabilities that will allow you to draft posts offline and sync them when you're back online. Stay tuned for updates!",
    },
    {
      question: "How do I enable dark mode?",
      answer:
        'Dark mode automatically follows your system preferences. You can also manually toggle it by clicking your profile icon in the top right corner and selecting "Appearance". Choose between Light, Dark, or System (automatic) mode.',
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
          <h1 className="text-4xl font-bold mb-4">Technical Issues FAQs</h1>
          <p className="text-lg text-muted-foreground">
            Troubleshooting guides and solutions for common technical problems.
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
            Still experiencing technical issues?
          </p>
          <Button asChild>
            <Link href="/contact">Contact Technical Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
