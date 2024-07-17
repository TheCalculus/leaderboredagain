import { getBoardByOwner } from "$lib/database";

export async function load({ params }: any) {
    const boards = await getBoardByOwner(params?.identifier);
    return { boards };
}
