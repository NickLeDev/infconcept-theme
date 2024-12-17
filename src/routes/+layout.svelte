<script>
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style lang="scss">
    $blue: #1a283c;
    $grey: #f4f4f4;
    $darkgrey: #848484;
    $white: #fff;

    $serif: "Raleway", sans-serif;
    $sans-serif: "Montserrat", sans-serif;

    // responsive

    $sm: 576px;

    // Medium devices (tablets, 768px and up)
    $md: 768px;

    // Large devices (desktops, 992px and up)
    $lg: 992px;

    // Extra large devices (large desktops, 1200px and up)
    $xl: 1200px;

    .button {
        position: relative;

        &--file {
            color: $white;
            display: inline-block;
            font-family: $serif;
            font-size: 1.4rem;
            font-weight: bold;
            margin-top: 10px;
            padding: 10px 45px 10px 10px;
            text-decoration: none;
        }

        &__icons {
            display: block;
            height: 22px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 22px;
        }

        &__arrow,
        &__bar {
            font-size: 1rem;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
        }

        &__arrow {
            font-size: 2rem;
            top: 0px;
            transition: top 0.3s;
        }

        &__bar {
            bottom: 0;
        }

        &:hover {
            .button__arrow {
                top: 3px;
            }
        }
    }

    ::global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body),
    :global(html) {
        font-family: $sans-serif;
        font-size: 10px;
        font-weight: 500;
        overflow-x: hidden;
        width: 100%;
    }

    .read-more :global {
        color: currentColor;
        display: inline-block;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        padding-bottom: 4px;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;

        &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 0;
            transition:
                width 0s ease,
                background 0.5s ease;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            height: 3px;
            width: 0;
            background: currentColor;
            transition: width 0.5s ease;
        }

        &:hover {
            &::before {
                background: currentColor;
                transition: width 0.5s ease;
                width: 100%;
            }

            &::after {
                background: transparent;
                transition: all 0s ease;
                width: 100%;
            }
        }
    }

    //-- Grid Col
    .flex-vertical :global {
        display: flex;
        flex-direction: column;
    }

    //-- Button

    .button {
        position: relative;

        &--file {
            color: $white;
            display: inline-block;
            font-family: $serif;
            font-size: 1.4rem;
            font-weight: bold;
            margin-top: 10px;
            padding: 10px 45px 10px 10px;
            text-decoration: none;
        }

        &__icons {
            display: block;
            height: 22px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 22px;
        }

        &__arrow,
        &__bar {
            font-size: 1rem;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
        }

        &__arrow {
            font-size: 2rem;
            top: 0px;
            transition: top 0.3s;
        }

        &__bar {
            bottom: 0;
        }

        &:hover {
            .button__arrow {
                top: 3px;
            }
        }
    }

    //-- text-box
    .text-box :global {
        color: currentColor;
        padding: 90px 35px;

        &__title {
            font-family: $sans-serif;
            font-size: 2.6rem;
            font-weight: 500;
            line-height: 34px;
            margin-top: 35px;
            margin-bottom: 35px;

            > * {
                font-family: $sans-serif;
                font-size: 2.6rem;
                font-weight: 500;
            }

            > h1 {
                font-size: 3rem;
            }
        }

        &__subtitle {
            font-family: $serif;
            font-size: 1.2rem;
            line-height: 17.5px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__text {
            color: currentColor;
            font-family: $sans-serif;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: 1px;
            line-height: 26px;

            > p {
                color: currentColor;
                font-family: $serif;
                font-size: 1.6rem;
                font-weight: 500;
                letter-spacing: 1px;
                line-height: 26px;
            }

            em,
            strong,
            li {
                color: currentColor;
                font-family: $serif;
                font-size: 1.6rem;
            }

            em {
                display: inline-block;
                margin: 20px 0 10px;
            }

            strong {
                font-weight: bold;
            }
        }

        &__list {
            margin-top: 20px;
        }

        &__link {
            color: currentColor;
            font-family: $serif;
            margin-top: 35px;
        }
    }

    @media screen and (min-width: $lg) {
        .text-box {
            padding: 90px 85px;
        }
    }

    //-- Module in-view
    $s: 600;

    [data-module="inview"] {
        opacity: 1;
        transform: translateX(0px) translateY(0px) translateZ(0px);
        transition:
            opacity #{$s}ms ease 0s,
            transform calc($s) ms ease 0s;

        &.inview--not {
            opacity: 0;
            transform: translate(0, -40px);

            &.image-box {
                opacity: 0;
                transform: translate(0, 0);
            }
        }

        &.inview--1 {
            transition-delay: calc($s / 2) ms;
        }

        &.inview--2 {
            transition-delay: calc($s) ms;
        }

        &.inview--3 {
            transition-delay: calc($s * 1.5) ms;
        }
    }
</style>
