"use client";

import { cn } from "@/lib/utils";

export default function Loader({ message = "Loading...", className }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-background/60 backdrop-blur-md",
        className
      )}
    >
      <div className="relative flex flex-col items-center gap-6 rounded-2xl border border-border/50 bg-card/60 px-10 py-8 shadow-2xl shadow-black/20 ring-1 ring-white/5">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-[3px] border-primary/20" />
          <div className="absolute inset-0 rounded-full border-[3px] border-t-transparent border-r-transparent border-primary animate-spin [animation-duration:1s]" />
          <div className="absolute inset-3 rounded-full bg-background/80 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/90 shadow-[0_0_24px_theme(colors.primary/60)]" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-widest text-muted-foreground uppercase">Please wait</span>
          <span className="text-xl font-semibold bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {message}
          </span>
        </div>

        {/* Indeterminate bar (pulse) */}
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Soft radial glow background */}
        <div className="pointer-events-none absolute -inset-10 -z-10">
          <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(75%_75%_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(168,85,247,0.10)_60%,rgba(34,211,238,0.05)_100%)]" />
        </div>
      </div>
    </div>
  );
}
