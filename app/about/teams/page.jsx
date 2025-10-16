import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Linkedin, Twitter, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Former tech journalist with a passion for storytelling and community building.",
    image: "/professional-woman-ceo.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "sarah@brainwaves.com",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Full-stack engineer who loves building tools that empower creators.",
    image: "/professional-man-cto-engineer.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    bio: "Product designer focused on creating intuitive, beautiful experiences.",
    image: "/professional-woman-designer.png",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    bio: "Open source enthusiast building the future of content platforms.",
    image: "/professional-man-software-engineer.jpg",
    social: {
      github: "#",
      linkedin: "#",
      email: "david@brainwaves.com",
    },
  },
  {
    name: "Priya Sharma",
    role: "Content Director",
    bio: "Editor and writer helping authors craft their best work.",
    image: "/professional-woman-editor.png",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "priya@brainwaves.com",
    },
  },
  {
    name: "Alex Thompson",
    role: "Community Manager",
    bio: "Building connections and fostering meaningful conversations.",
    image: "/professional-man-community-manager.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamsPage() {
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
            Meet the Team
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            The passionate people behind Brainwaves, working together to create
            the best platform for thoughtful content.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-square relative bg-muted overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Want to Join Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for
            great content and community.
          </p>
          <Link
            href="/about/career"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}
