import fs from "fs";
import matter from "gray-matter";
// import { marked } from "marked";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    const fileNames = await fs.promises.readdir("src/posts/");
    let posts: any[] = [];

    for (let fileName of fileNames) {
        const doc = await fs.promises.readFile(`src/posts/${fileName}`, "utf8");
        let { data, content } = matter(doc);

        if (!data.tags) {
            data.tags = [];
        }

        data.tags = data.tags.map((t: string) => t.toLowerCase());

        posts.push({
            url: "/noticias/" + fileName.replace(/.md/gi, ""),
            ...data,
        });
    }
    // posts = posts.reverse();
    posts.sort((a: any, b: any) => {
        let dateA = new Date(a.created).getTime();
        let dateB = new Date(b.created).getTime();

        return dateB - dateA;
    });
    return { posts };
}
