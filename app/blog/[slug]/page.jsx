import BlogPostDetail from "@/components/blog-post-detail";
import db from "@/lib/prisma";
import { remark } from 'remark';
import remarkSlug from 'remark-slug';
import remarkHtml from 'remark-html';
import { visit } from 'unist-util-visit';

async function getPost(slug) {
  const post = await db.post.findUnique({
    where: { slug },
    include: {
      author: {
        include: {
          profile: true,
        },
      },
      category: true,
      images: true,
      tags: true,
    },
  });

  if (!post) {
    return null;
  }

  const headings = [];
  const extractHeadings = () => (tree) => {
    visit(tree, 'heading', (node) => {
      const text = node.children[0].value;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ id, title: text, level: node.depth });
      node.properties = node.properties || {};
      node.properties.id = id;
    });
  };

  const processedContent = await remark()
    .use(extractHeadings)
    .use(remarkSlug)
    .use(remarkHtml)
    .process(post.content);

  const htmlContent = String(processedContent);

  const tableOfContents = headings;

  let relatedPosts = await db.post.findMany({
    where: {
      categoryId: post.categoryId,
      NOT: {
        id: post.id,
      },
    },
    include: {
      images: true,
    },
    take: 3, // Limit to 3 related posts
  });

  // If no related posts from the same category, fetch other recent posts
  if (relatedPosts.length === 0) {
    relatedPosts = await db.post.findMany({
      where: {
        NOT: {
          id: post.id,
        },
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });
  }

  const previousPost = await db.post.findFirst({
    where: {
      createdAt: { lt: post.createdAt },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      slug: true,
      title: true,
    },
  });

  const nextPost = await db.post.findFirst({
    where: {
      createdAt: { gt: post.createdAt },
    },
    orderBy: {
      createdAt: 'asc',
    },
    select: {
      slug: true,
      title: true
    },
  });

  return { ...post, content: htmlContent, tableOfContents, relatedPosts, previousPost, nextPost };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPostDetail post={post} />;
}
