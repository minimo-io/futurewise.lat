<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
</script>

<svelte:head>
    <title>Ferramentas - Futurewise</title>
    <meta
        name="description"
        content="Ferramentas de inteligência artificial (IA) para impulsionar o seu negócio e sua vida!"
    />
</svelte:head>

<section class="mx-auto max-w-[1200px] p-10">
    <Heading tag="h1" class="text-3xl mb-10">Ferramentas</Heading>

    <Heading tag="h2" class="text-2xl my-4">Geração de Imagens com IA</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://www.img2go.com/pt" rel="nofollow noopener" target="_blank"> img2go </a>
            - Em 🇧🇷Português
        </li>
        <li>
            <a href="https://www.imagine.art/" rel="nofollow noopener" target="_blank"> Imagine.Art </a>
        </li>
        <li>
            <a href="https://labs.google/fx/pt/tools/image-fx" rel="nofollow noopener" target="_blank">
                Imagen3 pela Deepmind
            </a>
        </li>

        <li>
            <a href="https://huggingface.co/spaces/ginipick/FLUXllama" rel="nofollow noopener" target="_blank"
                >FluxLLama em HuggingFace</a
            >
        </li>
        <li>
            <a href="https://huggingface.co/spaces/prithivMLmods/FLUX-LoRA-DLC" rel="nofollow noopener" target="_blank"
                >FLUX-LoRA-DLC</a
            >
        </li>
    </ul>
    <Heading tag="h2" class="text-2xl my-4">Desenvolvimento de Software com IA</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://bolt.new/" rel="nofollow noopener" target="_blank">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />bolt.new
            </a>
            <span>
                - Bolt.new é uma plataforma de desenvolvimento web que utiliza IA para criar, executar, editar e
                implantar aplicativos web de pilha completa, permitindo que os desenvolvedores gerem aplicativos
                funcionais rapidamente com a ajuda de prompts de IA.
            </span>
        </li>
    </ul>
    <Heading tag="h2" class="text-2xl my-4">Música com IA</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://suno.com/" rel="nofollow noopener" target="_blank">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />Suno
            </a>
            <span>
                - Lançado em dezembro de 2023, a Suno AI é uma plataforma de inteligência artificial gerativa que
                permite aos usuários criar música realista a partir de prompts de texto, oferecendo planos gratuitos e
                pagos, recentemente atualizada para a versão V4, visando democratizar a criação musical.
            </span>
        </li>
    </ul>
    <Heading tag="h2" class="text-2xl my-4">Diálogo e efeitos sonoros com IA</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://elevenlabs.io/" rel="nofollow noopener" target="_blank">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />ElevenLabs
            </a>
            <span>
                - ElevenLabs é uma empresa de IA de áudio que desenvolve modelos para gerar fala, vozes e efeitos
                sonoros realistas em 32 idiomas, conhecida por sua síntese de fala natural e ferramentas de clonagem de
                voz, tornando o conteúdo acessível em qualquer idioma e voz.
            </span>
        </li>
        <li>
            <a href="https://fish.audio/" rel="nofollow noopener" target="_blank">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />FishAudio
            </a>
            <span>
                - A FishAudio é uma empresa especializada em tecnologias de áudio, focando principalmente em modelos de
                inteligência artificial para geração e manipulação de voz.
            </span>
        </li>
    </ul>
    <Heading tag="h2" class="text-2xl my-4">Vídeo com IA</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://runwayml.com/" rel="nofollow noopener" target="_blank">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />Runway
            </a>

            <span>
                - Runway é uma empresa de IA que oferece ferramentas para artistas criarem e transformarem mídias com
                modelos de aprendizado de máquina, sem precisar de programação.
            </span>
        </li>
    </ul>
</section>

<style>
    a {
        @apply font-bold;
    }
    a:hover {
        @apply underline;
    }
    ul {
        @apply list-inside list-disc marker:text-primary-400;
    }
    li {
        @apply my-3;
    }
    li > span {
        @apply text-gray-400;
    }
</style>
