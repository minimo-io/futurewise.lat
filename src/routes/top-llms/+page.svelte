<script>
    import { Heading, P } from "flowbite-svelte";
    import { ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
</script>

<svelte:head>
    <title>Principáis LLMs - Futurewise</title>
    <meta
        name="description"
        content="Descubra as principais LLMs (Modelos de Linguagem de Grande Escala) que estão transformando o futuro da inteligência artificial."
    />
</svelte:head>

<section class="mx-auto max-w-[1200px] p-10">
    <Heading tag="h1" class="text-3xl mb-10">Top LLMs (Large-Language Models)</Heading>
    <Heading tag="h2" class="text-xl mb-10">
        Descubra as principais LLMs (Modelos de Linguagem de Grande Escala) que estão transformando o futuro da
        inteligência artificial.
    </Heading>

    <Heading tag="h3" class="text-2xl my-4">Código Aberto</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://chat.mistral.ai/" target="_blank" rel="noopener nofollow">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />LeChat
            </a>
            por Mistral - Originária da 🇫🇷França
            <span>
                - Mistral AI é uma startup de inteligência artificial baseada na França, conhecida por seus modelos de
                linguagem de código aberto. A empresa foi cofundada em abril de 2023 por Arthur Mensch, ex-membro da
                Google DeepMind, juntamente com Guillaume Lample e Timothée Lacroix, que anteriormente trabalhavam na
                Meta AI.
            </span>
        </li>
        <li>
            <a href="https://chat.deepseek.com/"><ArrowUpRightFromSquareOutline class="pr-1 inline" />Deepseek</a>
            por Deepseek - Originária da 🇨🇳China
            <span>
                - A DeepSeek AI desenvolveu vários modelos de código aberto, incluindo o DeepSeek-Coder-V2 e o
                DeepSeek-V2.5.
            </span>
        </li>
    </ul>

    <Heading tag="h3" class="text-2xl mb-4 mt-8">Proprietárias</Heading>
    <ul class="mt-4">
        <li>
            <a href="https://www.perplexity.ai/" target="_blank" rel="noopener nofollow">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />Perplexity
            </a>
            por Perplexity AI
        </li>
        <li>
            <a href="https://claude.ai/" target="_blank" rel="noopener nofollow">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />Claude
            </a>
            por Anthropic AI
        </li>
        <li>
            <a href="https://chatgpt.com/" target="_blank" rel="noopener nofollow">
                <ArrowUpRightFromSquareOutline class="pr-1 inline" />ChatGPT
            </a>
            por OpenAI
        </li>
    </ul>
</section>

<div class="max-w-screen-lg mx-auto h-full py-10">
    <Heading tag="h2" customSize="text-3xl font-extrabold my-10"></Heading>
    <ul></ul>
</div>

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
