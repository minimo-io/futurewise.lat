<script lang="ts">
    import { onMount, tick } from "svelte";
    import { enhance } from "$app/forms";
    import { Button, Input } from "flowbite-svelte";
    import { confetti } from "@neoconfetti/svelte";

    let isSubscribed = $state(false);
    let subscribing = $state(false);

    let { form } = $props();
</script>

{#if isSubscribed}
    <div class="confetti">
        <div use:confetti></div>
    </div>
{/if}

<section>
    <div class="container max-w-[1200px] mx-auto px-4 md:px-0">
        <div class="max-w-3xl text-center md:text-left">
            <h2 class="text-3xl md:text-5xl mb-4 font-sans text-white">
                Impulsione a sua vida com <br class="hidden md:inline" />
                o
                <span class="partial-border text-white font-bold"
                    >poder da IA</span
                >
            </h2>
            <p class="text-gray-300 my-8 text-sm md:text-base">
                Aprenda cómo aproveitar a inteligência artificial para aumentar
                sua produtividade. Fique por dentro das ferramentas, notícias e
                treinamentos,
                <br />
                <strong>toda sexta-feira no se Inbox</strong>
                .
            </p>
            <div class="z-50 relative">
                <form
                    method="POST"
                    action="?/subscribe"
                    use:enhance
                    use:enhance={() => {
                        subscribing = true;

                        return async ({ update }) => {
                            await update();
                            isSubscribed = true;
                            subscribing = false;

                            setTimeout(() => {
                                isSubscribed = false;
                            }, 2500);
                        };
                    }}
                    class="flex flex-col sm:flex-row gap-4"
                >
                    <Input
                        type="email"
                        name="email"
                        placeholder="Digite seu email"
                        size="lg"
                        class="flex-1 max-w-md border-2 bg-white border-primary-700 z-20"
                        required
                        autofocus
                    />
                    {#if form?.error}
                        <div
                            class="block md:hidden text-red-600 text-base text-center md:text-left"
                        >
                            {form.error}
                        </div>
                    {/if}
                    <Button
                        type="submit"
                        size="lg"
                        color="primary"
                        class="bg-primary-950"
                        disabled={subscribing}
                    >
                        {#if subscribing}
                            Só um momento...
                        {:else}
                            Inscreva-se grátis
                        {/if}
                    </Button>
                    <!-- <Button
                        onclick={async () => {
                            // isVisible = false;
                            // await tick();
                            // isVisible = true;
                            // document.location =
                            //     "https://futurewise.beehiiv.com/subscribe";
                        }}
                        size="lg"
                        color="primary"
                        class="bg-primary-900"
                    >
                        Inscreva-se grátis
                    </Button>                     -->
                </form>
                {#if form?.error}
                    <div
                        class="hidden md:flex text-red-600 text-base text-center md:text-left mt-2"
                    >
                        {form.error}
                    </div>
                {/if}
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
