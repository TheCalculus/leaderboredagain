import supabase from "$lib/supabase";

export async function load({ params }) {
    const boards = (await supabase
        .from("boards")
        .select("*")
        .eq("owner", params?.identifier)).data;

    return { boards };
}
