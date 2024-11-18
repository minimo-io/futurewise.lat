<script lang="ts">
    import Newsletter from "$components/Newsletter.svelte";
    import LatestArticles from "$components/LatestArticles.svelte";
    import {
        Button,
        Alert,
        Card,
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Toast,
    } from "flowbite-svelte";
</script>

<svelte:head>
    <title>NeuralNinja</title>
    <meta name="description" content="Seja um ninja das redes neuronais" />
</svelte:head>

<Newsletter />

<div class="border-t mt-20">
    <LatestArticles />
</div>
