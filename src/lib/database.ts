import supabase from "$lib/supabase";

export async function getUserByUsername(username: string) {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("username", username)
        .single();

    if (error)
        return null;

    return data;
}

export async function getBoardById(id: string) {
    const { data, error } = await supabase
        .from("boards")
        .select("*")
        .eq("id", id)
        .single();

    if (error)
        return null;

    return data;
}

export async function getBoardByOwner(uuid: string) {
    const { data, error } = await supabase
        .from("boards")
        .select("*")
        .eq("owner", uuid);

    if (error)
        return null;

    return data;
}

export async function getBoardRankings(id: string) {
    const { data, error } = await supabase
        .from("rankings")
        .select("owner, owner_username, points")
        .eq("id", id);

    if (error)
        return null;

    return data;
}
