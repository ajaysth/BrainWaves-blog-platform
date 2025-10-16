"use client";

import { useState, useRef } from "react";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Eye, ImageIcon, X } from "lucide-react";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages((prev) => [
            ...prev,
            {
              id: Date.now() + Math.random(),
              url: e.target.result,
              name: file.name,
            },
          ]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const insertImageToContent = (imageUrl, imageName) => {
    const imageMarkdown = `\n![${imageName}](${imageUrl})\n`;
    setContent((prev) => prev + imageMarkdown);
  };

  return (
    <div>
      <DashboardNavbar title="Create New Post" />

      <div className="p-6">
        <Card className="p-6 bg-card border-border max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input
                id="title"
                placeholder="Enter your post title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-bold h-auto py-3"
              />
            </div>

            <div className="space-y-2">
              <Label>Images</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Upload Images
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <span className="text-sm text-muted-foreground">
                  {images.length} image{images.length !== 1 ? "s" : ""} uploaded
                </span>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className="relative group rounded-lg overflow-hidden border border-border bg-muted"
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            insertImageToContent(image.url, image.name)
                          }
                        >
                          Insert
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeImage(image.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-2 bg-background/95">
                        <p className="text-xs truncate text-foreground/70">
                          {image.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your post content here... (Use Markdown format)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Tip: Images will be inserted as Markdown. You can also drag and
                drop images above.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button variant="default" className="ml-auto">
                Publish
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
