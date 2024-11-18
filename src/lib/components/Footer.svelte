<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterBrand,
        FooterLink,
    } from "flowbite-svelte";
    import logo from "$lib/images/logo.svg";
    const fullYear = new Date().getFullYear();
</script>

<Footer footerType="logo" class="max-w-screen-lg mx-auto shadow-none">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand
            href="https://neuralninja.com.br"
            src={logo}
            alt="Neural ninja logo"
            name="NeuralNinja"
        />
        <FooterLinkGroup
            ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
            <FooterLink href="/sobre-nos">Sobre nós</FooterLink>
            <FooterLink href="/">Ferramentas</FooterLink>
            <FooterLink href="/">Notícias</FooterLink>
            <FooterLink href="/">Treinamentos</FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright
        href="/"
        by="NeuralNinja"
        copyrightMessage="by Mínimo. Under CC BY-NC-SA 4.0."
        year={fullYear}
    />
</Footer>
