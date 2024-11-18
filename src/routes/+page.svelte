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

<section class="relative py-20 Xbg-white">
    <Newsletter />
    <div id="particles-js" class="relative -z-[10]"></div>
</section>
<div class="border-t">
    <LatestArticles />
</div>
