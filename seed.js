import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 15 and its powerful features.",
    category: "Technology",
    tags: ["Next.js", "React", "Web Dev"],
    date: new Date("2024-12-15"),
  },
  {
    slug: "design-systems-2024",
    title: "Building Scalable Design Systems in 2024",
    excerpt: "Explore best practices for creating and maintaining design systems that scale.",
    category: "Design",
    tags: ["UI/UX", "Design", "CSS"],
    date: new Date("2024-12-14"),
  },
  {
    slug: "ai-business-transformation",
    title: "How AI is Transforming Modern Business",
    excerpt: "Discover the impact of artificial intelligence on business operations and strategy.",
    category: "Business",
    tags: ["AI", "Business", "Technology"],
    date: new Date("2024-12-13"),
  },
];

async function main() {
  console.log('Start seeding ...');

  // Find the user
  const user = await prisma.user.findFirst({ where: { email: 'etiawsaj@gmail.com' } });

  if (!user) {
    console.error('User not found. Please make sure the user exists in the database and the email is correct.');
    return;
  }

  for (const post of mockPosts) {
    // Create or find the category
    const category = await prisma.category.upsert({
      where: { name: post.category },
      update: {},
      create: { name: post.category, slug: post.category.toLowerCase() },
    });

    // Create or find the tags
    const tags = await Promise.all(post.tags.map(async (tagName) => {
      return await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName, slug: tagName.toLowerCase().replace(/\s+/g, '-') },
      });
    }));

    // Create or update the post
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.excerpt, // Using excerpt as content for simplicity
        date: post.date,
        status: 'PUBLISHED',
        category: {
          connect: { id: category.id },
        },
        tags: {
          set: tags.map(tag => ({ id: tag.id })),
        },
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.excerpt, // Using excerpt as content for simplicity
        date: post.date,
        status: 'PUBLISHED',
        author: {
          connect: { id: user.id },
        },
        category: {
          connect: { id: category.id },
        },
        tags: {
          connect: tags.map(tag => ({ id: tag.id })),
        },
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });