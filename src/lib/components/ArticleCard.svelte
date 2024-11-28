<script>
    import { Card, Badge } from "flowbite-svelte";
    export let title;
    export let description;
    export let image;
    export let date;
    export let url;
    export let editorial;
    // export let index;
</script>

<!-- {#if index != 0} -->
<Card
    href={url}
    img={image}
    class="my-4 hover:opacity-80 relative shadow-none bg-gray-50"
>
    <h5
        class="mb-2 text-base font-light tracking-tight text-gray-900 dark:text-red-800"
    >
        {title}
    </h5>
    <p class="text-sm text-black mb-3">{date}</p>
    <p class="text-lg font-semibold text-gray-800 font-sans">
        {description}
    </p>
    {#if editorial}
        <Badge color="dark" class="absolute top-5 right-5">Editorial</Badge>
    {/if}
</Card>
<!-- {:else} -->

<!-- {/if} -->
