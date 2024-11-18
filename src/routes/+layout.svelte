<script lang="ts">
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="px-0 mx-auto">
    <Header />

    <main>
        {@render children()}
    </main>

    <Footer />
</div>
