<script lang="ts">
    import "../app.css";

    import Navbar from "$lib/components/Navbar.svelte";

    import { invalidate } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;
    $: ({ supabase, session } = data);

    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange(
            (event, newSession) => {
                if (newSession?.expires_at !== session?.expires_at) {
                    invalidate("supabase:auth");
                }
            },
        );

        return () => data.subscription.unsubscribe();
    });
</script>

<div class="wrapper">
    <div class="navbar"><Navbar {data} /></div>
    <div class="content"><slot /></div>
</div>

<style>
    .wrapper {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.2fr 2.6fr 0.2fr;
        gap: 0px 0px;
        grid-template-areas:
            "navbar navbar navbar"
            "content content content";
    }

    .navbar {
        grid-area: navbar;
    }

    .content {
        grid-area: content;
        margin: 0 auto;
        padding: 1rem 0;
    }

    @media only screen and (max-width: 1100px) {
        .content {
            width: 90%;
        }
    }

    @media only screen and (max-width: 760px) {
        .content {
            width: 100%;
        }
    }
</style>
