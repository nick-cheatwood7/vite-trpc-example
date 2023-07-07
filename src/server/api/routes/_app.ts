import { router } from "../trpc";
import { exampleRouter } from "./example";

export const appRouter = router({
    // sub-routers
    example: exampleRouter
})

// appRouter type def
export type AppRouter = typeof appRouter;