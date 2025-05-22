import { HomePage } from "@/components/pages/home";
import { HydrateClient, prefetch, trpc } from "@/tprc/server";

export default function Page() {
  prefetch(
    trpc.example.hello.queryOptions(),
  );

  return (
    <HydrateClient>
      <HomePage />
    </HydrateClient>
  );
}

export const dynamic = 'force-dynamic';