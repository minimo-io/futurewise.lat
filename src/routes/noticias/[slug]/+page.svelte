<script>
    import { Heading, Span, Button, Img } from "flowbite-svelte";
    export let data;
    const { metadata, html } = data;
</script>

<svelte:head>
    <title>{metadata.title} - Neural Ninja</title>
    <meta name="description" content={metadata.summary} />
</svelte:head>

<article class="max-w-screen-lg mx-auto my-10 px-4 md:px-10">
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-3xl font-extrabold font-sans md:text-4xl text-center md:text-left px-4 md:px-0"
        >{metadata.title}</Heading
    >
    <Heading
        tag="h2"
        class="mb-4"
        customSize="text-lg leading-[110%] md:leading-[120%] font-thin text-white md:text-xl text-center md:text-left px-4 md:px-0"
        >{metadata.summary}</Heading
    >
    <p class="text-center md:text-left text-gray-400">
        <i>Publicado:</i>
        <time>{new Date(metadata.created).toLocaleDateString()}</time>
    </p>
    <div class="px-4 md:px-0">
        <Img
            src={metadata.image}
            alt={metadata.url}
            size="mw-full rounded-2xl"
            class="shadow-xl dark:shadow-gray-800 mt-6"
        />
    </div>
    <!--<img alt="post-image" src={metadata.image} class="w-2/5" />-->
    <div class="nn-content my-7 px-4 md:px-4">
        {@html html}
    </div>
    <ol class="px-4 md:px-4">
        {#each metadata.tags as tag}
            <li>#{tag}</li>
        {/each}
    </ol>
</article>
