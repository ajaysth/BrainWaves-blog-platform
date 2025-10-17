'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardNavbar } from '@/components/dashboard/DashboardNavbar';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Save, Eye, ImageIcon, X, Loader2, Star } from 'lucide-react';
import { toast } from 'react-toastify';
import React from 'react';

export default function EditPostPage({ params }) {
  const { id } = React.use(params);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [images, setImages] = useState([]);
  const [featuredImage, setFeaturedImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('DRAFT');
  const [loading, setLoading] = useState(true); // Set to true initially for loading existing post
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesRes = await fetch('/api/categories');
        if (!categoriesRes.ok) throw new Error('Failed to fetch categories');
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);

        // Fetch post data
        const postRes = await fetch(`/api/posts/${id}`);
        if (!postRes.ok) throw new Error('Failed to fetch post');
        const postData = await postRes.json();

        setTitle(postData.title);
        setContent(postData.content);
        setExcerpt(postData.excerpt || '');
        setImages(postData.images.map(img => ({ ...img, id: img.id || Date.now() + Math.random() }))); // Ensure images have client-side IDs
        setFeaturedImage(postData.featuredImage || '');
        setCategoryId(postData.categoryId);
        setTags(postData.tags.map(tag => tag.name).join(', '));
        setStatus(postData.status);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = [];

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          if (!res.ok) {
            throw new Error(`Failed to upload ${file.name}`);
          }

          const data = await res.json();
          uploadedImages.push({
            id: Date.now() + Math.random(),
            url: data.url,
            name: file.name,
            isFeatured: false,
          });
        } catch (error) {
          toast.error(error.message);
        }
      }
    }

    setImages((prev) => [...prev, ...uploadedImages]);
  };

  const removeImage = (imageId) => {
    setImages((prev) => {
      const updatedImages = prev.filter((img) => img.id !== imageId);
      if (featuredImage === prev.find(img => img.id === imageId)?.url) {
        setFeaturedImage('');
      }
      return updatedImages;
    });
  };

  const toggleFeatured = (imageId) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id === imageId) {
          const newIsFeatured = !img.isFeatured;
          if (newIsFeatured) {
            setFeaturedImage(img.url);
          } else if (featuredImage === img.url) {
            setFeaturedImage('');
          }
          return { ...img, isFeatured: newIsFeatured };
        } else {
          return { ...img, isFeatured: false };
        }
      })
    );
  };

  const insertImageToContent = (imageUrl, imageName) => {
    const imageMarkdown = `
![${imageName}](${imageUrl})
`;
    setContent((prev) => prev + imageMarkdown);
  };

  const handleSubmit = async (postStatus) => {
    setLoading(true);
    setError(null);
    setStatus(postStatus);

    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          excerpt,
          categoryId,
          status: postStatus,
          images: images.map(img => ({ url: img.url, isFeatured: img.isFeatured })),
          tags: tags.split(',').map(tag => tag.trim()),
          featuredImage,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update post');
      }

      toast.success(`Post ${postStatus.toLowerCase()}ed successfully!`);
      router.push('/dashboard/posts');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <DashboardNavbar title="Edit Post" />
        <div className="p-6 text-center">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <DashboardNavbar title="Edit Post" />
        <div className="p-6 text-center text-destructive">Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <DashboardNavbar title="Edit Post" />

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
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                onValueChange={setCategoryId}
                value={categoryId}
                disabled={loading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Enter comma-separated tags..."
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Enter a short summary of your post..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={4}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label>Images</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={loading}
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
                  disabled={loading}
                />
                <span className="text-sm text-muted-foreground">
                  {images.length} image{images.length !== 1 ? 's' : ''} uploaded
                </span>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {images.map((image) => (
                    <div
                      key={image.id}
                      className={`relative group rounded-lg overflow-hidden border-2 border-border bg-muted`}
                    >
                      <a href={image.url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={image.url || '/placeholder.svg'}
                          alt={image.name}
                          className="w-full h-24 object-cover"
                        />
                      </a>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            insertImageToContent(image.url, image.name)
                          }
                          disabled={loading}
                        >
                          Insert
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeImage(image.id)}
                          disabled={loading}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={image.isFeatured ? 'primary' : 'secondary'}
                          onClick={() => toggleFeatured(image.id)}
                          disabled={loading}
                        >
                          <Star className="h-4 w-4" />
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
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground">
                Tip: Images will be inserted as Markdown. You can also drag and
                drop images above.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => handleSubmit('DRAFT')}
                disabled={loading || !title || !content || !categoryId}
              >
                {loading && status === 'DRAFT' ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Save Draft
              </Button>
              <Button variant="outline" disabled={loading}>
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button
                variant="default"
                className="ml-auto"
                onClick={() => handleSubmit('PUBLISHED')}
                disabled={loading || !title || !content || !categoryId}
              >
                {loading && status === 'PUBLISHED' ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Publish
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
