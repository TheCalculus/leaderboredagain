<nav>
    <a href="/">Home</a>
    <a href="/board/">Board</a>
    <div class="empty"></div>
    <a href="/user" class="right">username</a>
    <a href="/board/null" class="right">opened board</a>
</nav>

<style>
    nav {
        overflow: hidden;
        background: var(--sub-alt-color);
        height: 100%;
        display: grid;
        grid-template-columns: 0.3fr 0.3fr 3fr 0.3fr 0.3fr;
        gap: 2.5rem;
        align-items: center;
        padding: 0 10%;
    }

    nav > * {
        float: left;
        display: block;
        text-align: center;
        text-decoration: none;
    }

    nav > .right {
        float: right;
    }
</style>
