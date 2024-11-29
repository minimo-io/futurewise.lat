<script lang="ts">
    import { Heading, Img } from "flowbite-svelte";

    import LatestArt from "$components/LatestArt.svelte";

    export let data;
    const { metadata, html } = data;

    let sticky = "sticky";
</script>

<svelte:head>
    <title>{metadata.title} - Futurewise</title>
    <meta name="description" content={metadata.summary} />
</svelte:head>

<section
    class="max-w-[1200px] px-[32px] md:px-2 mx-auto my-10 md:pr-72 relative -top-[10px] md:top-0"
>
    <span class="partial-border partial-border-sm mb-4 font-bold"
        >Futurewise edição #1</span
    >
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-2xl font-bold font-sans md:text-4xl md:text-left md:px-0 leading-[110%] md:leading-[110%]"
    >
        {metadata.title}
    </Heading>
    <Heading
        tag="h2"
        class="mb-4"
        customSize="text-base md:text-lg leading-[110%] md:leading-[110%] font-light text-white md:text-lg md:max-w-[75%]"
    >
        {metadata.summary}
    </Heading>
    <p class="md:text-left text-gray-400 text-xs md:text-base">
        <time>{new Date(metadata.created).toLocaleDateString()}</time>
        -
        <time>Tempo de leitura: menos de 4 minutos</time>
    </p>
</section>

<div class="border-t border-t-gray-900 relative">
    <section
        class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-0 md:gap-20 relative"
    >
        <article
            class="flex-1 mt-5 order-1 md:order-0 -top-32 md:top-0 relative px-[32px] md:px-0"
        >
            <div class="fw-content mb-7 mt-0 px-[32] md:px-4 max-w">
                {@html html}
            </div>
            {#if metadata.tags}
                <ol class="px-4 md:px-4">
                    {#each metadata.tags as tag}
                        <li>#{tag}</li>
                    {/each}
                </ol>
            {/if}
        </article>

        <aside
            class="w-full md:w-4/12 mt-10 md:mt-10 relative block -top-16 md:-top-28 order-0 md:order-1"
        >
            <LatestArt {metadata} {sticky} showSubscribe />
        </aside>
    </section>
</div>
