import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Quality Over Quantity",
    description:
      "We believe in publishing fewer, better articles. Every piece is carefully crafted, edited, and polished to provide real value to our readers.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our community shapes everything we do. We listen, learn, and evolve based on feedback from readers and writers alike.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity Driven",
    description:
      "We celebrate curiosity and encourage exploration. The best ideas come from asking questions and challenging assumptions.",
  },
  {
    icon: Zap,
    title: "Action Oriented",
    description:
      "Reading is just the beginning. We want our content to inspire action, spark conversations, and drive meaningful change.",
  },
];

const goals = [
  {
    year: "2024",
    title: "Expand Our Community",
    description:
      "Reach 1 million monthly readers and onboard 500+ contributing writers.",
    status: "In Progress",
  },
  {
    year: "2024",
    title: "Launch Premium Features",
    description:
      "Introduce advanced tools for writers including analytics, collaboration, and monetization.",
    status: "Planned",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Support multiple languages and build regional communities around the world.",
    status: "Planned",
  },
  {
    year: "2025",
    title: "AI-Powered Tools",
    description:
      "Develop ethical AI tools to help writers improve their craft while maintaining authenticity.",
    status: "Research",
  },
];

export default function VisionMissionPage() {
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
            Vision & Mission
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Our guiding principles and the future we're building together.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="rounded-lg bg-primary/10 p-3">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                To become the world's most trusted platform for thoughtful
                content—where every article sparks curiosity, every writer finds
                their voice, and every reader discovers ideas that change how
                they see the world.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="rounded-lg bg-primary/10 p-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
                We empower writers to create exceptional content and help
                readers discover ideas worth their time. Through thoughtful
                curation, powerful tools, and a supportive community, we're
                building a better internet—one article at a time.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold mb-2">For Writers</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide the best tools and platform to share your ideas with
                    the world.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold mb-2">For Readers</h3>
                  <p className="text-sm text-muted-foreground">
                    Curate high-quality content that educates, inspires, and
                    entertains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Roadmap</h2>
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.title} className="rounded-lg border bg-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary">
                        {goal.year}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          goal.status === "In Progress"
                            ? "bg-primary/10 text-primary"
                            : goal.status === "Planned"
                            ? "bg-muted text-muted-foreground"
                            : "bg-muted/50 text-muted-foreground"
                        }`}
                      >
                        {goal.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Be Part of Our Journey
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a reader, writer, or potential team member, we'd love
            to have you join us in building the future of content.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about/teams"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Meet the Team
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
