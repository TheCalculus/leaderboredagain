<script lang="ts">
    import { page } from "$app/stores";
    import { board as boardStore } from "$lib/board.store";

    const identifier = $page.params.identifier;

    export let data;
    $: ({ session, board, rankings } = data);

    function setStarredBoard() {
        $boardStore = board;
    }
</script>

<main>
    <div>
        <p class="subheading">{board?.name}</p>
        <p>by {board?.owner}</p>

        <p class="subheading">rankings</p>
        {#if rankings != undefined}
            <ul class="rankings">
                {#each rankings as ranking}
                    <li>
                        <a href="/user/{ranking.owner}">test</a>
                        <span>{ranking.points}</span>
                    </li>
                {/each}
            </ul>
        {/if}

        <button on:click={setStarredBoard}>star this board</button>
    </div>
</main>
