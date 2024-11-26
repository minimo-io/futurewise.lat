<script>
    import { Heading, Img } from "flowbite-svelte";
    import NewsletterSmallBox from "$components/NewsletterSmallBox.svelte";

    export let data;
    const { metadata, html } = data;
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
        customSize="text-2xl font-extrabold font-sans md:text-4xl md:text-left md:px-0 leading-[110%] md:leading-[110%]"
        >{metadata.title}</Heading
    >
    <Heading
        tag="h2"
        class="mb-4"
        customSize="text-base md:text-lg leading-[110%] md:leading-[110%] font-light text-white md:text-lg md:max-w-[75%]"
        >{metadata.summary}</Heading
    >
    <p class="md:text-left text-gray-400 text-xs md:text-base">
        <time>{new Date(metadata.created).toLocaleDateString()}</time> -
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
            <ol class="px-4 md:px-4">
                {#each metadata.tags as tag}
                    <li>#{tag}</li>
                {/each}
            </ol>
        </article>

        <aside
            class="w-full md:w-4/12 mt-10 md:mt-10 relative block -top-16 md:-top-20 order-0 md:order-1"
        >
            <div class="sticky top-20 my-7">
                <div class="my-2">
                    <a href={metadata.image}>
                        <Img
                            class="my-8 rounded-xl scale-[1.2] md:hover:scale-[1.83] md:hover:cursor-pointer rotate-2 md:hover:rotate-0 transition"
                            alt="arte-da-semana"
                            src={metadata.image}
                        ></Img>
                    </a>
                    <span class="text-xs relative block my-3 pl-3 font-bold"
                    ></span>
                    <pre
                        class="flex relative -top-5 md:-top-10 !p-5 !bg-gray-50 !rounded-none md:!rounded-xl">
<code class="text-xs self-center"
                            >PROMPT > A horse made from total transparent glass, on a plain
background light reflection of Brazil flag --ar 2:3 --style
raw --v 6.1 --stylize 800 --personalize 1bbmibj</code
                        >
                </pre>
                </div>
                <div class="hidden md:inline"><NewsletterSmallBox /></div>
            </div>
        </aside>
    </section>
</div>
