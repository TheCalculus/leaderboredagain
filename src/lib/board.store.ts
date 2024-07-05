import { writable } from "svelte/store";

export const board = writable({
    id: "",
    name: "",
    owner: "",
    rankings: "",
    participants: 0
});