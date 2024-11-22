<script>
    import { Button } from "flowbite-svelte";
    import ArticleCard from "./ArticleCard.svelte";

    const articles = [
        {
            title: "ChatGPT Lança Modo de Voz Avançado no Navegador",
            description:
                "OpenAI lançou o Modo de Voz Avançado no ChatGPT web, com vozes naturais e melhorias; disponível para assinantes e em breve para usuários gratuitos.",
            image: "/post-images/chatgpt-no-navegador.webp",
            date: "2024-11-21 23:57:00",
            link: "/noticias/open-ai-lanca-modo-de-voz-avancado-no-navegador",
        },
        {
            title: "OpenAI Considera Desafiar o Google com um Navegador",
            description:
                "A OpenAI está supostamente desenvolvendo um navegador de internet baseado em ChatGPT, para desafiar diretamente o Google no mercado de busca.",
            image: "/post-images/openai-chrome-google.jpg",
            date: "22 Novembro, 2024",
            link: "/noticias/OpenAI-considera-desafiar-o-Google-com-um-navegador",
        },
        {
            title: "Top AI Tools for Developers",
            description:
                "Discover the most powerful AI tools that are reshaping the development landscape.",
            image: "https://placehold.co/600x400",
            date: "March 13, 2024",
            link: "/noticias/open-ai-lanca-modo-de-voz-avancado-no-navegador",
        },
    ];
</script>

<section class="max-w-screen-lg mx-auto">
    <div class="container mx-auto px-4 mt-10">
        <h2 class="text-2xl font-bold my-5">Últimos artigos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each articles as article}
                <ArticleCard {...article}>
                    <Button color="primary">Ler mais</Button>
                </ArticleCard>
            {/each}
        </div>
    </div>
</section>
