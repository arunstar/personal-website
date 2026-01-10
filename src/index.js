/**
 * Cloudflare Worker with static assets
 * This enables environment variables and adds API functionality
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // API Routes
        if (url.pathname === '/api/health') {
            return Response.json({
                status: 'ok',
                timestamp: new Date().toISOString(),
                version: env.VERSION || '1.0.0'
            });
        }

        if (url.pathname === '/api/info') {
            return Response.json({
                name: env.SITE_NAME || 'Arun Portfolio',
                environment: env.ENVIRONMENT || 'production'
            });
        }

        // For all other requests, serve static assets
        // The assets binding is automatically handled by Cloudflare
        return env.ASSETS.fetch(request);
    }
};
