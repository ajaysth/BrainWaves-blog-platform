import Link from "next/link";
import { ArrowLeft, Mail, Clock, CheckCircle } from "lucide-react";

const emailContacts = [
  {
    department: "General Inquiries",
    email: "hello@brainwaves.com",
    description:
      "For general questions, feedback, or partnership opportunities.",
  },
  {
    department: "Editorial",
    email: "editorial@brainwaves.com",
    description:
      "Pitch article ideas, submit guest posts, or discuss content collaborations.",
  },
  {
    department: "Support",
    email: "support@brainwaves.com",
    description: "Technical issues, account problems, or platform assistance.",
  },
  {
    department: "Careers",
    email: "careers@brainwaves.com",
    description:
      "Job applications, internship inquiries, or general career questions.",
  },
  {
    department: "Press & Media",
    email: "press@brainwaves.com",
    description: "Media inquiries, press releases, or interview requests.",
  },
];

export default function EmailUsPage() {
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
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            Email Us
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Reach out to the right team for your inquiry. We typically respond
            within 24-48 hours.
          </p>
        </div>

        {/* Email Contacts */}
        <div className="space-y-4 mb-12">
          {emailContacts.map((contact) => (
            <div
              key={contact.department}
              className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">
                    {contact.department}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {contact.description}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          <div className="rounded-lg border bg-muted/50 p-6">
            <Clock className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We aim to respond to all emails within 24-48 hours during business
              days (Monday-Friday).
            </p>
          </div>
          <div className="rounded-lg border bg-muted/50 p-6">
            <CheckCircle className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">What to Include</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Please include relevant details, links, or attachments to help us
              assist you more effectively.
            </p>
          </div>
        </div>

        {/* Alternative Contact CTA */}
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Need Immediate Assistance?
          </h3>
          <p className="text-muted-foreground mb-6">
            For urgent matters, try our live chat support or give us a call
            during business hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/chat"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Live Chat
            </Link>
            <Link
              href="/contact/call"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              View Phone Numbers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
