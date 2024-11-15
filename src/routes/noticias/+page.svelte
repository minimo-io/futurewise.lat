<script lang="ts">
    import { confetti } from "@neoconfetti/svelte";
    import { tick } from "svelte";

    let isVisible = false;
</script>

<h1>Noticias</h1>

<button
    on:click={async () => {
        isVisible = false;
        await tick();
        isVisible = true;
    }}
>
    Show confetti
</button>

{#if isVisible}
    <div>
        <div use:confetti></div>
    </div>
{/if}

<ul>
    <li>
        <a href="/noticias/seja-um-ninja-das-redes-neuronais"
            >Seja um ninja das redes neuronais</a
        >
    </li>
</ul>

<style>
    div {
        display: flex;
        justify-content: center;
    }
</style>
