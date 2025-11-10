"use client";

import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Have a question or feedback? Fill out the form below and we'll get
            back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border bg-card p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center rounded-full bg-green-500/10 p-4 mb-4">
                <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for contacting us. We'll respond to your inquiry
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>

              {/* Category */}
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleChange("category", value)}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="editorial">Editorial</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Subject */}
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Brief description of your inquiry"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-32"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-muted/50 p-6">
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We typically respond to all inquiries within 24 hours during
              business days.
            </p>
          </div>
          <div className="rounded-lg border bg-muted/50 p-6">
            <h3 className="font-semibold mb-2">Need Faster Help?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For urgent matters, try our{" "}
              <Link
                href="/contact/chat"
                className="text-primary hover:underline"
              >
                live chat
              </Link>{" "}
              or{" "}
              <Link
                href="/contact/call"
                className="text-primary hover:underline"
              >
                call us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
