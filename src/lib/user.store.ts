import { persisted } from "svelte-persisted-store";
// import { writable } from "svelte/store";

export const board = persisted("board", {
    id: "",
    name: "",
    flair: "",
});
