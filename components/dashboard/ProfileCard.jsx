"use client";

import { useUser } from "@clerk/nextjs";
import { Mail, MapPin, Calendar, LinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProfileCard() {
  const { user } = useUser();

  if (!user) {
    return null; // or a loading skeleton
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <img
            src={user.imageUrl}
            alt={user.fullName || "User profile picture"}
            className="h-24 w-24 rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-foreground">{user.fullName}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Full Stack Developer & Writer
        </p>

        <div className="mt-6 flex w-full justify-around border-y border-border py-4">
          <div>
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">1.2K</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">342</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </div>

        <div className="mt-6 w-full space-y-3 text-left">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{user.primaryEmailAddress.emailAddress}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Joined January 2024</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <LinkIcon className="h-4 w-4" />
            <a href="#" className="text-primary hover:underline">
              johndoe.com
            </a>
          </div>
        </div>

        <Button className="mt-6 w-full">Edit Profile</Button>
      </div>
    </Card>
  );
}
