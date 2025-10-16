import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Briefcase, Target } from "lucide-react";

const aboutSections = [
  {
    title: "Our Story",
    description:
      "Discover how Brainwaves became a platform for curious minds to explore and share ideas.",
    icon: BookOpen,
    href: "/about/our-story",
  },
  {
    title: "Teams",
    description:
      "Meet the passionate people behind Brainwaves working to create the best content platform.",
    icon: Users,
    href: "/about/teams",
  },
  {
    title: "Career",
    description:
      "Join our growing team and help us build the future of thoughtful content.",
    icon: Briefcase,
    href: "/about/career",
  },
  {
    title: "Vision & Mission",
    description:
      "Learn about our values, goals, and the roadmap for the future of Brainwaves.",
    icon: Target,
    href: "/about/vision-mission",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            About Brainwaves
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            We're building a platform where thoughtful writing meets curious
            readers. Learn more about our story, team, and vision for the
            future.
          </p>
        </div>

        {/* About Sections Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {aboutSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group rounded-lg border bg-card p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 rounded-lg border bg-muted/50 p-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">
                Articles Published
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">
                Active Readers
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">
                Contributing Writers
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community of readers and writers exploring ideas that
            matter.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/form"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about/career"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
