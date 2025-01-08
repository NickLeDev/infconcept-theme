<script>
    let { children } = $props();
</script>

<div class="download-tile">
    {@render children?.()}
</div>

<style lang="scss">
    .download-tile :global {
        background-color: var(--blue);
        color: white;
        font-family: "Montserrat";
        font-size: 1.6rem;
        line-height: 1.95rem;
        padding: 50px 30px;
        flex: 1 1 40%;

        .title {
            & + * {
                margin-top: 10px;
            }
        }

        & > .text {
            font-family: "Raleway";
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.4rem;
            display: block;
            padding-right: 20px;

            @container (min-width: 576px) {
                padding-right: 65px;
            }
        }

        .file-button {
            align-items: center;
            padding: 15px 20px;
            margin-top: 45px;
            max-width: 295px;
            font-family: "Montserrat";
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 1.95rem;

            svg {
                margin-top: 0;
            }
        }
    }
</style>
