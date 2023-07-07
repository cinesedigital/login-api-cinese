import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Daniela',
  //     email: 'dani@live.com',
  //   },
  // });
 
  const users = await prisma.user.findMany();
 
  return NextResponse.json({ users })
}

