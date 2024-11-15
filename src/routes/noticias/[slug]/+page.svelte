<script>
    export let data;
    const { metadata, html } = data;
    // console.log(data.metadata);
</script>

<article>
    <h1>{metadata.title}</h1>
    <p>
        <i>Created:</i>
        <time>{new Date(metadata.created).toLocaleDateString()}</time>
    </p>

    <img alt="post-image" src={metadata.image} class="w-2/5" />

    {@html html}
</article>

<ol>
    {#each metadata.tags as tag}
        <li><a href="/?tag={tag}"> #{tag} </a></li>
    {/each}
</ol>
