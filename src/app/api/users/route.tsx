import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export async function GET() {
  const users = await prisma.users.findMany({
    select: {
      email: true
    }
  });
  return NextResponse.json({ users })
}

export async function POST(request: Request){
    
    const res = await request.json();

    if(res.email && res.password){
      const user: object | null = await prisma.users.findUnique({
        where: {
          email: res.email,
        },
        select: {
          email: true,
        },
      });

      if(!user){
        const newUser = await prisma.users.create({
          data: {
            email: res.email,
            password: res.password,
          },
        });
        return NextResponse.json({ newUser })
      }
      else {
        return NextResponse.json({ mensagem: "usuário já existe" })
      }
    }
    
    return NextResponse.json({ mensagem: "não tem um parametro" })
}

