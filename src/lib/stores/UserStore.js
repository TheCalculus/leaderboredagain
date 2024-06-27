
import { writable } from "svelte/store";

export const user = writable({
    username: null,
    email: null,
    uuid: 0,
});