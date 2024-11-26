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
        AnnotationOutline,
        ToolsOutline,
        NewspaperOutline,
        PenOutline,
        ArrowRightAltOutline,
    } from "flowbite-svelte-icons";
    import { page } from "$app/stores";

    // $: activeUrl = $page.url.pathname;
    let activeUrl = $derived($page.url.pathname);

    import logo from "$lib/images/futurewise.svg";
</script>

<header class="relative border-b border-b-black w-full z-10">
    <Navbar class="mx-auto sm:px-0 px-5 max-w-[1200px] z-20">
        <NavBrand href="/">
            <img
                src={logo}
                class="me-3 h-6 sm:h-7"
                alt="Futurewise"
                title="Futurewise"
            />
        </NavBrand>
        <div class="flex md:order-2">
            <!-- <Button
                href="/"
                size="sm"
                pill
                class="ml-2 px-3 md:px-4 h-[30px] md:h-auto fw-btn-hover border-0 hidden md:inline"
                color="light">Preços</Button
            > -->
            <Button
                href="/"
                size="sm"
                pill
                color="light"
                class="fw-btn-hover md:inline-flex hidden ml-2 px-3 md:px-4 h-[30px] md:h-auto self-center"
            >
                Acesso
            </Button>
            <Button
                href="/"
                size="sm"
                pill
                class="fw-btn-hover md:inline-flex hidden px-3 md:px-4 h-[30px] md:h-auto self-center bg-primary-900 ml-2"
                ><ArrowRightAltOutline class="h-5 w-5 pr-1" />Cadastro</Button
            >
            <Button
                href="/"
                size="sm"
                pill
                class="fw-btn-hover inline-flex md:hidden px-3 md:px-4 h-[30px] md:h-auto self-center bg-primary-900 ml-2"
                ><ArrowRightAltOutline class="h-5 w-5 pr-1" />Entrar</Button
            >
            <NavHamburger />
        </div>
        <!-- <NavHamburger /> -->
        <NavUl {activeUrl}>
            <!-- <NavLi href="/">Início</NavLi> -->
            <NavLi href="/" class="font-normal">
                <ToolsOutline
                    class="ms-2 text-primary dark:text-white inline"
                />
                Ferramentas
            </NavLi>
            <NavLi href="/" class="font-normal">
                <PenOutline class="ms-2 text-primary dark:text-white inline" />
                Treinamentos
            </NavLi>
            <NavLi href="/" class="font-normal">
                <NewspaperOutline
                    class="ms-2 text-primary dark:text-white inline"
                />
                Notícias
            </NavLi>
            <NavLi href="/" class="font-normal">
                <AnnotationOutline
                    class="ms-2 text-primary dark:text-white inline"
                />
                Comunidade
            </NavLi>
            <!--
            <NavLi class="cursor-pointer font-normal">
                Ferramentas<ChevronDownOutline
                    class="w-6 h-6 ms-2 text-primary-600 dark:text-white inline"
                />
            </NavLi>

            <Dropdown class="w-44 z-30">
                <DropdownItem class="z-30 font-normal" href="#"
                    ><strong>✨ Gratuitas</strong></DropdownItem
                >
                <DropdownDivider />
                <DropdownItem class="z-30 font-normal" href="#"
                    >Produtividade</DropdownItem
                >
                <DropdownItem class="z-30 font-normal" href="#"
                    >Finanças</DropdownItem
                >
                <DropdownItem class="z-30 font-normal" href="#"
                    >Programação</DropdownItem
                >
                <DropdownItem class="z-30 font-normal" href="#"
                    >Negócios</DropdownItem
                >
                <DropdownItem class="z-30 font-normal" href="#"
                    >Design</DropdownItem
                >
                -->
            <!--
                <DropdownItem href="#">Marketing</DropdownItem>
                <DropdownItem href="#">Gerenciamento de projetos</DropdownItem>
                <DropdownItem href="#">Carreira</DropdownItem>
                <DropdownItem href="#">Edição de vídeo</DropdownItem>
                -->
            <!--
                <DropdownDivider />
                <DropdownItem class="z-100 font-normal" href="/ferramentas"
                    >Ver todas</DropdownItem
                >
            </Dropdown>
             -->
        </NavUl>
    </Navbar>
</header>

<style>
</style>
