<script>
    import Tile from "./tile.svelte";
    let { items } = $props();
</script>

<div class="tiles-container">
    {#if items}
        <div class="tiles">
            {#each items as tile}
                <Tile {tile} />
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .tiles-container {
        width: 100%;
    }

    .tiles {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px 30px;

        @container (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @container (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
