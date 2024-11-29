<script>
    // import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
    import { Button, Badge } from "flowbite-svelte";
</script>

<div
    class="max-w-full mx-auto md:px-6 md:border-t border-t-primary-900 -z-10 mt-36 md:mt-auto"
>
    <div class="max-w-screen-xl mx-auto">
        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
            <!-- Main Feature -->
            <div class="lg:col-span-2 space-y-4">
                <div
                    class="p-10 border-b border-b-primary-900 md:border-b-0 md:border-r md:border-r-primary-900"
                >
                    <!-- Navigation Arrows -->
                    <div class="flex items-center mb-4 space-x-4">
                        <Badge large color="yellow">CURSO EM DESTAQUE</Badge>
                        <!-- <button
                            class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200"
                        >
                            <ArrowLeftOutline />
                        </button>
                        <button
                            class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-200"
                        >
                            <ArrowRightOutline />
                        </button> -->
                    </div>
                    <h1
                        class="text-2xl font-sans font-semibold text-gray-800 my-2"
                    >
                        Aprenda a usar IA na prática: ferramentas e soluções
                        reais
                    </h1>
                    <p class="text-gray-700 test-sm md:text-base my-2">
                        Curso gratuito para quem quer aprender IA do zero e
                        gratuitamente. Descubra como a Inteligência Artificial
                        pode impulsionar sua carreira e transformar seu negócio.
                        <!-- Aqui você aprende a
                        selecionar, configurar e aplicar ferramentas que fazem a diferença no dia a dia, desde automação
                        até análise de dados.-->
                    </p>
                    <Button
                        class="my-2 bg-primary-400 text-primary-900 hover:text-white"
                        >EXPLORAR CURSO →</Button
                    >
                    <Button class="my-2" color="light">OUTROS CURSOS</Button>
                </div>
            </div>

            <!-- Synthesized Cloud -->
            <div
                class="lg:col-span-1 flex flex-col justify-center border-b border-b-primary-900 md:border-b-0
                md:border-r md:border-r-primary-900"
            >
                <div class="p-10 pt-0 md:pl-0 md:py-10 md:pr-10">
                    <div
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full"
                    >
                        🧰
                    </div>
                    <h2
                        class="text-lg font-semibold text-gray-800 font-sans my-2"
                    >
                        Curadoria de ferramentas
                    </h2>
                    <p class="text-gray-700 test-sm md:text-base my-2">
                        Descubra as melhores ferramentas de IA do mercado,
                        avaliadas para profissionais de diversas áreas.
                    </p>
                    <Button href="#" class="my-2 fw-btn-hover" color="light"
                        >VER FERRAMENTAS →</Button
                    >
                </div>
            </div>

            <!-- Synthesized Local -->
            <div class="lg:col-span-1 flex flex-col justify-start">
                <div class="p-10 pt-0 md:pl-0 md:py-10 md:pr-10 relative">
                    <!-- <LatestArt {metadata} scale="big" darkComment sticky="absolute !-top-7 left-7 top-center" /> -->
                    <div
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full"
                    >
                        🎖️
                    </div>
                    <h2
                        class="text-lg font-semibold text-gray-800 font-sans my-2"
                    >
                        Capacitação online para todos os níveis
                    </h2>
                    <p class="text-gray-700 test-sm md:text-base my-2">
                        Do básico ao avançado, para quem quer aprender IA do
                        zero e gratuitamente.
                    </p>

                    <Button href="#" class="my-2 fw-btn-hover" color="light"
                        >MATERIAL GRATUITO</Button
                    >
                </div>
            </div>
        </div>
    </div>
</div>
