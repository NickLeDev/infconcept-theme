<script>
    let { children, color } = $props();
    const backgroundColor = color ?? "white";
</script>

<section class="section {backgroundColor}">
    {@render children?.()}
</section>

<style lang="scss">
    .section :global {
        padding: 100px 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;

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

        title :global {
            margin-bottom: 40px;
        }
    }
</style>
