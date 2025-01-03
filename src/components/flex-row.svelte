<script>
    let { children, color = "", reverse = false } = $props();
    let backgroundColor = color ? `flex-row--${color}` : "";
</script>

<div class="flex-row {backgroundColor}" class:flex-row--reverse={reverse}>
    {@render children?.()}
</div>

<style lang="scss">
    $lg: 992px;

    .flex-row {
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &--reverse {
            flex-direction: column-reverse;
        }

        &--blue {
            color: #1a283c;
        }

        &--white {
            color: #fff;
        }

        &--grey {
            color: #f4f4f4;
        }
    }

    @media screen and (min-width: $lg) {
        .flex-row {
            flex-direction: row;

            &--reverse {
                flex-direction: row;
            }
        }
    }
</style>
