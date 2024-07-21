import { persisted } from "svelte-persisted-store";

export const board = persisted("board", {
    id: "",
    name: "",
    owner: "",
    rankings: "",
    participants: 0,
});

export const user = persisted("user", {
    id: "",
    username: "",
    flair: "",
});
 
export default { board, user };
