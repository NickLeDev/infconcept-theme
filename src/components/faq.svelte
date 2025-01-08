<script>
    let { children } = $props();
</script>

<div class="faq">
    {@render children?.()}
</div>

<style lang="scss">
    .faq {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        @container (min-width: 768px) {
            flex-direction: row;
        }
    }
</style>
