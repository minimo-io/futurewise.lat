import { dev } from "$app/environment";
const postNames: string[] = [
    "da-seguranca-a-robos-o-que-esta-transformando-a-inteligencia-artificial.md",
    "elon-musk-leva-openai-ao-tribunal-novamente.md",
    "OpenAI-considera-desafiar-o-Google-com-um-navegador.md",
    "issue-1.md",
    "open-ai-lanca-modo-de-voz-avancado-no-navegador.md",
    "seja-um-ninja-das-redes-neuronais.md",
    "tecnologia-politica-sao-francisco.md",
];

const config = {
    baseUrl: dev ? "http://localhost:3001" : "https://www.futurewise.lat",
    postNames: postNames,
};

export default config;
