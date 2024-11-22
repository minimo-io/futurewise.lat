<script>
    import { Heading, Span, Button, Img } from "flowbite-svelte";
    export let data;
    const { metadata, html } = data;
</script>

<svelte:head>
    <title>{metadata.title} - Neural Ninja</title>
    <meta name="description" content={metadata.summary} />
</svelte:head>

<article class="max-w-screen-lg mx-auto my-10 px-4 md:px-0">
    <Heading
        tag="h1"
        class="mb-4"
        customSize="text-3xl font-extrabold  md:text-5xl text-center md:text-left px-4 md:px-0"
        >{metadata.title}</Heading
    >
    <p class="text-center md:text-left text-gray-400">
        <i>Publicado:</i>
        <time>{new Date(metadata.created).toLocaleDateString()}</time>
    </p>
    <Img
        src={metadata.image}
        alt="sample 1"
        size="mw-full rounded-2xl"
        class="shadow-xl dark:shadow-gray-800 mt-6"
    />
    <!--<img alt="post-image" src={metadata.image} class="w-2/5" />-->
    <div class="my-7 px-4 md:px-0">
        {@html html}
    </div>
</article>

<ol>
    {#each metadata.tags as tag}
        <li><a href="/?tag={tag}"> #{tag} </a></li>
    {/each}
</ol>
