<script lang="ts">
    import { NavBrand, P, Button } from "flowbite-svelte";
    import { onMount } from "svelte";

    import logo from "$lib/images/futurewise.svg";
    import { LinkedinSolid } from "flowbite-svelte-icons";

    let buttonSize: "xs" | "sm" | "md" | "lg" | "xl" | undefined = "sm";

    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
</script>

<div class="fixed w-full flex-col flex h-full items-center justify-center">
    <!-- <Header /> -->
    <div class="flex flex-col items-center justify-center z-50 bg-white px-12 py-12 md:px-12 md:py-20 rounded-xl">
        <NavBrand href="/">
            <img src={logo} class="h-[40px]" alt="Futurewise" title="Futurewise" />
        </NavBrand>
        <P class="mt-5 mx-[0px] max-w-md md:max-w-md text-center text-base text-black antialiased">
            <strong>Innovation & Development Lab</strong> experimenting with <span class="text-nowrap">e-Commerce</span>, Payments/Crypto, AI & Machines.
        </P>
        <!-- <div class="text-xs mt-3 mb-1 text-gray-400">/</div> -->
        <div class="flex gap-2 z-50 mt-5">
            <Button type="button" size={buttonSize} color="primary" class="bg-primary-900 hover:opacity-70" href="mailto:futurewise.lat@gmail.com"
                >Get in touch</Button
            >
            <Button
                type="button"
                size={buttonSize}
                color="alternative"
                class="hover:opacity-70"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.linkedin.com/in/nicolas-erramuspe/"
            >
                <LinkedinSolid class="h-5" />
            </Button>
        </div>
    </div>

    <!-- <main>

        {@render children()}
    </main> -->

    <!-- <Footer /> -->
    <div id="particles-js" class="z-10"></div>
</div>
