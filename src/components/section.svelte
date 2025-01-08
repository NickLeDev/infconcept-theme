<script>
    let { children = undefined, color = "white", title = "" } = $props();
</script>

<section class="section {color}">
    {#if title}
        <span class="title">
            {@html title}
        </span>
    {/if}
    {@render children?.()}
</section>

<style lang="scss">
    .section :global {
        padding: 100px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        container-type: inline-size;

        & :global > * {
            max-width: 1240px;
            width: 100%;
        }

        &.white {
            background-color: var(--white);
        }

        &.grey {
            background-color: var(--grey);
        }

        &[class~="white"] + [class~="white"] {
            padding-top: 0;
        }

        &[class~="grey"] + [class~="grey"] {
            padding-top: 0;
        }

        .title > * :global {
            color: var(--blue);
            font-weight: 600;
            font-size: 2.2rem;
            display: block;
            margin-bottom: 40px;

            @container (min-width: 992px) {
                font-size: 3rem;
            }
        }
    }
</style>
