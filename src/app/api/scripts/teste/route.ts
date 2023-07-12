import fs from "fs";
import path from "path";
import { NextResponse } from 'next/server';

export const revalidate = 10;

export async function GET() {
    const filePath = path.join(process.cwd(), 'src', 'scripts', 'teste.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    return new NextResponse(fileContents, {
        headers: {
            'Content-Type': 'application/javascript'
        },
    });
}