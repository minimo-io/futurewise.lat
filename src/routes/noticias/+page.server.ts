import { redirect } from "@sveltejs/kit";
export const prerender = true;

export const load = ({}) => {
    redirect(307, "/#noticias");
};
