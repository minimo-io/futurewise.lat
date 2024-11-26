<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterBrand,
        FooterLink,
    } from "flowbite-svelte";
    import logo from "$lib/images/futurewise.svg";
    const fullYear = new Date().getFullYear();
</script>

<Footer footerType="logo" class="max-w-[1200px] mx-auto shadow-none p-10">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="/" src={logo} alt="Futurewise logo" />
        <FooterLinkGroup
            ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 font-light sm:mb-0 dark:text-gray-400"
        >
            <FooterLink href="/">Notícias</FooterLink>
            <FooterLink href="/">Ferramentas</FooterLink>
            <FooterLink href="/">Treinamentos</FooterLink>
            <FooterLink href="/sobre-nos">Sobre nós</FooterLink>
            <FooterLink href="/top-llms">Top LLMs</FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright
        href="/"
        by="FutureWise"
        copyrightMessage="by Mínimo. Under CC BY-NC-SA 4.0."
        year={fullYear}
    />
</Footer>
