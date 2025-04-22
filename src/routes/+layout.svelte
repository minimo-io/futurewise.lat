<script lang="ts">
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Futurewise \ Lab</title>
    <meta name="description" content="Innovation & Development Lab experimenting with e-Commerce, Payments/Crypto, AI & Machines." />
</svelte:head>

{@render children()}
