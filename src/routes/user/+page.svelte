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

<div class="main">
    <form use:createForm>
        <p class="subheading">create</p>

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
        <p class="subheading">login</p>

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

        <button disabled={!$loginForm.valid}>submit</button>
    </form>
</div>

<style>
    .main {
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
    }

    form > button {
        width: calc(100% + 1rem);
    }
</style>
