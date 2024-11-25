import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

// export default {
//     content: ["./src/**/*.{html,js,svelte,ts}"],

//     theme: {
//         extend: {},
//     },

//     plugins: [forms, aspectRatio],
// } satisfies Config;

export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    // darkMode: "selector",
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // flowbite-svelte
                // primary: {
                //     50: "#FFF5F2",
                //     100: "#FFF1EE",
                //     200: "#FFE4DE",
                //     300: "#FFD5CC",
                //     400: "#FFBCAD",
                //     500: "#FE795D",
                //     600: "#EF562F",
                //     700: "#EB4F27",
                //     800: "#CC4522",
                //     900: "#A5371B",
                // },
                primary: {
                    50: "#fffaeb",
                    100: "#fdf2c8",
                    200: "#fce28b",
                    300: "#fac93f",
                    400: "#f9b826",
                    500: "#15141d",
                    600: "#15141d",
                    700: "#15141d",
                    800: "#15141d",
                    900: "#15141d",
                    950: "#000000",
                },
            },
        },
    },
    plugins: [forms, aspectRatio, flowbitePlugin],
} as Config;
