"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Clock, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function ChatSupportPage() {
  const [chatStarted, setChatStarted] = useState(false);

  const handleStartChat = () => {
    setChatStarted(true);
    // In a real app, this would initialize the chat widget
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
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
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            Live Chat Support
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Get instant help from our support team. Chat with us in real-time
            for quick answers to your questions.
          </p>
        </div>

        {/* Chat Status */}
        <div className="rounded-lg border bg-card p-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Support Team Online
          </div>
          <h3 className="text-2xl font-semibold mb-3">We're Here to Help</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our support team is available and ready to assist you. Average
            response time is under 2 minutes.
          </p>
          <button
            onClick={handleStartChat}
            disabled={chatStarted}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageCircle className="h-4 w-4" />
            {chatStarted ? "Chat Started..." : "Start Live Chat"}
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <Zap className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Instant Responses</h3>
            <p className="text-sm text-muted-foreground">
              Get answers in real-time without waiting for email replies.
            </p>
          </div>
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <Users className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-sm text-muted-foreground">
              Chat with knowledgeable support specialists.
            </p>
          </div>
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <Clock className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Extended Hours</h3>
            <p className="text-sm text-muted-foreground">
              Available Mon-Fri, 8 AM - 10 PM EST.
            </p>
          </div>
        </div>

        {/* Chat Hours */}
        <div className="rounded-lg border bg-muted/50 p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4">Chat Availability</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Monday - Friday</span>
              <span className="font-medium">8:00 AM - 10:00 PM EST</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Saturday</span>
              <span className="font-medium">10:00 AM - 6:00 PM EST</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Sunday</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Outside of these hours? Send us an email and we'll get back to you
            as soon as possible.
          </p>
        </div>

        {/* Alternative Contact CTA */}
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Other Ways to Reach Us</h3>
          <p className="text-muted-foreground mb-6">
            If chat isn't available or you prefer another method, we're here to
            help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/email"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Email Us
            </Link>
            <Link
              href="/contact/call"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
