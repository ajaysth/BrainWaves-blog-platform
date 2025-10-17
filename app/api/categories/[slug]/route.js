import { NextResponse } from 'next/server';
import db from '@/lib/prisma';

export async function GET(request, { params }) {
  const { slug } = params;

  try {
    const category = await db.category.findUnique({
      where: {
        slug: slug,
      },
      include: {
        posts: {
          include: {
            author: true, // Include author details for each post
          },
        },
      },
    });

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error('Error fetching category by slug:', error);
    return NextResponse.json({ error: 'Failed to fetch category' }, { status: 500 });
  }
}
