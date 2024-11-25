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

    import logo from "$lib/images/futurewise.svg";
</script>

<header class="relative border-b border-b-black w-full z-10">
    <Navbar class="mx-auto sm:px-0 px-5 max-w-screen-lg z-20">
        <NavBrand href="/">
            <img
                src={logo}
                class="me-3 h-6 sm:h-7"
                alt="Futurewise"
                title="Futurewise"
            />
            <!-- <span
                class="self-center whitespace-nowrap text-black text-base md:text-xl font-semibold dark:text-white"
            >
                FutureWise
            </span> -->
        </NavBrand>
        <div class="flex md:order-2">
            <Button
                href="/"
                size="sm"
                class="px-3 md:px-4 h-[30px] md:h-auto self-center hover:outline hover:outline-primary-300"
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
            <NavLi class="cursor-pointer font-light">
                Ferramentas<ChevronDownOutline
                    class="w-6 h-6 ms-2 text-primary-600 dark:text-white inline"
                />
            </NavLi>
            <Dropdown class="w-44 z-30">
                <DropdownItem class="z-30 font-light" href="#"
                    ><strong>✨ Gratuitas</strong></DropdownItem
                >
                <DropdownDivider />
                <DropdownItem class="z-30 font-light" href="#"
                    >Produtividade</DropdownItem
                >
                <DropdownItem class="z-30 font-light" href="#"
                    >Finanças</DropdownItem
                >
                <DropdownItem class="z-30 font-light" href="#"
                    >Programação</DropdownItem
                >
                <DropdownItem class="z-30 font-light" href="#"
                    >Negócios</DropdownItem
                >
                <DropdownItem class="z-30 font-light" href="#"
                    >Design</DropdownItem
                >
                <!--
                <DropdownItem href="#">Marketing</DropdownItem>
                <DropdownItem href="#">Gerenciamento de projetos</DropdownItem>
                <DropdownItem href="#">Carreira</DropdownItem>
                <DropdownItem href="#">Edição de vídeo</DropdownItem>
                -->
                <DropdownDivider />
                <DropdownItem class="z-30 font-light" href="#"
                    >Ver todas</DropdownItem
                >
            </Dropdown>
            <NavLi href="#" class="font-light">Treinamentos</NavLi>
            <NavLi href="/#noticias" class="font-light">Notícias</NavLi>
            <NavLi href="#" class="font-light">Top LLMs</NavLi>
        </NavUl>
    </Navbar>
</header>

<style>
</style>
