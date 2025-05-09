<script lang="ts">
    // import { NavBrand, P, Button } from "flowbite-svelte";
    import { onMount } from "svelte";

    // import logo from "$lib/images/futurewise.svg";
    // import { LinkedinSolid, RocketSolid } from "flowbite-svelte-icons";

    // let buttonSize: "xs" | "sm" | "md" | "lg" | "xl" | undefined = "sm";

    onMount(() => {
        // @ts-ignore
        // loadParticles();
    });
</script>

<div class="z-20 justify-center flex flex-col items-center h-lvh">
    <div>
        <img src="/futurewise-double-logo.svg" alt="futurewise-logo" class="w-[250px] md:w-[300px] border" />

        <span
            class="text-left w-full px-1 text-[13px] font-sans tracking-widest mt-[5px] text-[#F93F17] font-bold block"
        >
            Em breve &#8226; <a href="mailto:nicolas@futurewise.lat" class="text-black hover:underline">Contato</a>
        </span>
    </div>
</div>
