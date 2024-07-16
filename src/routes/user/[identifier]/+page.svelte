<script lang="ts">
    import { page } from "$app/stores";

    const identifier = $page.params.identifier;

    export let data;
    $: ({ supabase, session, boards } = data);

    async function logout() {
        supabase.auth.signOut();
    }
</script>

<main>
    <div>
        <p class="subheading">{session?.user.email}</p>
        <p>id {session?.user.id}</p>

        <p class="subheading">your boards</p>

        <ul class="boards">
            {#each boards as board}
                <li>
                    <a href="/board/{board.id}">{board.name}</a>
                    <span>created {board.created}</span>
                </li>
            {/each}
        </ul>

        {#if session?.user.id == identifier}
            <button on:click={logout}>log out</button>
        {/if}
    </div>
</main>

<style>
    .boards {
        list-style-type: none;
    }
</style>
