<script>
    let { image, mobileImage, caption } = $props();
</script>

<picture class="imageFullWidth">
    <source srcset={mobileImage} media="(orientation: portrait)" />
    <source srcset={image} />
    <img srcset={image} alt={caption} />
</picture>

<style lang="scss">
    .imageFullWidth :global {
        display: block;
        width: 100%;

        img {
            width: 100%;
        }
    }
</style>
