<script>
    let { image = "", mobileImage = "", caption = "" } = $props();
</script>

<picture class="image-box">
    <source srcset={mobileImage} media="(orientation: portrait)" />
    <source srcset={image} />
    <img srcset={image} alt={caption} />
</picture>

<style lang="scss">
    .image-box :global {
        padding-bottom: 500px;
        position: relative;
        overflow: hidden;
        width: 100%;

        @container (min-width: 992px) {
            max-width: 500px;
        }

        img {
            left: 50%;
            object-fit: cover;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
    }
</style>
