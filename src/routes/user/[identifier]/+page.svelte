<script lang="ts">
export let data;

const { user } = data;
</script>

<div>
    <p class="subheading">actions</p>

    <p>id {user.id}</p>
    <p>email {user.email}</p>
    <p>created {user.created_at}</p>

    <button on:click={logout}>log out</button>
</div>

<!--
<div class="two-span">
    <p class="subheading">{session?.user.email}'s boards</p>

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
-->

<style>
    .boards {
        list-style-type: none;
        padding: 0;
    }

    .two-span {
        grid-column: span 2;
    }
</style>
