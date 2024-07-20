<script lang="ts">
    import { page } from "$app/stores";
    import { board as boardStore } from "$lib/board.store";
    import supabase from "$lib/supabase";

    const identifier = $page.params.identifier;

    export let data;
    $: ({ session, board, rankings } = data);

    // used for ui only
    let isOwner = false;
    $: (isOwner = board?.owner == session?.user.id);

    function setStarredBoard() {
        $boardStore = board;
    }

    async function deleteBoard() {
        const { error } = await supabase
            .from("boards")
            .delete()
            .eq("id", board?.id);

        if (error)
            return null;
    }

    let participantName = "";
    let participantPoints = 0;
    let participantAccount = false;
  
    async function addParticipant() {
        const { data, error } = await supabase
            .from("rankings")
            .insert(
                {
                    id: board?.id,
                    owner: participantName,
                    points: participantPoints,
                    anonymous: participantAccount
                }
            )
    }
</script>

<div>
    <p class="subheading">actions</p>

    <p>id {board?.id}</p>
    <p>owner {board?.owner}</p>
    <p>created {board?.created}</p>

    <button
        on:click={setStarredBoard}>
        star this board
    </button>

    <button 
        on:click={deleteBoard}
        disabled={!isOwner}>
        delete this board
    </button>

    <br /> <br />

    {#if isOwner}
        <form on:submit|preventDefault={addParticipant}>
            <input
                type="text"
                name="email or anonymous"
                placeholder="name"
                bind:value={participantName}
            />
            <input
                type="number"
                name="points"
                placeholder="points"
                bind:value={participantPoints}
            />

            <label for="account">
                <input
                    type="checkbox"
                    name="account"
                    bind:value={participantAccount}
                    checked
                />
                <span>is this an account?</span>
            </label>

            <button type="submit">add participant to board</button>
        </form>
    {/if}
</div>

<div class="two-span">
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
    {/if}
</div>

<style>
    ul {
        list-style: none;
        padding: 0;
    }

    ul > li {
        margin: 1rem 0;
    }

    .two-span {
        grid-column: span 2;
    }

    input[type=checkbox] {
        cursor: pointer;
    }
</style>
