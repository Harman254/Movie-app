import { NextResponse } from "next/server";

import { fetchSearch } from "@/lib/utils";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    if (typeof query !== "string") return;
    console.log(query)
    const result = await fetchSearch(query);

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
