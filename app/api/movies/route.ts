import { fetchMovies } from './../../../lib/utils/index';
import { NextResponse } from "next/server";




export async function GET (req: Request) {
    const movies = await fetchMovies()

    return NextResponse.json(movies)
}