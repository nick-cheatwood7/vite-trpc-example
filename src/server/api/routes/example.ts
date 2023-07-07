import { z } from 'zod';
import { publicProcedure, router } from "../trpc";
import { sleep } from '@/lib/utils';

export const exampleRouter = router({
    greeting: publicProcedure.query(() => {
        return `🌎 Hello, World!`
    }),
    sayHello: publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ input }) => {
        // simulate some long-running process
        await sleep(3000)
        return {
            greeting: `Hello, ${input.name}`
        }
    })
})