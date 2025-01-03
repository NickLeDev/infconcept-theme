<script>
    import Tile from "./tile.svelte";
    let { title, items } = $props();
</script>

<div class="tiles">
    {#if title}
        <span class="tiles__title section__title">
            {@html title}
        </span>
    {/if}
    {#if items}
        <div class="tiles__list">
            {#each items as tile}
                <Tile {tile} />
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .tiles {
        width: 100%;
        container-type: inline-size;
    }

    .tiles__title :global > * {
        font-weight: 600;
        font-size: 3rem;
    }

    .section__title :global {
        display: inline-block;
        margin-bottom: 40px;
    }

    .tiles__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;

        @container (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @container (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
