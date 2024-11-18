<script>
    import { Button, Input } from "flowbite-svelte";
    let email = "";
</script>

<section>
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-5xl font-bold mb-4 font-sans">
                Impulsione a sua vida com <br /> o
                <span class="partial-border text-primary-700">poder da IA</span>
            </h2>
            <p class="text-gray-600 my-8">
                Aprenda como aproveitar a inteligência artificial para aumentar
                sua produtividade. Fique por dentro das ferramentas, notícias e
                treinamentos,<br />
                <strong>toda terça-feira no se Inbox</strong>.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    bind:value={email}
                    size="lg"
                    class="flex-1 max-w-md border-2 border-primary-700"
                />
                <Button size="lg" color="primary">Inscreva-se grátis</Button>
            </div>
        </div>
    </div>
</section>
