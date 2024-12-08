// /src/routes/sitemap.xml/+server.ts
import * as sitemap from "super-sitemap";
import type { RequestHandler } from "@sveltejs/kit";
import config from "$lib/config";

export const GET: RequestHandler = async () => {

    // let blogSlugs: string[] = config.postNames;
    let blogSlugs: string[] = [];
    for (let post of config.postNames) {
        blogSlugs.push( post.replace(".md", "") );
    }

    return await sitemap.response({
        origin: "https://www.futurewise.lat",
        paramValues: {
            // paramValues can be a 1D array of strings
            "/noticias/[slug]": blogSlugs, // e.g. ['hello-world', 'another-post']
        },
    });
};
