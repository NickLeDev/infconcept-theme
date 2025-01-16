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

        &[class~="header"] + [class~="white"] {
            padding-top: 0;

            @container (min-width: 768px) {
                padding-top: 100px;
            }
        }

        &[class~="header"] + [class~="grey"] {
            padding-top: 0;

            @container (min-width: 768px) {
                padding-top: 100px;
            }
        }

        &.header :global {
            position: relative;

            @container (min-width: 768px) {
                height: 600px;
            }

            .flex-row :global {
                overflow: visible;

                justify-content: flex-end;

                @container (min-width: 768px) {
                    justify-content: flex-start;
                }
            }

            .imageFullWidth {
                height: calc(100% - 250px);
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
                align-self: center;
                background-color: var(--blue);
                color: white;
                padding: 30px 20px;
                margin-top: 50%;
                max-width: 605px;
                position: relative;
                z-index: 2;
                font-size: 1.5rem;
                line-height: 2.1rem;

                @container (min-width: 768px) {
                    padding: 80px 40px;
                    margin-top: 50px;
                    font-size: 1.8rem;
                    line-height: 2.52rem;
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
