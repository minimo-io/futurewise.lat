import fs from "fs";
// import "prism-svelte";
import matter from "gray-matter";
import { marked } from "marked";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params;
    const doc = await fs.promises.readFile(`src/lib/posts/${slug}.md`, "utf8");
    let { data, content } = matter(doc);
    if (data.tags) {
        data.tags = data.tags.map((t: string) => t.toLowerCase());
    }

    content = await marked(content);

    return {
        metadata: data,
        html: content,
    };
}
