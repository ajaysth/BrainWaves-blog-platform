import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react";

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and scale our platform using Next.js, React, and modern web technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expert knowledge of React, Next.js, and Node.js",
      "Experience with PostgreSQL and Prisma",
      "Strong understanding of web performance and accessibility",
    ],
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description:
      "Shape our content strategy and work with writers to create compelling stories.",
    requirements: [
      "3+ years in content strategy or editorial roles",
      "Excellent writing and editing skills",
      "Experience with SEO and content analytics",
      "Passion for technology and digital culture",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intuitive interfaces that delight our community of readers and writers.",
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio showcasing web and mobile design",
      "Proficiency in Figma and design systems",
      "User research and usability testing experience",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Maintain and improve our infrastructure, CI/CD pipelines, and deployment processes.",
    requirements: [
      "3+ years of DevOps or infrastructure experience",
      "Experience with Vercel, AWS, or similar platforms",
      "Knowledge of Docker, Kubernetes, and CI/CD tools",
      "Strong scripting and automation skills",
    ],
  },
  {
    title: "Community Manager",
    department: "Community",
    location: "Remote",
    type: "Part-time",
    description:
      "Engage with our community, moderate discussions, and organize events.",
    requirements: [
      "2+ years in community management",
      "Excellent communication and interpersonal skills",
      "Experience with social media and community platforms",
      "Passion for building inclusive communities",
    ],
  },
];

const benefits = [
  {
    title: "Competitive Salary",
    description:
      "Fair compensation with equity options for early team members.",
  },
  {
    title: "Flexible Schedule",
    description:
      "Work when you're most productive. We trust you to manage your time.",
  },
  {
    title: "Remote First",
    description:
      "Work from anywhere. We have team members across multiple time zones.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness stipend.",
  },
  {
    title: "Learning Budget",
    description:
      "Annual budget for courses, conferences, and professional development.",
  },
  {
    title: "Unlimited PTO",
    description:
      "Take the time you need to recharge and maintain work-life balance.",
  },
];

export default function CareerPage() {
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
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Help us build the future of thoughtful content. We're looking for
            talented, passionate people to join our growing team.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Why Brainwaves?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary whitespace-nowrap">
                    Now Hiring
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {position.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Don't See a Perfect Fit?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always interested in meeting talented people. Send us your
            resume and tell us what you're passionate about.
          </p>
          <a
            href="mailto:careers@brainwaves.com"
            className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
