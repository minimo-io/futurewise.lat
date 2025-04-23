<script lang="ts">
    import { NavBrand, P, Button } from "flowbite-svelte";
    import { onMount } from "svelte";

    import logo from "$lib/images/futurewise.svg";
    import { LinkedinSolid, RocketSolid } from "flowbite-svelte-icons";

    let buttonSize: "xs" | "sm" | "md" | "lg" | "xl" | undefined = "sm";

    onMount(() => {
        // @ts-ignore
        loadParticles();
    });
</script>

<div
    class="z-0
md:bg-[linear-gradient(225deg,_#F79319_2%,_#00000000_2%)]
bg-[linear-gradient(225deg,_#F79319_5%,_#00000000_5%)]
h-full w-full absolute top-0 left-0"
></div>
<div class="z-20 justify-center flex flex-col items-center py-16 px-16">
    <!-- <div
        class="absolute top-0 right-0 w-10 h-10 bg-white shadow-inner transform rotate-45 rotate origin-top-right border"
    ></div> -->
    <a
        href="/"
        class="font-jersey tracking-wider text-3xl md:text-4xl flex flex-row text-white partial-border !no-underline uppercase"
        style="font-family: 'Tiny5', system-ui;"
    >
        <!-- <RocketSolid class="text-yellow-500" /> -->
        Futurewise
    </a>
    <P
        class="mt-3 md:mt-5 mx-[0px] max-w-md md:max-w-md text-center text-sm md:text-base antialiased leading-normal text-gray-100 z-50"
    >
        <strong>Innovation & Development Lab</strong>
        <!-- experimenting with -->
        in the intersection of
        <span class="text-nowrap">
            <a href="/e-commerce/">e-Commerce</a>
            -
        </span>
        <a href="/e-commerce/">Crypto Payments</a>
        -
        <a href="/e-commerce/">AI</a>
        &
        <a href="/e-commerce/">Machines</a>
    </P>
    <!-- <div class="text-xs mt-3 mb-1 text-gray-400">/</div> -->
    <div class="flex gap-2 z-50 mt-6">
        <Button
            type="button"
            size={buttonSize}
            color="none"
            class="text-xs rounded-none bg-transparent border text-white border-white hover:opacity-50"
            href="mailto:futurewise.lat@gmail.com"
        >
            Get&nbsp;in&nbsp;touch
        </Button>
        <Button
            type="button"
            size={buttonSize}
            color="alternative"
            class="text-xs rounded-none border-none"
            href="e-commerce"
        >
            Projects
        </Button>
        <!-- <Button type="button" size={buttonSize} color="alternative" class="text-xs rounded-none">Investors</Button> -->
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
