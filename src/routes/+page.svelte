<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import { onMount } from "svelte";
    import ArticlesList from "$components/ArticlesList.svelte";
    import TopBoxes from "$components/TopBoxes.svelte";
    import type { PageData } from "./$types";
    import bgImage from "$lib/images/futurewise-yellow.png";
    import LatestArt from "$components/LatestArt.svelte";

    let isVisible = $state(false);

    let { data }: { data: PageData } = $props();
    // export let data;
    let posts = data.posts;

    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
    let metadata = {
        image: "/post-images/issues/1-horse-brazil.png",
        text: "Hooooorrrrssssse",
    };
    let showCode = false;
    let roundedImage = "bottom";
</script>

<svelte:head>
    <title>Futurewise</title>
    <meta name="description" content="Vamos impulsionar sua vida e seu negócio com o poder da IA!" />
</svelte:head>

<section class="relative py-10 md:py-20 px-[32px] md:px-5 md:px-auto">
    <div class="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        <div><Newsletter /></div>
        <div class="relative flex-1">
            <LatestArt
                {metadata}
                scale="big"
                darkComment
                {showCode}
                {roundedImage}
                sticky="relative !right-0 !rounded-none md:absolute md:!-top-5 md:!right-0 max-w-[285px]"
            />
        </div>
    </div>

    <!-- <div
        class="relative md:absolute md:top-0 md:right-0 w-full md:w-[1000px] aspect-1 md:h-full bg-[center_center] md:bg-[350px_-70px] bg-cover md:bg-cover bg-no-repeat"
        style="background-image:url({bgImage})"
    ></div> -->

    <div id="particles-js" class="z-10"></div>
</section>
<TopBoxes />
<div class="border-t border-t-black px-5 md:px-auto">
    <ArticlesList {posts} />
</div>
