<script>
    import { page } from "$app/stores";
</script>

<div
    class="flex flex-col max-w-[1200px] mx-auto text-center h-screen md:border border-black justify-center -top-20 relative px-8"
>
    <h1 class="text-4xl md:text-7xl">🫠 Error {$page.status}</h1>
    <div class="my-5 md:my-10 text-xl md:text-2xl font-sans">
        {$page.error?.message}
    </div>
</div>
