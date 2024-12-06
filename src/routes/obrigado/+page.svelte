<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import { onMount } from "svelte";
    import ArticlesList from "$components/ArticlesList.svelte";
    import TopBoxes from "$components/TopBoxes.svelte";
    import LatestArt from "$components/LatestArt.svelte";

    let isVisible = $state(false);

    let { data, form } = $props();
    let posts = data.posts;
    let showCaption =
        "Imagem criada com Flux Pro @ <a href='https://mistral.ai/' target='_blank' rel='noopener' class='underline hover:opacity-50'>Mistral</a>";
    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
    let metadata = {
        image: {
            src: "/post-images/obrigado-blur-final.jpg",
        },
    };
    let showCode = false;
    let roundedImage = "bottom";
</script>

<svelte:head>
    <title>Obrigado - Futurewise</title>
    <meta name="description" content="Obrigado por se inscrever. Vamos aprender sobre IA." />
</svelte:head>

<section class="relative py-10 md:py-20 px-[32px] md:px-5 md:px-auto">
    <div
        class="fw-home-bg pointer-events-none absolute left-0 top-0 bg-cover bg-[0px_-380px] md:bg-[0_-222px] -z-10 opacity-100"
        style="height:100%;width:100%;background-image:image-set(url(/post-images/bg-2.png) 1x, url(/post-images/bg-2.png) 2x);"
    ></div>
    <div class="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        <div>
            <section>
                <div class="container max-w-[1200px] mx-auto px-4 md:px-0">
                    <div class="max-w-3xl text-center md:text-left">
                        <h2 class="text-3xl md:text-5xl mb-4 font-sans text-white">
                            Obrigado<br /> por
                            <span class="partial-border text-white font-bold">se inscrever!</span>
                        </h2>
                        <p class="text-gray-300 my-8 mb-16 md:mr-20 text-sm md:text-base">
                            Agora você faz parte da nossa comunidade sobre inteligência artificial. E receberá todas as
                            novidades sobre como aproveitar a IA para aumentar sua produtividade.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <div class="relative flex-1">
            <LatestArt
                {metadata}
                scale="big"
                darkComment
                {showCode}
                {roundedImage}
                sticky="relative !mt-20 md:!mt-0 !right-0 !rounded-none md:absolute md:!-top-5 md:!right-0 max-w-[285px]"
            />
            {#if showCaption}
                <div
                    class="z-50 absolute bg-primary-900 rounded-xl text-white py-[0.4rem] px-4 text-xs rotate-2 left-0 -bottom-[10.5rem] md:-bottom-[9rem]"
                >
                    {@html showCaption}
                </div>
            {/if}
        </div>
    </div>

    <div id="particles-js" class="z-10"></div>
</section>

<div class="px-5 md:px-auto mt-20">
    <section class="max-w-[1200px] mx-auto">
        <div class="container mx-auto px-4 mt-48 md:mt-10 lg:pr-52">
            <h2 id="noticias" class="text-lg font-black my-5">Vamos aprender sobre IA!</h2>

            <p>
                Agora, você receberá todas as sextas-feiras as novidades mais importantes sobre como aproveitar a
                inteligência artificial para aumentar sua produtividade.
            </p>
            <p>
                O futuro (e o presente) da produtividad vai ser daqueles que consigam entender e dominar os diferentes
                modelos de inteligencia artificial, a través de ferramentas confiaveis e treinamentos adequados, para
                expandir a suas capacidades.
            </p>
            <p>
                👉 Aquí as <a href="/ferramentas" title="Ferramentas IA" class="font-bold underline">ferramentas</a>.
            </p>
            <p>
                👉 Aquí os <a href="/ferramentas" title="Cursos sobre IA" class="font-bold underline"
                    >cursos em destaque</a
                >.
            </p>
            <p>
                👉 Mais sobre <a
                    href="/noticias/seja-um-ninja-das-redes-neuronais"
                    title="Nossa missão"
                    class="font-bold underline">nossa missão aqui</a
                >.
            </p>
        </div>
    </section>
</div>

<style>
    p {
        @apply my-4;
    }
</style>
