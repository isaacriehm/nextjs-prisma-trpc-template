# Next.js + Prisma + tRPC Template

A modern full-stack template for building scalable, type-safe web applications using [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), and [tRPC](https://trpc.io/).

## Features

- ⚡️ **Next.js** – React framework for server-side rendering, routing, and static site generation.
- 🛡 **tRPC** – End-to-end typesafe APIs without schema or code generation.
- 🗄 **Prisma** – Modern ORM for type-safe database access.
- 🏗 **TypeScript** – Static typing throughout the stack.
- 🧩 **Modular Structure** – Clean separation of concerns for scalability.
- 🚀 **Ready to Deploy** – Easily deployable to Vercel or any Node.js environment.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/isaacriehm/nextjs-prisma-trpc-template.git
cd nextjs-prisma-trpc-template
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Set up the database

Update your database connection string in `.env.example` and rename to be `.env`:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### 4. Start the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
src/
  app/                # Next.js app directory
    api/trpc/         # tRPC API handlers
  components/         # React components
  tprc/routers/       # tRPC routers
prisma/               # Prisma schema and migrations
generated/            # Generated Prisma client
```

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `prisma migrate dev` – Run database migrations
- `prisma studio` – Open Prisma Studio (GUI for your DB)

## License

MIT
