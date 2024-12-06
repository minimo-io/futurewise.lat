<script lang="ts">
    import NewsletterSmallBox from "$components/NewsletterSmallBox.svelte";
    import { Img } from "flowbite-svelte";

    let {
        metadata,
        sticky = "sticky",
        showSubscribe = false,
        scale = "small",
        darkComment = false,
        codeTop = "-top-5 md:-top-10",
        showCode = true,
        roundedImage = "full",
        promptText = "",
    } = $props();

    promptText = promptText || "";
    console.log(promptText);
</script>

<div class="top-20 my-7 {sticky}">
    <div class="my-2">
        <a href={metadata.image.src}>
            <Img
                class="my-8 {`${roundedImage == 'full' ? 'rounded-xl' : 'rounded-b-xl'}`} {`${scale == 'small' ? 'scale-[1.2] md:hover:scale-[1.83]' : 'scale-[2.3] md:hover:scale-[2.3]'}`}  md:hover:cursor-pointer rotate-2 md:hover:rotate-0 transition"
                alt={metadata.image.alt || "arte-do-artigo"}
                src={metadata.image.src}
            ></Img>
        </a>
        <!-- <span class="text-xs relative block my-3 pl-3 font-bold"></span> -->
        {#if showCode && metadata.image && typeof metadata.image.prompt == "string"}
            <div
                class="flex relative {codeTop} !p-5 !py-3 {darkComment
                    ? '!bg-black !text-white'
                    : '!bg-gray-50'} !rounded-none md:!rounded-xl"
            >
                <code class="text-xs self-center">{promptText || "Default text"}</code>
            </div>
        {/if}
    </div>
    {#if showSubscribe}
        <div class="hidden md:inline"><NewsletterSmallBox /></div>
    {/if}
</div>
