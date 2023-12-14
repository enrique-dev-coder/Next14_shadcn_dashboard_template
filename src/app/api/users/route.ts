import prisma from '../../../../prisma';
import { NextResponse } from 'next/server';

// NOTA , estas peticiones funciona en post man
// igual y esto se puede hacer como rest api para apps mas pequeñas

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    if (searchParams.has('q')) {
      const searchValue = searchParams.get('q');
      const usersSearched = await prisma.user.findMany({
        where: {
          name: {
            contains: searchValue || undefined,
          },
        },
        include: {
          posts: true,
        },
      });
      return NextResponse.json(usersSearched, { status: 200 });
    } else {
      const users = await prisma.user.findMany({
        include: {
          posts: true,
        },
      });
      return NextResponse.json(users, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'could not get tags' },
      { status: 200 }
    );
  }
}
