<script lang="ts">
import { boardStore, userStore } from "$lib/stores";

export let data;
const { user } = data;
</script>

<div></div>

<div>
    {#if user}
        <form on:submit|preventDefault={handleSubmit}>
            <p class="subheading">create board</p>

            <input
                type="text"
                name="name"
                placeholder="board name"
            />

            <button type="submit">create</button>
        </form>
    {:else}
        <p class="heading">create an account first</p>
        <p>
            this is so that ur board doesn't get hacked. ur email wont be
            used for anything except login
        </p>
    {/if}
</div>

<div></div>

<style>
div > * {
    width: 100%;
    padding: 0.5rem;
}
</style>
