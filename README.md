# Elysia with Bun, TailwindCSS, Postgres, DrizzleKit, and BetterAuth

## Getting Started
 
- you need to have NixOS installed, follow this tutorial https://zero-to-nix.com/start/install/
- you need to have docker installed, follow this https://www.docker.com/get-started/

To get started with this template, simply paste this command into your terminal:

```bash
nix-shell
```
install dependencies:
```bash
bun install
```

run postgres service:
```bash
docker-compose up -d
```

run migrations:
```bash
bun dizzle-kit migrate
```

you can find the migration file in `src/database/migrations` and for more guide go to https://orm.drizzle.team/docs/get-started-postgresql

## Development
To start the development server run:

```bash
cp .env.example .env
```

run postgres service:
```bash
docker-compose up -d
```

run the server:
```bash
bun run dev
```
and run the tailwindcss watcher:

```bash
bun run style
```

Open http://localhost:3000/ with your browser to see the result if you are using default environment value.