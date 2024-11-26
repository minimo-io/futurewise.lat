<script>
    import { Heading, Input, Button, Img } from "flowbite-svelte";
    import { EnvelopeOutline } from "flowbite-svelte-icons";
</script>

<div class="border p-5 rounded-xl -top-5 relative">
    <div class="px-2 font-bold">
        <EnvelopeOutline class="inline" />
        <span class="partial-border partial-border-sm"
            >Assine nosso newsletter</span
        >
    </div>
    <form class="px-2 mt-5 flex" action="" method="post">
        <div>
            <Input
                type="email"
                placeholder="Digite seu email"
                size="lg"
                class="inline max-w-md border-2 bg-white border-primary-700 z-20"
                autofocus
            />
        </div>
        <div>
            <Button
                onclick={async () => {
                    // isVisible = false;
                    // await tick();
                    // isVisible = true;
                    document.location =
                        "https://futurewise.beehiiv.com/subscribe";
                }}
                size="lg"
                color="primary"
                class="z-20 ml-2 nowrap bg-primary-900 inline">Entrar</Button
            >
        </div>
    </form>
</div>
