<script lang="ts">
    import { Button, Input } from "flowbite-svelte";
    import { confetti } from "@neoconfetti/svelte";
    import { onMount, tick } from "svelte";
    let email = $state();

    let isVisible = $state(false);
</script>

{#if isVisible}
    <div class="confetti">
        <div use:confetti></div>
    </div>
{/if}

<section class="">
    <div class="container max-w-[1200px] mx-auto px-4 md:px-0">
        <div class="max-w-3xl Xmx-auto text-center md:text-left">
            <h2 class="text-3xl md:text-5xl mb-4 font-sans">
                Impulsione a sua vida com <br class="hidden md:inline" />
                o
                <span class="partial-border text-black font-bold">poder da IA</span>
            </h2>
            <p class="text-gray-700 my-8 text-sm md:text-base">
                Aprenda cómo aproveitar a inteligência artificial para aumentar sua produtividade. Fique por dentro das
                ferramentas, notícias e treinamentos,
                <br />
                <strong>toda sexta-feira no se Inbox</strong>
                .
            </p>
            <div class="flex flex-col sm:flex-row gap-4 Xjustify-center">
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    bind:value={email}
                    size="lg"
                    class="flex-1 max-w-md border-2 bg-white border-primary-700 z-20"
                    autofocus
                />
                <Button
                    onclick={async () => {
                        // isVisible = false;
                        // await tick();
                        // isVisible = true;
                        document.location = "https://futurewise.beehiiv.com/subscribe";
                    }}
                    size="lg"
                    color="primary"
                    class="z-20 bg-primary-900"
                >
                    Inscreva-se grátis
                </Button>
            </div>
        </div>
    </div>
</section>

<style>
    div.confetti {
        display: flex;
        justify-content: center;
    }
</style>
