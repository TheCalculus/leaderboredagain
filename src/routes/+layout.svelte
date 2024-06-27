<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
</script>

<div class="wrapper">
    <div class="navbar"><Navbar /></div>
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
        width: 65%;
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
