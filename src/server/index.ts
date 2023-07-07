import express from 'express'
import ViteExpress from 'vite-express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './api/routes/_app';

const app = express();

// middleware
app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter
}))

const PORT = 5137;

const server = app.listen(PORT, () => {
    console.log(`✨ Server listening on http://localhost:${PORT}`)
})

// vite
await ViteExpress.bind(app, server)