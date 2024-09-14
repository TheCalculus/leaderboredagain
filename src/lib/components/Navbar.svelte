<script lang="ts">
import { board } from "$lib/stores";

export let data;

let session = null;
</script>

<nav>
    <a href="/">home</a>
    <a href="/board/cancac">cancac</a>

    <div class="empty"></div>

    {#if session}
        <a href="/user/{session.user.id}" class="right">{session.user.email}</a>
    {:else}
        <a href="/user" class="right">create user</a>
    {/if}

    {#if $board.id != ""}
        <a href="/board/{$board.id}" class="right">{$board.name}</a>
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
