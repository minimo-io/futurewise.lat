# Futurewise

- Redirect to a thank you page after subscription, asking to check the email.
- Configure welcome email: https://www.beehiiv.com/support/article/12314772394519-how-to-set-up-your-welcome-email
- Define structure for emails/posts (AI NEWS; ART; TOOLS, etc)
- Sometimes lists break: https://www.futurewise.lat/noticias/open-ai-lanca-modo-de-voz-avancado-no-navegador
- HARD: Articles background should be dynamic, based on the images color palette.
- Created by like aiweekly.
- Re-design article grid
- Keep working on pre-rendering articles, instead of fetching.
- Pagination
- Time ago, for articles
- Login y pricing de PRO (suscripcion anual R$29, una live de Networking e intercambio sobre AI cada semana + Ferramentas e contenido exclusivas)
- In TopBoxes.svelte, get the latest art from the latest issue (now it's hardcoded).
- Home image and article image, add a pill with extra info or caption.
- Dark mode

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
