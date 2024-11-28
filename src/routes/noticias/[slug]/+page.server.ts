import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { slug } = params;
    const postsDirectory = path.resolve("src/posts/");
    const doc = await fs.promises.readFile(
        `${postsDirectory}/${slug}.md`,
        "utf8",
    );
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
