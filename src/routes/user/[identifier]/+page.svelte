<script lang="ts">
    import type { PageData } from "./$types";
    import { page } from "$app/stores";

    const identifier = $page.params.identifier;

    export let data: PageData;
    const { supabase, session } = data;

    async function logout() {
        supabase.auth.signOut();
    }
</script>

<main>
    <div>
        <p class="subheading">viewing user</p>

        <p>uuid {identifier}</p>

        {#if session?.user.id == identifier}
            <button on:click={logout}>log out</button>
        {/if}
    </div>
</main>

<style>
</style>
