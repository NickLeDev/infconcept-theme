<script>
    let { children, size = 12 } = $props();

    let colSize =
        size && size > 1 && size < 12 ? `flex-col--12  flex-col--${size}` : `flex-col--12`;
</script>

<div class="{colSize}">
    {@render children?.()}
</div>

<style lang="scss">
    $lg: 992px;

    .flex-col {
        flex: 0 0 100%;

        &--1 {
            flex: 0 0 8.3333%;
            max-width: 8.3333%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--2 {
            flex: 0 0 16.6667%;
            max-width: 16.6667%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--3 {
            flex: 0 0 25%;
            max-width: 25%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--4 {
            flex: 0 0 33.3333%;
            max-width: 33.3333%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--5 {
            flex: 0 0 41.6667%;
            max-width: 41.6667%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--6 {
            flex: 0 0 50%;
            max-width: 50%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--7 {
            flex: 0 0 58.333%;
            max-width: 58.333%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--8 {
            flex: 0 0 66.6667%;
            max-width: 66.6667%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--9 {
            flex: 0 0 75%;
            max-width: 75%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--10 {
            flex: 0 0 83.333%;
            max-width: 83.333%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--11 {
            flex: 0 0 91.6667%;
            max-width: 91.6667%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }

        &--12 {
            flex: 0 0 100%;
            max-width: 100%;
            min-height: 1px;
            position: relative;
            width: 100%;
        }
    }

    @media screen and (min-width: $lg) {
        .flex-col {
            &--1 {
                flex: 0 0 8.3333%;
                max-width: 8.3333%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--2 {
                flex: 0 0 16.6667%;
                max-width: 16.6667%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--3 {
                flex: 0 0 25%;
                max-width: 25%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--4 {
                flex: 0 0 33.3333%;
                max-width: 33.3333%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--5 {
                flex: 0 0 41.6667%;
                max-width: 41.6667%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--6 {
                flex: 0 0 50%;
                max-width: 50%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--7 {
                flex: 0 0 58.333%;
                max-width: 58.333%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--8 {
                flex: 0 0 66.6667%;
                max-width: 66.6667%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--9 {
                flex: 0 0 75%;
                max-width: 75%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--10 {
                flex: 0 0 83.333%;
                max-width: 83.333%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }

            &--11 {
                flex: 0 0 91.6667%;
                max-width: 91.6667%;
                min-height: 1px;
                position: relative;
                width: 100%;
            }
        }
    }
</style>
