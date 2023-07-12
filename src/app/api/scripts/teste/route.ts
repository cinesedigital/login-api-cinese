import fs from "fs";
import path from "path";
import { NextResponse } from 'next/server';



export async function GET() {
    const filePath = path.join(process.cwd(), 'src', 'scripts', 'teste.js');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    return new NextResponse(fileContents, {
        headers: {
            'Content-Type': 'application/javascript'
        },
    });
}

export const revalidate = 'force-cache'