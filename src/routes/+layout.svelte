<script lang="ts">
    import "../app.css";

    let { children } = $props();

    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    // State to track route changes
    let currentPath = $state($page.url.pathname);
    let key = $state(0);

    // Update key when path changes to trigger animation
    $effect(() => {
        if ($page.url.pathname !== currentPath) {
            currentPath = $page.url.pathname;
            key++;
        }
    });
</script>

<svelte:head>
    <title>Futurewise \ Lab</title>
    <meta
        name="description"
        content="Innovation & Development Lab in the intersection between with e-Commerce, Payments/Crypto, AI & Machines."
    />
</svelte:head>
<div class="fixed w-full flex-col flex h-full items-center justify-center bg-black">
    <div
        class="fw-content flex flex-col relative items-center justify-center z-50 px-[20px] py-12 md:p-5 w-full m-[20px] border-white glass"
    >
        {#key key}
            <main in:fade={{ duration: 150, easing: cubicInOut, delay: 0 }}>
                {@render children()}
            </main>
        {/key}
    </div>

    <div id="particles-js" class="z-10"></div>
</div>
