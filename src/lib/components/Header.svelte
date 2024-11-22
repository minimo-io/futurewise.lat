<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
        DropdownDivider,
        Button,
    } from "flowbite-svelte";
    import {
        ChevronDownOutline,
        ArrowRightOutline,
    } from "flowbite-svelte-icons";
    import { page } from "$app/stores";

    // $: activeUrl = $page.url.pathname;
    let activeUrl = $derived($page.url.pathname);

    import logo from "$lib/images/logo-nn.svg";
</script>

<header class="relative border-b w-full bg-white z-10">
    <Navbar class="mx-auto sm:px-0 px-5 max-w-screen-lg z-20">
        <NavBrand href="/">
            <img src={logo} class="me-3 h-6 sm:h-7" alt="Neural ninja logo" />
            <span
                class="self-center whitespace-nowrap text-black text-base md:text-xl font-semibold dark:text-white"
            >
                NeuralNinja
            </span>
        </NavBrand>
        <div class="flex md:order-2">
            <Button
                href="#"
                size="sm"
                class="px-3 md:px-4 h-[30px] md:h-auto self-center"
            >
                Acesse<ArrowRightOutline
                    class="w-5 h-5 ms-1 hidden md:inline"
                />
            </Button>
            <NavHamburger />
        </div>
        <!-- <NavHamburger /> -->
        <NavUl {activeUrl}>
            <!-- <NavLi href="/">Início</NavLi> -->
            <NavLi class="cursor-pointer">
                Ferramentas<ChevronDownOutline
                    class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline"
                />
            </NavLi>
            <Dropdown class="w-44 z-30">
                <DropdownItem class="z-30" href="#"
                    ><strong>✨ Gratuitas</strong></DropdownItem
                >
                <DropdownDivider />
                <DropdownItem class="z-30" href="#">Produtividade</DropdownItem>
                <DropdownItem class="z-30" href="#">Finanças</DropdownItem>
                <DropdownItem class="z-30" href="#">Programação</DropdownItem>
                <DropdownItem class="z-30" href="#">Negócios</DropdownItem>
                <DropdownItem class="z-30" href="#">Design</DropdownItem>
                <!--
                <DropdownItem href="#">Marketing</DropdownItem>
                <DropdownItem href="#">Gerenciamento de projetos</DropdownItem>
                <DropdownItem href="#">Carreira</DropdownItem>
                <DropdownItem href="#">Edição de vídeo</DropdownItem>
                -->
                <DropdownDivider />
                <DropdownItem class="z-30" href="#">Ver todas</DropdownItem>
            </Dropdown>
            <NavLi href="#">Treinamentos</NavLi>
            <NavLi href="/#noticias">Notícias</NavLi>
            <NavLi href="#">Top LLMs</NavLi>
        </NavUl>
    </Navbar>
</header>

<style>
</style>
