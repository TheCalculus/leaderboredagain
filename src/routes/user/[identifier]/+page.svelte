<script lang="ts">
    import { page } from "$app/stores";

    const identifier = $page.params.identifier;

    export let data;
    $: ({ supabase, session, boards } = data);

    async function logout() {
        supabase.auth.signOut();
    }
</script>

<div>
    <p class="subheading">actions</p>

    <p>id {session?.user.id}</p>
    <p>email {session?.user.email}</p>
    <p>created {session?.user.created_at}</p>

    <button on:click={logout} disabled={session?.user.id != identifier}>log out</button>
</div>

<div>
    <p class="subheading">{session?.user.email}</p>
    <p>display names</p>
    <p>profile picture</p>
    <p>status</p>
    <p>boards</p>
</div>

<div>
    <p class="subheading">your boards</p>

    {#if boards != undefined && boards?.length > 0}
        <ul class="boards">
            {#each boards as board}
                <li>
                    <a href="/board/{board.id}">{board.name}</a>
                    <span>created {board.created}</span>
                </li>
            {/each}
        </ul>
    {:else}
        <p>its looking empty here... how about you <a href="/board">create board</a>?</p> 
        <p>boards not loading? dm me on discord</p>
    {/if}
</div>

<style>
    .boards {
        list-style-type: none;
    }
</style>
