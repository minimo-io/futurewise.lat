<script>
    import { Card } from "flowbite-svelte";
    export let title;
    export let description;
    export let image;
    export let date;
</script>

<!-- <Card img={image} class="h-full">
    <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
        {title}
    </h5>
    <p class="text-sm text-gray-500 mb-3">{date}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        {description}
    </p>
    <slot />
</Card> -->

<Card href="#" img={image} color="primary" class="my-4">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-800">
        {title}
    </h5>
    <p class="text-sm text-gray-500 mb-3">{date}</p>
    <p class="font-normal text-gray-700 dark:text-gray-700 leading-tight">
        {description}
    </p>
</Card>
