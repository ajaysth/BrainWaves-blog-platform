import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OurStoryPage() {
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
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-balance mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            How Brainwaves became a platform for curious minds to explore,
            learn, and share ideas.
          </p>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Beginning */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">The Beginning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Brainwaves started in 2020 with a simple idea: create a space
                where thoughtful writing meets curious readers. In a world of
                endless content, we wanted to build something different—a
                platform that values depth over virality, insight over noise.
              </p>
            </section>

            {/* Mission Evolution */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Growing Together</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What began as a small blog has evolved into a thriving community
                of writers, thinkers, and learners. We've published thousands of
                articles across technology, design, culture, and beyond—each one
                carefully crafted to spark curiosity and inspire action.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our readers come from all walks of life, united by a shared love
                of learning. They're developers, designers, entrepreneurs,
                students, and lifelong learners who believe that great ideas
                deserve great writing.
              </p>
            </section>

            {/* Values in Action */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">What We Stand For</h2>
              <div className="grid gap-6 sm:grid-cols-2 not-prose">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Every article is reviewed, edited, and polished to ensure it
                    meets our high standards.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Community Driven
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our readers shape what we publish through feedback,
                    suggestions, and contributions.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Always Learning
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We're constantly evolving, experimenting with new formats
                    and topics.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-2">Open & Honest</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparency in our process, our mistakes, and our journey
                    forward.
                  </p>
                </div>
              </div>
            </section>

            {/* Looking Forward */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">What's Next</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're just getting started. Our roadmap includes new features
                for writers, enhanced community tools, and expanded content
                categories. But our core mission remains unchanged: to be the
                best place on the internet for thoughtful, well-crafted content.
              </p>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border bg-muted/50 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Join Our Journey</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a reader, writer, or just curious, there's a place
            for you at Brainwaves.
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
