<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import { onMount } from "svelte";
    import ArticlesList from "$components/ArticlesList.svelte";
    import TopBoxes from "$components/TopBoxes.svelte";
    import type { PageData } from "./$types";
    import LatestArt from "$components/LatestArt.svelte";

    let isVisible = $state(false);

    let { data, form } = $props();
    let posts = data.posts;
    let showCaption =
        "Imagem criada com Flux Pro @ <a href='https://mistral.ai/' class='underline hover:opacity-50'>Mistral</a>";
    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
    let metadata = {
        image: "/post-images/c6fde762-a667-49c6-81e4-b0bb88a99024.jpg",
        text: "Hooooorrrrssssse",
    };
    let showCode = false;
    let roundedImage = "bottom";
</script>

<svelte:head>
    <title>Futurewise</title>
    <meta
        name="description"
        content="Aprenda cómo aproveitar a inteligência artificial para aumentar sua produtividade. Fique por dentro das ferramentas, notícias e treinamentos."
    />
</svelte:head>

<section class="relative py-10 md:py-20 px-[32px] md:px-5 md:px-auto">
    <div
        class="pointer-events-none absolute left-0 top-0 bg-cover bg-[-120px_-370px] md:bg-[0px_-110px] -z-10 opacity-100"
        style="height:100%;width:100%;background-image:image-set(url(/post-images/bg-2.png) 1x, url(/post-images/bg-2.png) 2x);"
    ></div>
    <div class="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        <div>
            <Newsletter {form} />
        </div>
        <div class="relative flex-1">
            <LatestArt
                {metadata}
                scale="big"
                darkComment
                {showCode}
                {roundedImage}
                sticky="relative !right-0 !rounded-none md:absolute md:!-top-5 md:!right-0 max-w-[285px]"
            />
            {#if showCaption}
                <div
                    class="z-50 absolute bg-primary-900 rounded-xl text-white py-[0.4rem] px-4 text-xs rotate-2 left-0 -bottom-[10.5rem] md:-bottom-[5.5rem]"
                >
                    {@html showCaption}
                </div>
            {/if}
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
