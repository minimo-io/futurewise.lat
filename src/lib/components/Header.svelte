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
    import { ChevronDownOutline } from "flowbite-svelte-icons";
    import { page } from "$app/stores";
    $: activeUrl = $page.url.pathname;

    import logo from "$lib/images/logo.svg";
</script>

<header class="relative mb-10 border-b w-full">
    <Navbar
        class="mx-auto sm:px-0 px-5 Xfixed max-w-screen-lg Xtop-0 Xstart-0 z-20"
    >
        <NavBrand href="/">
            <img src={logo} class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span
                class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
                >NeuralNinja</span
            >
        </NavBrand>
        <div class="flex md:order-2">
            <Button size="sm">Junte-se grátis</Button>
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
            <Dropdown class="w-44 z-20">
                <DropdownItem href="#">Produtividade</DropdownItem>
                <DropdownItem href="#">Marketing</DropdownItem>
                <DropdownItem href="#">Negócios</DropdownItem>
                <DropdownItem href="#">Design</DropdownItem>
                <DropdownItem href="#">Programação</DropdownItem>
                <DropdownItem href="#">Carreira</DropdownItem>
                <DropdownItem href="#">Finanças</DropdownItem>
                <DropdownItem href="#">Gerenciamento de projetos</DropdownItem>
                <DropdownItem href="#">Edição de vídeo</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="#">Ver todas</DropdownItem>
            </Dropdown>
            <NavLi href="/noticias">Notícias</NavLi>
            <NavLi href="#">Treinamentos</NavLi>
            <NavLi
                href="https://www.instagram.com/neuralninja.brasil"
                target="_blank"
                rel="nofollow noopener">Sobre nós</NavLi
            >
        </NavUl>
    </Navbar>
</header>

<style>
</style>
