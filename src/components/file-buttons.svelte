<script>
    import FileButton from "./file-button.svelte";

    let { files } = $props();
</script>

<div class="file-buttons">
    {#each files as file}
        <FileButton {...file} />
    {/each}
</div>

<style lang="scss">
    .file-buttons {
        display: flex;
        gap: 20px;
        width: 100%;
        flex-wrap: wrap;
    }
</style>
