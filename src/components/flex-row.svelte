<script>
    let { children, color = "", reverse = false } = $props();
    let backgroundColor = color ? `flex-row--${color}` : "";
</script>

<div class="flex-row {backgroundColor}" class:flex-row--reverse={reverse}>
    {@render children?.()}
</div>

<style lang="scss">
    .flex-row :global {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        gap: 30px;

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

        @container (min-width: 768px) {
            flex-direction: row;

            &--reverse {
                flex-direction: row-reverse;
            }
        }
    }
</style>
