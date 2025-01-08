<script>
    let { children = undefined } = $props();
</script>

<div class="download-tiles">
    {@render children?.()}
</div>

<style lang="scss">
    .download-tiles {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 100%;
    }
</style>
