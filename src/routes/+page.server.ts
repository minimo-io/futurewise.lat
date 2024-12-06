import fs from "fs";
import { dev } from "$app/environment";
import matter from "gray-matter";
import { fail, json } from "@sveltejs/kit";
import { BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID } from "$env/static/private";
import config from "$lib/config";

export const prerender = false;

export const actions = {
    subscribe: async ({ cookies, request }) => {
        // await new Promise((fulfil) => setTimeout(fulfil, 1000));
        const data = await request.formData();
        let userEmail = data.get("email").trim();
        if (userEmail == "") {
            return fail(422, {
                description: data.get("description"),
                error: "O e-mail não pode estar vazio.",
            });
        }
        console.log(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`);
        try {
            const response = await fetch(
                `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        send_welcome_email: true,
                    }),
                },
            );

            if (!response.ok) {
                // console.log(json(response));
                // console.log(response.headers);
                return fail(500, {
                    description: data.get("description"),
                    error: "Ocorreu algum erro ao tentar assinar",
                });
            }

            // return json({ message: "Subscription successful!" });
            console.log(`Hey ${userEmail}!, you are now subscribed!`);
        } catch (error: any) {
            return fail(500, {
                description: data.get("description"),
                error: error.message,
            });
        }
    },
};

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    // const postsDirectory = "static/posts/";

    let posts: any[] = [];

    for (let fileName of config.postNames) {
        // const doc = await fs.promises.readFile(
        //     `${postsDirectory}/${fileName}`,
        //     "utf8",
        // );

        const response = await fetch(`${config.baseUrl}/posts/${fileName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch post ${fileName}.md: ${response.statusText}`);
        }
        const doc = await response.text();
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
