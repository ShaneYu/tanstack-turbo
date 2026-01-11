# Tanstack Turbo

A minimal monorepo starter template for 🏝️ TanStack Start using Turborepo.

- [Turborepo](https://turborepo.com/) + [pnpm](https://pnpm.io/)
- [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler)
- TanStack [Start](https://tanstack.com/start/latest) + [Router](https://tanstack.com/router/latest) + [Query](https://tanstack.com/query/latest) + [Form](https://tanstack.com/form/latest)
- [Vite 8](https://vite.dev/blog/announcing-vite8-beta) (beta) + [Nitro v3](https://v3.nitro.build/) (nightly)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL
- [Better Auth](https://www.better-auth.com/)
- [TS Env](https://env.t3.gg/)

## Getting started

1. [Use this template](https://github.com/new?template_name=tanstack-turbo&template_owner=shaneyu) or clone this repository with gitpick:

  ```bash
  npx gitpick shaneyu/tanstack-turbo myapp
  cd myapp
  ```

2. Install dependencies:

  ```bash
  pnpm install
  ```

3. Create `.env` files.

    - Create a `./app/web/.env` based on [.env.example](https://github.com/shaneyu/tanstack-turbo/blob/main/apps/web/.env.example).

    - Create a `./packages/db/.env` based on [.env.example](https://github.com/shaneyu/tanstack-turbo/blob/main/packages/db/.env.example).

    _Per-app `.env` files make it clearer which vars belong to which task/app and works best with turborepo with it's caching._

4. Push the schema to your database with prisma:

  ```bash
  pnpm db push
  ```

  https://www.prisma.io/docs/guides/data-migration

5. Run the development server:

  ```bash
  pnpm dev
  ```

  The development server should now be running at http://localhost:3000.

## Deploying to production

The [vite config](https://github.com/shaneyu/tanstack-turbo/blob/main/apps/web/vite.config.ts#L12-L13) is currently configured to use [Nitro v3](https://v3.nitro.build/) (nightly) to deploy on Vercel, but can be easily switched to other providers.

Refer to the [TanStack Start hosting docs](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) for deploying to other platforms.

## Issue watchlist

- [Router/Start issues](https://github.com/TanStack/router/issues) - TanStack Start is in RC.
- [Devtools releases](https://github.com/TanStack/devtools/releases) - TanStack Devtools is in alpha and may still have breaking changes.
- [Vite 8 beta](https://vite.dev/blog/announcing-vite8-beta) - We're using Vite 8 beta which is powered by Rolldown.
- [Nitro v3 nightly](https://v3.nitro.build/docs/nightly) - The template is configured with Nitro v3 nightly by default.

## Goodies

### Scripts

We use pnpm by default, but you can modify these scripts in [package.json](https://github.com/shaneyu/tanstack-turbo/blob/main/package.json) to use your preferred package manager.

- `auth:generate` - Regenerate the [auth db schema](https://github.com/shaneyu/tanstack-turbo/blob/main/packages/db/src/schema/auth.prisma) if you've made changes to your [Better Auth config](https://github.com/shaneyu/tanstack-turbo/blob/main/packages/auth/src/auth.ts).
- `db` - Run [prisma](https://www.prisma.io/docs/orm/tools/prisma-cli#synopsis) commands. (e.g. `pnpm db generate`, `pnpm db studio`)
- `ui` - The shadcn/ui CLI. (e.g. `pnpm ui add button`)
- `format`, `lint`, `check-types` - Run Biome and check TypeScript types respectively.
  - `check` - Run all three above. (e.g. `pnpm check`)
- `deps` - Selectively upgrade dependencies via taze.

### Utilities

- [auth/middleware.ts](https://github.com/shaneyu/tanstack-turbo/blob/main/packages/auth/src/tanstack/middleware.ts) - Sample middleware for forcing authentication on server functions. (see [#5](https://github.com/shaneyu/tanstack-turbo/issues/5#issuecomment-2615905686) and [#17](https://github.com/shaneyu/tanstack-turbo/issues/17#issuecomment-2853482062))
- [theme-toggle.tsx](https://github.com/shaneyu/tanstack-turbo/blob/main/apps/web/src/components/theme-toggle.tsx), [theme-provider.tsx](https://github.com/shaneyu/tanstack-turbo/blob/main/packages/ui/lib/theme-provider.tsx) - A theme toggle and provider for toggling between light and dark mode. ([#7](https://github.com/shaneyu/tanstack-turbo/issues/7#issuecomment-3141530412))

## License

Code in this template is public domain via [Unlicense](https://github.com/shaneyu/tanstack-turbo/blob/main/LICENSE). Feel free to remove or replace for your own project.

## Also check out

- [@tanstack/create-start](https://github.com/TanStack/create-tsrouter-app/blob/main/cli/ts-create-start/README.md) - The official CLI tool from the TanStack team to create Start projects.
- [awesome-tanstack-start](https://github.com/Balastrong/awesome-tanstack-start) - A curated list of awesome resources for TanStack Start.
- [dotnize/react-tanstarter](https://github.com/dotnize/react-tanstarter) - Another amazing template that this monorepo template was inspired and based on.
