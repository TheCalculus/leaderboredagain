<script lang="ts">
let board;
let deleteBoard;
let setStarredBoard;
let isOwner;
let addParticipant;
let participantName;
let participantPoints;
</script>

<div>
    <p class="subheading">actions</p>

    <p>id {board?.id}</p>
    <p>owner <a href="/user/{board?.owner}">{board?.owner_username}</a></p>
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
                name="name"
                placeholder="@username or anonymous"
                bind:value={participantName}
            />
            <input
                type="number"
                name="points"
                placeholder="points"
                bind:value={participantPoints}
            />

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
                    <a href="/user/{ranking.owner}">{ranking.owner_username}</a>
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
