<script lang="ts">
import { boardStore, userStore } from "$lib/stores";

const user = $userStore;
const board = $boardStore;
</script>

<nav>
    <a href="/">home</a>
    <a href="/board/cancac">cancac</a>

    <div class="empty"></div>

    {#if user}
        <a href="/user/{user.$id}" class="right">{user.name}</a>
    {:else}
        <a href="/user" class="right">create user</a>
    {/if}

    {#if board}
        <a href="/board/{board.id}" class="right">{board.name}</a>
    {:else}
        <a href="/user" class="right">none starred</a>
    {/if}

    <a href="/board" class="right">create board</a>
</nav>

<style>
nav {
    overflow: hidden;
    background: var(--sub-alt-color);
    height: 100%;
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 3fr 0.3fr 0.3fr 0.3fr;
    gap: 2.5rem;
    align-items: center;
    padding: 0 10%;
}

nav > * {
    float: left;
    display: block;
    text-align: center;
    text-decoration: none;
}

nav > .right {
    float: right;
}
</style>
