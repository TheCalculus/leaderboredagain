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

    const [loginForm, createForm] = [useForm(), useForm()];
</script>

<main>
    <form use:createForm>
        <p class="subheading">sign up</p>

        <input
            type="text"
            name="username"
            placeholder="username"
            use:validators={[required]}
        />
        <input
            type="email"
            name="email"
            placeholder="email"
            use:validators={[required, email]}
        />
        <input
            type="password"
            name="password"
            placeholder="password"
            use:validators={[required]}
        />

        <button disabled={!$createForm.valid}>submit</button>
    </form>

    <form use:loginForm>
        <p class="subheading">sign in</p>

        <input
            type="text"
            name="username"
            placeholder="username"
            use:validators={[required]}
        />
        <input
            type="password"
            name="password"
            placeholder="password"
            use:validators={[required]}
        />

        <label class="container">
            <input type="checkbox" name="remember" />
            <span>remember?</span>
        </label>

        <button disabled={!$loginForm.valid}>submit</button>
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
    }

    form > * {
        width: 100%;
        padding: 0.5rem;
        margin: 0.1rem 0;
    }

    form > button {
        width: calc(100% + 1rem);
        padding: 1.5rem;
    }

    input[type=checkbox] {
        width: max-content;
        padding: 0;
        margin: 0;
    }
</style>
