<script lang="ts">
    import { board } from "$lib/board.store";
    import { goto } from "$app/navigation";

    let loading = false;
    let boardName = "";

    export let data;
    const { session, supabase } = data;

    async function handleSubmit() {
        loading = true;

        const { data, error } = await supabase
            .from("boards")
            .insert({ name: boardName, owner: session?.user.id })
            .select()
            .single();

        if (error) {
            console.error(error);
            return;
        }

        goto(`/board/${data.id}`);
        board.set(data);

        loading = false;
    }
</script>

<main>
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
</main>

<style>
    div > * {
        width: 100%;
        padding: 0.5rem;
    }
</style>
