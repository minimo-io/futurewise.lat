<script lang="ts">
    import "../app.css";
    let { children } = $props();
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Futurewise \ Lab</title>
    <meta
        name="description"
        content="Innovation & Development Lab in the intersection between with e-Commerce, Payments/Crypto, AI & Machines."
    />
</svelte:head>

<main>
    {@render children()}
</main>
