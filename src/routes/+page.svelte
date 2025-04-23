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

<div class="z-20 justify-center flex flex-col items-center">
    <NavBrand href="/">
        <img src={logo} class="h-[35px] md:h-[40px]" alt="Futurewise" title="Futurewise" />
    </NavBrand>
    <P class="mt-4 md:mt-5 mx-[0px] max-w-md md:max-w-md text-center text-sm md:text-base text-black antialiased leading-normal">
        <strong>Innovation & Development Lab</strong> experimenting with
        <span class="text-nowrap"><a href="/e-commerce/" class="partial-border partial-border-sm">e-Commerce</a></span>,
        <a href="/e-commerce/" class="partial-border partial-border-sm">Payments/Crypto</a>,
        <a href="/e-commerce/" class="partial-border partial-border-sm">AI</a>
        & <a href="/e-commerce/" class="partial-border partial-border-sm">Machines</a>.
    </P>
    <!-- <div class="text-xs mt-3 mb-1 text-gray-400">/</div> -->
    <div class="flex gap-2 z-50 mt-6">
        <Button type="button" size={buttonSize} color="primary" class="bg-primary-900" href="mailto:futurewise.lat@gmail.com">Get in touch</Button>
        <Button type="button" size={buttonSize} color="alternative">More</Button>
        <!-- <Button
                    type="button"
                    size={buttonSize}
                    color="alternative"
                    class="hover:opacity-70"
                    target="_blank"
                    rel="nofollow noopener"
                    href="https://www.linkedin.com/in/nicolas-erramuspe/"
                >
                    <LinkedinSolid class="h-4" />
                </Button> -->
    </div>
</div>
