<script>
    let { children = undefined, withPadding = false } = $props();
</script>

<div class="text-box" class:withPadding>
    {@render children?.()}
</div>

<style lang="scss">
    .text-box :global {
        font-family: "Raleway";
        font-size: 1.8rem;
        font-weight: 500;
        color: var(--blue);
        line-height: 2.52rem;
        width: 100%;

        @container (min-width: 768px) {
            max-width: 600px;
        }

        &.withPadding {
            padding: 50px 0;

            @container (min-width: 992px) {
                padding: 115px 0;
            }
        }

        * ~ * {
            margin-top: 20px;
        }

        .title {
            font-size: 3rem;
            font-weight: 600;
            font-family: "Montserrat";
            line-height: 3.657rem;
        }

        details {
            border-top: 1px solid var(--blue);
            font-size: 1.6rem;
            line-height: 2.4rem;
            margin-top: 0;

            > summary {
                cursor: pointer;
                display: block;
                font-family: "Montserrat";
                font-size: 1.6rem;
                font-weight: 600;
                position: relative;
                padding: 15px 30px 15px 0;

                &::after {
                    content: "+";
                    font-size: 2.2rem;
                    line-height: 2.68rem;
                    position: absolute;
                    right: 0;
                }
            }

            &[open] {
                padding-bottom: 15px;
            }

            &[open] > summary::after {
                content: "-";
            }

            &.first {
                margin-top: 40px;
            }
        }

        .button {
            display: inline-block;
            border-radius: 0;
            background-color: var(--blue);
            color: white;
            margin-top: 20px;
            padding: 15px 20px;
            font-family: "Montserrat";
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.95rem;
            text-decoration: none;
        }
    }
</style>
