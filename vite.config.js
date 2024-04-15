import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.js"],
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
    }
}

});