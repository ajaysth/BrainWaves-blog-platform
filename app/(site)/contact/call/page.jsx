import Link from "next/link";
import { ArrowLeft, Phone, Clock, Globe, Headphones } from "lucide-react";

const phoneNumbers = [
  {
    region: "Kathmandu, Nepal",
    number: "+977 1-1234567",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM NST",
    icon: Globe,
  },
  {
    region: "Bhaktapur, Nepal",
    number: "+977 56-123456",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM NST",
    icon: Globe,
  },
  {
    region: "Support Hotline",
    number: "+977 1-9876543",
    hours: "24/7 Emergency Support",
    icon: Headphones,
  },
];

export default function CallUsPage() {
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
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            Call Us
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Speak directly with our team. Choose the number that works best for
            your location and needs.
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="space-y-6 mb-12">
          {phoneNumbers.map((contact) => {
            const Icon = contact.icon;
            return (
              <div
                key={contact.region}
                className="rounded-lg border bg-card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {contact.region}
                    </h3>
                    <a
                      href={`tel:${contact.number.replace(/\s/g, "")}`}
                      className="text-2xl font-bold text-primary hover:underline mb-3 block"
                    >
                      {contact.number}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {contact.hours}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="rounded-lg border bg-muted/50 p-8 mb-12">
          <h3 className="text-xl font-semibold mb-4">Before You Call</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>
                Have your account information or order number ready for faster
                assistance.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>
                Check our FAQ section - you might find an instant answer to your
                question.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>
                For non-urgent matters, email or live chat may provide faster
                responses.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span>
                International rates may apply depending on your phone carrier.
              </span>
            </li>
          </ul>
        </div>

        {/* Alternative Contact CTA */}
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">
            Prefer Other Contact Methods?
          </h3>
          <p className="text-muted-foreground mb-6">
            We offer multiple ways to get in touch. Choose what works best for
            you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/email"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Email Us
            </Link>
            <Link
              href="/contact/chat"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Live Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
