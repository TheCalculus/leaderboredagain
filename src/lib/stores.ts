import { persisted } from "svelte-persisted-store";

export const boardStore = persisted("board", null);

// this doesnt do auth
export const userStore = persisted("user", null);
 
export default { boardStore, userStore };
