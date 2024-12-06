import config from "$lib/config";

import matter from "gray-matter";
import { marked } from "marked";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params;

    // Fetch the markdown file as an HTTP resource
    if (slug == "favicon.ico") return;

    const response = await fetch(`${config.baseUrl}/posts/${slug}.md`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post ${slug}.md: ${response.statusText}`);
    }

    const doc = await response.text();
    let { data, content } = matter(doc);

    if (data.tags) {
        data.tags = data.tags.map((t) => t.toLowerCase());
    }

    const html = marked(content);

    return {
        metadata: data,
        html,
    };
}
