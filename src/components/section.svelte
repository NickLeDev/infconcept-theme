<script>
    let {
        children = undefined,
        color = "white",
        title = "",
        header = false,
    } = $props();
</script>

<section class="section {color}" class:header>
    {#if title}
        <span class="title">
            {@html title}
        </span>
    {/if}
    {@render children?.()}
</section>

<style lang="scss">
    .section :global {
        padding: 100px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        container-type: inline-size;

        & :global > * {
            max-width: 1240px;
            width: 100%;
        }

        &.white {
            background-color: var(--white);
        }

        &.grey {
            background-color: var(--grey);
        }

        &[class~="white"] + [class~="white"] {
            padding-top: 0;
        }

        &[class~="grey"] + [class~="grey"] {
            padding-top: 0;
        }

        &.header :global {
            position: relative;
            padding-bottom: 0;
            padding-top: 0;

            .flex-row :global {
                overflow: visible;
                height: 100%;
            }

            .imageFullWidth {
                height: 500px;
                left: 0;
                position: absolute;
                top: 0;
                z-index: 1;
                max-width: none;

                @container (min-width: 768px) {
                    height: 100%;
                }

                img {
                    height: 100%;
                    object-fit: cover;
                }
            }

            .text-box {
                background-color: var(--blue);
                color: white;
                padding: 30px 20px;
                max-width: 605px;
                position: relative;
                margin-top: 320px;
                z-index: 2;
                font-size: 1.5rem;
                line-height: 2.1rem;

                @container (min-width: 768px) {
                    align-self: flex-end;
                    padding: 80px 40px;
                    font-size: 1.8rem;
                    line-height: 2.52rem;
                    transform: translateY(50px);
                }

                .title {
                    font-size: 2.4rem;
                    line-height: 2.9rem;

                    @container (min-width: 768px) {
                        font-size: 4rem;
                        line-height: 4.8rem;
                    }
                }
            }

            & + .section {
                padding-top: 300px;
            }
        }

        .title > * :global {
            color: var(--blue);
            font-weight: 600;
            font-size: 2.2rem;
            display: block;
            margin-bottom: 40px;

            @container (min-width: 992px) {
                font-size: 3rem;
            }
        }
    }
</style>
