<script>
    import FlexRow from "../components/flex-row.svelte";
    import FlexCol from "../components/flex-col.svelte";
    import TextBox from "../components/text-box.svelte";
    import Tiles from "../components/tiles.svelte";
    import Section from "../components/section.svelte";
    import ImageFullWidth from "../components/image-full-width.svelte";
    import FileButtons from "../components/file-buttons.svelte";
    import DownloadTiles from "../components/download-tiles.svelte";
    import DownloadTile from "../components/download-tile.svelte";
    import FileButton from "../components/file-button.svelte";
</script>

<FlexRow>
    <FlexCol size={5}>
        <div class="image-box"></div>
    </FlexCol>
    <FlexCol size={7}>
        <TextBox title="<h2>Title</h2>"></TextBox>
    </FlexCol>
</FlexRow>

<Section color="grey" title="<h2>Les choix possibles</h2>">
    <FlexRow>
        <Tiles
            items={[
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                        mobileSrc: "/images/project2.png",
                    },
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                    },
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                    },
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                    },
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                    },
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://infconcept.com",
                    image: {
                        src: "/images/project.png",
                    },
                },
            ]}
        />
    </FlexRow>
</Section>
<ImageFullWidth
    image="/images/full.png"
    caption="Image full width"
    mobileImage="/images/project.png"
/>
<Section color="white" title="<h2>Des outils pour vous (4 tuiles)</h2>">
    <FlexRow>
        <FileButtons
            files={[
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
            ]}
        />
    </FlexRow>
</Section>
<Section color="white" title="<h2>Des outils pour vous (3 tuiles)</h2>">
    <FlexRow>
        <FileButtons
            files={[
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
            ]}
        />
    </FlexRow>
</Section>
<Section color="white" title="<h2>Des outils pour vous (2 tuiles)</h2>">
    <FlexRow>
        <FileButtons
            files={[
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
            ]}
        />
    </FlexRow>
</Section>
<Section color="white" title="<h2>Des outils pour vous (1 tuile)</h2>">
    <FlexRow>
        <FileButtons
            files={[
                {
                    text: "Dolor sit amet consecteur",
                    file: "/images/project.png",
                },
            ]}
        />
    </FlexRow>
</Section>
<Section color="grey" title="<h2>Lorem ipsum dolor sit amet</h2>">
    <FlexRow>
        <Tiles
            items={[
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://tkarra.com",
                    image: {
                        src: "/images/project.png",
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu elementum sapien, sed dignissim ipsum. Nunc scelerisque.",
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://tkarra.com",
                    image: {
                        src: "/images/project.png",
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu elementum sapien, sed dignissim ipsum. Nunc scelerisque.",
                },
                {
                    name: "Dolor sit amet consectetur",
                    link: "https://tkarra.com",
                    image: {
                        src: "/images/project.png",
                    },
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu elementum sapien, sed dignissim ipsum. Nunc scelerisque.",
                },
            ]}
        />
    </FlexRow>
</Section>
<Section color="grey">
    <FlexRow>
        <DownloadTiles>
            <DownloadTile>
                <h3 class="title">Dolor sit amet consectetur</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean pretium nisi eu mi commodo, nec placerat nulla
                    dapibus. Fusce eu elementum sapien, sed dignissim ipsum.
                    Nunc scelerisque ut metus eu feugiat. Donec blandit nulla
                    pretium eros rutrum, et tempor ex bibendum.
                </p>
                <FileButton
                    file="/images/project2.png"
                    text="Dolor sit amet consectetur"
                />
            </DownloadTile>
            <DownloadTile>
                <h3 class="title">Dolor sit amet consectetur</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean pretium nisi eu mi commodo, nec placerat nulla
                    dapibus. Fusce eu elementum sapien, sed dignissim ipsum.
                    Nunc scelerisque ut metus eu feugiat. Donec blandit nulla
                    pretium eros rutrum, et tempor ex bibendum.
                </p>
                <FileButton
                    file="/images/project2.png"
                    text="Dolor sit amet consectetur"
                />
            </DownloadTile>
        </DownloadTiles>
    </FlexRow>
</Section>
