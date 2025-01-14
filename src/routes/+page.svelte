<script>
    import FlexRow from "../components/flex-row.svelte";
    import TextBox from "../components/text-box.svelte";
    import Tiles from "../components/tiles.svelte";
    import Section from "../components/section.svelte";
    import ImageFullWidth from "../components/image-full-width.svelte";
    import FileButtons from "../components/file-buttons.svelte";
    import DownloadTiles from "../components/download-tiles.svelte";
    import DownloadTile from "../components/download-tile.svelte";
    import FileButton from "../components/file-button.svelte";
    import ImageBox from "../components/image-box.svelte";
    import TextImage from "../components/text-image.svelte";
    import Faq from "../components/faq.svelte";
</script>

<Section header>
    <ImageFullWidth
        image="/images/full.png"
        caption="Image full width"
        mobileImage="/images/project.png"
    />
    <FlexRow>
        <TextBox withPadding>
            <h1 class="title">
                Les nouveaux luminaires  suspendus INF Concept
            </h1>
            <p>
                Nous présentons une ligne de luminaires d'intérieur prêts à
                l'emploi, méticuleusement conçus pour incarner la beauté
                intemporelle du design d'inspiration scandinave, avec ses lignes
                épurées, ses formes organiques et son élégance raffinée.
            </p>
            <p>
                Conçus pour éclairer les espaces vastes et spacieux, ces
                luminaires sont sûrs de répondre aux défis les plus exigeants en
                matière d'éclairage.
            </p>
        </TextBox>
    </FlexRow>
</Section>
<Section color="grey">
    <FlexRow>
        <TextImage reverse>
            <ImageBox image="/images/image.png" caption="Première image" />
            <TextBox withPadding>
                <h2 class="title">Title</h2>
                <p>
                    Nunc scelerisque ut metus eu feugiat. Donec blandit nulla
                    pretium eros rutrum, et tempor ex bibendum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aenean pretium
                    nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu
                    elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum,
                    et tempor ex bibendum. Sed interdum turpis non arcu
                    tincidunt, ac egestas urna gravida. Phasellus eget gravida
                    augue.
                </p>
            </TextBox>
        </TextImage>
    </FlexRow>
</Section>

<Section>
    <FlexRow>
        <TextImage>
            <ImageBox image="/images/image7.png" caption="Deuxième image" />
            <TextBox withPadding>
                <h2 class="title">Title</h2>
                <p>
                    Nunc scelerisque ut metus eu feugiat. Donec blandit nulla
                    pretium eros rutrum, et tempor ex bibendum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aenean pretium
                    nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu
                    elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum,
                    et tempor ex bibendum. Sed interdum turpis non arcu
                    tincidunt, ac egestas urna gravida. Phasellus eget gravida
                    augue.
                </p>
            </TextBox>
        </TextImage>
    </FlexRow>
</Section>

<Section title="<h2>Les choix possibles</h2>">
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
<Section color="grey">
    <FlexRow>
        <TextImage faq>
            <ImageBox image="/images/image7.png" />
            <TextBox>
                <h2 class="title">Lorem ipsum dolor sit</h2>
                <p>
                    Nunc scelerisque ut metus eu feugiat. Donec blandit nulla
                    pretium eros rutrum, et tempor ex bibendum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aenean pretium
                    nisi eu mi commodo, nec placerat nulla dapibus. Fusce eu
                    elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum,
                    et tempor ex bibendum. Sed interdum turpis non arcu
                    tincidunt, ac egestas urna gravida. Phasellus eget gravida
                    augue.
                </p>
                <details name="faq" class="first">
                    <summary>Dolor sit amet consectetur</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Blandit nulla pretium eu</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Interdum turpis non arcu tincidunt</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Aenean pretium nisi eu mi commodo</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
            </TextBox>
        </TextImage>
    </FlexRow>
</Section>
<Section>
    <FlexRow>
        <Faq>
            <TextBox>
                <h2 class="title">Lorem ipsum dolor sit</h2>
                <p>
                    Etiam consequat, leo sit amet imperdiet tincidunt, arcu erat
                    ultricies urna, quis accumsan nulla quam vitae arcu.
                </p>
                <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    class="button">Dolor sit amet consectetur</a
                >
            </TextBox>
            <TextBox>
                <details name="faq">
                    <summary>Dolor sit amet consectetur</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Blandit nulla pretium eu</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Interdum turpis non arcu tincidunt</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
                <details name="faq">
                    <summary>Aenean pretium nisi eu mi commodo</summary>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    pretium nisi eu mi commodo, nec placerat nulla dapibus. Fusce
                    eu elementum sapien, sed dignissim ipsum. Nunc scelerisque ut
                    metus eu feugiat. Donec blandit nulla pretium eros rutrum, et
                    tempor ex bibendum.
                </details>
            </TextBox>
        </Faq>
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
