import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
    console.log(locals);
    redirect(307, "/noticias/seja-um-ninja-das-redes-neuronais");
};
