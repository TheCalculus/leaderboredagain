<script lang="ts">
    import { page } from "$app/stores";

    const identifier = $page.params.identifier;

    export let data;
    export let { session, board } = data;
</script>

<main>
    <div>
        <p class="heading">{board?.name}</p>
        <p class="subheading">
            board id {identifier}<br />
            created {board?.created}<br />
            owner id {board?.owner}<br />
            are you the owner? {board?.owner == session?.user.id}
        </p>
    </div>
</main>
