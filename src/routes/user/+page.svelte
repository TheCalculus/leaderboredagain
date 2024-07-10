<script lang="ts">
    import type { PageData } from "./$types";

    export let loading = false;
    export let method = "";

    export let username = "";
    export let email = "";
    export let password = "";

    export let data: PageData;
    let { supabase } = data;

    async function handleSubmit() {
        loading = true;
        let response;

        try {
            switch (method) {
                case "sign_up":
                    response = await supabase.auth.signUp({ email, password });
                    console.log(response);
                    break;
                case "sign_in":
                    response = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });
                    console.log(response);
                    break;
                default:
                    throw new Error("Invalid method");
            }

            if (response.error) console.error(response.error.message);
            else console.log(response);
        } catch (error) {
        } finally {
            loading = false;
        }
    }
</script>

<main>
    <form on:submit|preventDefault={handleSubmit}>
        <p class="subheading">sign in</p>

        <input
            type="text"
            name="username"
            placeholder="username"
            bind:value={username}
        />
        <input
            type="password"
            name="password"
            placeholder="password"
            bind:value={password}
        />

        <label class="container">
            <input type="checkbox" name="remember" />
            <span>remember?</span>
        </label>

        <button
            type="submit"
            disabled={loading}
            on:click={() => (method = "sign_in")}>submit</button
        >
    </form>

    <form on:submit|preventDefault={handleSubmit}>
        <p class="subheading">sign up</p>

        <input
            type="text"
            name="username"
            placeholder="username"
            bind:value={username}
        />
        <input
            type="email"
            name="email"
            placeholder="email"
            bind:value={email}
        />
        <input
            type="password"
            name="password"
            placeholder="password"
            bind:value={password}
        />

        <button
            type="submit"
            disabled={loading}
            on:click={() => (method = "sign_up")}>submit</button
        >
    </form>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
