<script>
    import { page } from "$app/stores";
    const identifier = $page.params.identifier;

    async function logout() {}
</script>

<main>
    <div>
        viewing user number {identifier}
        <button on:click={logout}>log out</button>
    </div>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    div > button {
        width: calc(100% + 1rem);
        padding: 1.5rem;
    }
</style>
