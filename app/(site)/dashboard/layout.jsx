"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-background">
          <Sidebar />
          <div className="pl-16">
            <main className="min-h-screen">{children}</main>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
