import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma';

export async function POST(req: Request) {
  try {
    // lo que mandas
    const body = await req.json();
    // crear con prisma
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
    // regresar como respuesta el post que creaste
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
