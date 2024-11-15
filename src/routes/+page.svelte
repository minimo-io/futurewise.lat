<script lang="ts">
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
    <title>Início</title>
    <meta name="description" content="Seja um ninja das redes neuronais" />
</svelte:head>

<div>
    <Button color="primary" class="my-4">Primary</Button>
    <Alert color="primary" class="my-4">Primary</Alert>
    <Card href="/cards" color="primary" class="my-4">
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-800"
        >
            Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-700 leading-tight">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
        </p>
    </Card>
</div>

<section>
    <h1>NeuralNinja</h1>

    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>
</section>
