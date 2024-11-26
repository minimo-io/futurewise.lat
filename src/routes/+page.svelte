<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import { onMount } from "svelte";
    import LatestArticles from "$components/LatestArticles.svelte";
    import TopBoxes from "$components/TopBoxes.svelte";
    import type { PageData } from "./$types";
    import bgImage from "$lib/images/futurewise-yellow.png";

    let isVisible = $state(false);

    let { data }: { data: PageData } = $props();
    // export let data;
    let posts = data.posts;

    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
</script>

<svelte:head>
    <title>Futurewise</title>
    <meta
        name="description"
        content="Vamos impulsionar sua vida e seu negócio com o poder da IA!"
    />
</svelte:head>

<section class="relative py-10 md:py-20 px-5 md:px-auto">
    <Newsletter />
    <div
        class="relative md:absolute md:top-0 md:right-0 w-full md:w-[1000px] aspect-1 md:h-full bg-[center_center] md:bg-[350px_-70px] bg-cover md:bg-cover bg-no-repeat"
        style="background-image:url({bgImage})"
    ></div>
    <div id="particles-js" class="z-10"></div>
</section>
<TopBoxes />
<div class="border-t border-t-black px-5 md:px-auto">
    <LatestArticles {posts} />
</div>
