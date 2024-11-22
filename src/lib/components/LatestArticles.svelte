<script>
    import { Button } from "flowbite-svelte";
    import ArticleCard from "./ArticleCard.svelte";

    let { posts } = $props();
</script>

<section class="max-w-screen-lg mx-auto">
    <div class="container mx-auto px-4 mt-10">
        <h2 id="noticias" class="text-2xl font-bold my-5">
            💌 Nossos últimos emails
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each posts as post}
                <ArticleCard {...post}>
                    <Button color="primary">Ler mais</Button>
                </ArticleCard>
            {/each}
        </div>
    </div>
</section>
