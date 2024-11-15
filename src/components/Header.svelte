<script lang="ts">
    import { page } from "$app/stores";
    import logo from "$lib/images/neural-ninja-logo.png";
</script>

<header>
    <div class="corner">
        <a href="/">
            <img src={logo} alt="NeuralNinja" />
        </a>
    </div>

    <nav>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/noticias"
                    ? "page"
                    : undefined}
            >
                <a href="/noticias">Noticias</a>
            </li>
        </ul>
    </nav>
</header>

<style>
</style>
