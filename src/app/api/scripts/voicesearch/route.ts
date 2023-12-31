import fs from "fs";
import path from "path";
import { NextResponse } from 'next/server';
import { headers } from "next/headers";

export const revalidate = 10;

export async function GET() {
    const headersList = headers();
    const referer = headersList.get('referer');
    if(referer == 'https://1225878.commercesuite.com.br/'){
        const filePath = path.join(process.cwd(), 'src', 'scripts', 'voicesearch.js');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        return new NextResponse(fileContents, {
            headers: {
                'Content-Type': 'application/javascript'
            },
        });
    }
    return NextResponse.json({'erro':'não autorizado'});
}