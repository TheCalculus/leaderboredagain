import supabase from "$lib/supabase";

export async function load({ params }) {
    const board = (await supabase
        .from("boards")
        .select("*")
        .eq("id", params?.identifier)
        .single()).data;

    return { board };
}
