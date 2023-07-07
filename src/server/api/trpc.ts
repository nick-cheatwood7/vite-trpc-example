import { initTRPC } from "@trpc/server";
import superjson from 'superjson'

const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }){
        return shape;
    }
});

/**
 * Reusable tRPC router
 */
export const router = t.router;

// middleware
export const middleware = t.middleware;
// Logger middleware
const logger = middleware(async ({ path, next }) => {
    const start = Date.now();
    const result = await next();
    const durationMs = Date.now() - start;
    if (result.ok) {
      console.log(`OK request timing:`, path, `${durationMs}ms`);
    } else {
      console.error('❌ Non-OK request timing:', path, `${durationMs}ms`);
    }
    return result;
  });

/**
 * Public (un-authed) procedure
 */
export const publicProcedure = t.procedure.use(logger);