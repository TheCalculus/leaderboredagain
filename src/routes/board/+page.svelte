<script>
    import { user } from "$lib/stores/UserStore";
    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        email,
        required,
    } from "svelte-use-form";

    const createBoard = useForm();
</script>

<main>
    <form use:createBoard>
        <p class="subheading">create board</p>

        <input
            type="text"
            name="name"
            placeholder="board name"
            use:validators={[required]}
        />

        <button disabled={!$createBoard.valid}>submit</button>
    </form>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    form {
        display: grid;
        gap: 0.5rem;
        justify-items: center;
        width: 300px;
    }

    form > * {
        width: 100%;
        padding: 0.5rem;
    }

    form > button {
        width: calc(100% + 1rem);
        padding: 1.5rem;
    }
</style>
