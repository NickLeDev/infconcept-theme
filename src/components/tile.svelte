<script>
    /**
     * @typedef {Object} Image
     * @property {string} src
     * @property {string | undefined} mobileSrc
     * @property {string} caption
     */
    /**
     * @typedef {Object} Tile
     * @property {string | undefined} name
     * @property {Image | undefined} image
     * @property { string | undefined} link
     * @property { HTMLHtmlElement | undefined} text
     */

    /** @type {{ tile: Tile }} */
    let { tile } = $props();
</script>

<div class="tile">
    {#if tile.link}
        <a class="link" href={tile.link} rel="noopener" aria-label={tile.name}
        ></a>
    {/if}
    {#if tile.image}
        <picture>
            <source
                srcset={tile.image.mobileSrc}
                media="(orientation: portrait)"
            />
            <source srcset={tile.image.src} />
            <img srcset={tile.image.src} alt={tile.image.caption} />
        </picture>
    {/if}
    {#if tile.name}
        <p class="name">
            {tile.name}
        </p>
    {/if}
    {#if tile.text}
        <p class="text">
            {tile.text}
        </p>
    {/if}
</div>

<style lang="scss">
    .tile {
        position: relative;
        width: 100%;

        .link {
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 2;
        }

        picture {
            display: block;
            padding-bottom: 300px;
            position: relative;
            width: 100%;
            overflow: hidden;

            img {
                display: block;
                height: auto;
                height: 100%;
                position: absolute;
                object-fit: cover;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }

            & + * {
                margin-top: 20px;
            }
        }

        &:hover {
            color: red;
            img {
                height: 110%;
                transition: 300ms 0 all;
                width: 110%;
            }
        }

        .name {
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.95rem;

            & + * {
                margin-top: 10px;
            }
        }

        .text {
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.4rem;
            font-family: "Raleway";
        }
    }
</style>
