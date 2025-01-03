<div class="image-box"></div>

<style lang="scss">
    $lg: 992px;

    .image-box {
        background-position: center center;
        background-size: cover;
        height: 500px;
        width: 100%;

        .image-box--in-first-row & {
            display: none;
        }
    }

    @media screen and (min-width: $lg) {
        .image-box {
            height: 100%;

            .image-box--in-first-row & {
                display: block;
            }
        }
    }
</style>
