<script>
    let { file, text } = $props();
</script>

<a href={file} class="file-button" download>
    <span class="text">
        {text}
    </span>
    <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.83936 10.5586C4.99656 10.7055 11.5996 17.319 11.5996 17.319L18.3599 10.5587"
            stroke="#1A283C"
            stroke-width="2"
            stroke-linecap="round"
        />
        <path
            d="M11.5996 17.3187V2.23096"
            stroke="#1A283C"
            stroke-width="2"
            stroke-linecap="round"
        />
        <path
            d="M1.05566 21.3721V24.3416H22.1439V21.3721"
            stroke="#1A283C"
            stroke-width="2"
            stroke-linecap="round"
        />
    </svg>
</a>

<style lang="scss">
    .file-button {
        background-color: var(--grey);
        border: 0;
        color: var(--blue);
        display: flex;
        text-decoration: none;
        padding: 44px 20px;
        gap: 20px;
        flex: 1 1 100%;
        font-family: "Montserrat";
        font-size: 2.2rem;
        justify-content: space-between;

        .text {
            text-align: left;
        }

        svg {
            margin-top: 10px;
        }

        @container (min-width: 576px) {
            flex: 1 1 20%;
        }
    }
</style>
