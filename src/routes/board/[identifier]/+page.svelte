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

<div>
    <p class="subheading">actions</p>

    <p>id {board?.id}</p>
    <p>owner {board?.owner}</p>
    <p>created {board?.created}</p>

    <button on:click={setStarredBoard}>star this board</button>
</div>

<div>
    <p class="subheading">{board?.name}</p>

    {#if rankings != undefined && rankings?.length > 0}
        <ul class="rankings">
            {#each rankings as ranking}
                <li>
                    <a href="/user/{ranking.owner}">test</a>
                    <span>{ranking.points}</span>
                </li>
            {/each}
        </ul>
    {:else}
        <p>its looking empty here... how about you add participants?</p> 
        <p>rankings not loading? dm me on discord</p>
    {/if}
</div>

<div>
    <p class="subheading">log</p>
    <p>logs will come here</p>
    <p>[+] jbuster added 10 points to pengo wengo</p>
    <p>[!] jbuster voted to *remove 10 points* from creamer</p>
    <p>[!] pengo wengo voted to *remove 10 points* from creamer</p>
    <p>[!] majority won: *remove 10 points* applied to creamer</p>
</div>

<style>
</style>
