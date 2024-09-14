<script lang="ts">
</script>

<div></div>

<div class="main">
    <form action="" method="post">
        <p class="subheading">sign in</p>

        <!-- usernames don't work yet -->
        <input
            type="text"
            name="username"
            placeholder="email"
        />
        <input
            type="password"
            name="password"
            placeholder="password"
        />

        <label class="container">
            <input type="checkbox" name="remember" />
            <span>remember?</span>
        </label>

        <button type="submit">submit</button>
    </form>

    <form action="?/signup" method="post">
        <p class="subheading">sign up</p>

        <input
            type="text"
            name="username"
            placeholder="username"
        />
        <input
            type="email"
            name="email"
            placeholder="email"
        />
        <input
            type="password"
            name="password"
            placeholder="password"
        />

        <button type="submit">submit</button>
    </form>
</div>

<div></div>

<style>
.main {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>
