'use client';
import { useTRPC } from "@/tprc/client";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
    const trpc = useTRPC();
    const { data } = useQuery(trpc.example.hello.queryOptions());

    return (
        <div>
            <h1>Home</h1>
            <p>{data}</p>
        </div>
    );
};