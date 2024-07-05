<script>
</script>

<main>
    <div>
        <p class="subheading">create board</p>

        <input type="text" name="name" placeholder="board name" />

        <button disabled={false}>submit</button>
    </div>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    div {
        display: grid;
        gap: 0.5rem;
        justify-items: center;
        width: 300px;
    }

    div > * {
        width: 100%;
        padding: 0.5rem;
    }

    div > button {
        width: calc(100% + 1rem);
        padding: 1.5rem;
    }
</style>
