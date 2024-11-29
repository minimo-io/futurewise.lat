import { dev } from "$app/environment";

import matter from "gray-matter";
import { marked } from "marked";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params;

    let projectPath = "https://www.futurewise.lat";
    if (dev) {
        projectPath = "http://localhost:3001";
    }
    console.log(`Project path baby: ${projectPath}`);

    // Fetch the markdown file as an HTTP resource
    if (slug == "favicon.ico") return;

    console.log(`${projectPath}/posts/${slug}.md`);
    const response = await fetch(`${projectPath}/posts/${slug}.md`);
    if (!response.ok) {
        throw new Error(
            `Failed to fetch post ${slug}.md: ${response.statusText}`,
        );
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
