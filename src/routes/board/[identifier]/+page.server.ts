import supabase from "$lib/supabase";

export async function load({ params }) {
    const board = (await supabase
        .from("boards")
        .select("*")
        .eq("id", params?.identifier)
        .single()).data;

    const rankings = (await supabase
        .from("rankings")
        .select("*")
        .eq("id", params?.identifier)).data;

    return { board, rankings };
}
