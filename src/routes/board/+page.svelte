<script lang="ts">
</script>

<div></div>

<div>
    {#if session?.user}
        <form on:submit|preventDefault={handleSubmit}>
            <p class="subheading">create board</p>

            <input
                type="text"
                name="name"
                placeholder="board name"
                bind:value={boardName}
            />

            <button disabled={loading}>submit</button>
        </form>
    {:else}
        <p class="heading">create an account first</p>
        <p>
            this is so that ur board doesn't get hacked. ur email wont be
            used for anything except login
        </p>
    {/if}
</div>

<div></div>

<style>
div > * {
    width: 100%;
    padding: 0.5rem;
}
</style>
