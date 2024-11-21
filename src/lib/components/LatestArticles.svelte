<script>
    import { Button } from "flowbite-svelte";
    import ArticleCard from "./ArticleCard.svelte";

    const articles = [
        {
            title: "The Future of GPT-4 and Its Impact on Industries",
            description: "Explore how GPT-4 is revolutionizing various sectors and what it means for the future of AI.",
            image: "https://placehold.co/600x400",
            date: "March 15, 2024",
        },
        {
            title: "Getting Started with Machine Learning in 2024",
            description: "A comprehensive guide for beginners looking to start their journey in machine learning.",
            image: "https://placehold.co/600x400",
            date: "March 14, 2024",
        },
        {
            title: "Top AI Tools for Developers",
            description: "Discover the most powerful AI tools that are reshaping the development landscape.",
            image: "https://placehold.co/600x400",
            date: "March 13, 2024",
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
