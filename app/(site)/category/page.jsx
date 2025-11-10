import { CategoryHero } from "@/components/category-hero";
import db from "@/lib/prisma";
import CategoryClientPage from "@/components/category-client-page";

async function getCategories() {
  const categories = await db.category.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });
  return categories;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen">
      <CategoryHero />
      <CategoryClientPage categories={categories} />
    </main>
  );
}

