import { fetchTrending } from "@/lib/utils";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const trends = await fetchTrending()

    console.log(trends)
    return NextResponse.json(trends)
    
}