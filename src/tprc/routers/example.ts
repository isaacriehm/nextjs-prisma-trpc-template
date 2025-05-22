import { baseProcedure, createTRPCRouter } from "../init";

export const exampleRouter = createTRPCRouter({
    hello: baseProcedure.query(() => {
        return "Hello, world!";
    }),
});