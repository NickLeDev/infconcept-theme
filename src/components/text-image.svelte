<script>
    let { children = undefined, reverse = false, faq = false } = $props();
</script>

<div class="text-image" class:reverse class:faq>{@render children?.()}</div>

<style lang="scss">
    .text-image {
        align-items: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
        width: 100%;

        @container (min-width: 768px) {
            flex-direction: row;
        }

        &.reverse {
            flex-direction: column-reverse;

            @container (min-width: 768px) {
                flex-direction: row-reverse;
            }
        }

        &.faq {
            align-items: flex-start;
        }
    }
</style>
