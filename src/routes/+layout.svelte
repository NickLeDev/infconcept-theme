<script>
    let { children } = $props();
</script>

<main>
    {@render children()}
</main>

<style lang="scss">
    :root {
        --blue: #1a283c;
        --grey: #f4f4f4;
        --darkgrey: #848484;
        --white: #fff;
    }

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

    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: $sans-serif;
        font-size: 10px;
        font-weight: 500;
        overflow-x: hidden;
        width: 100%;
    }

    :global(html) {
        color: #1a283c;
        font-family: $sans-serif;
        font-size: 10px;
        font-weight: 500;
        overflow-x: hidden;
        width: 100%;
    }
</style>
