<script>
    import FlexRow from "../components/flex-row.svelte";
    import FlexCol from "../components/flex-col.svelte";
    import TextBox from "../components/text-box.svelte";
    import Tiles from "../components/tiles.svelte";
    import Section from "../components/section.svelte";
    import ImageFullWidth from "../components/image-full-width.svelte";
</script>

<FlexRow>
    <FlexCol size={5}>
        <div class="image-box"></div>
    </FlexCol>
    <FlexCol size={7}>
        <TextBox title="<h2>Title</h2>"></TextBox>
    </FlexCol>
</FlexRow>
<Section color="grey">
    <FlexRow>
        <Tiles
            title="<h2>Les choix possibles</h2>"
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
            ]}
        />
    </FlexRow>
</Section>
<ImageFullWidth
    image="/images/full.png"
    caption="Image full width"
    mobileImage="/images/project.png"
/>
<Section color="grey">
    <FlexRow>
        <Tiles
            title="<h2>Lorem ipsum dolor sit amet</h2>"
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
