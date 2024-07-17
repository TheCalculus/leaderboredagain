import supabase from "$lib/supabase";
import { getBoardById, getBoardRankings } from "$lib/database";

export async function load({ params }: any) {
    const board    = await getBoardById(params?.identifier);
    const rankings = await getBoardRankings(params?.identifier);

    return { board, rankings };
}
