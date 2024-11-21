<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import { onMount } from "svelte";
    import LatestArticles from "$components/LatestArticles.svelte";

    onMount(() => {
        loadParticles();
        // alert("hello");
    });
</script>

<svelte:head>
    <title>NeuralNinja</title>
    <meta name="description" content="Seja um ninja das redes neuronais" />
</svelte:head>

<section class="relative py-10 md:py-20 bg-gray-100 px-5 md:px-auto">
    <Newsletter />
    <div id="particles-js" class="relative z-10"></div>
</section>
<div class="border-t px-5 md:px-auto">
    <LatestArticles />
</div>
