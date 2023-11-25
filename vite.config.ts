import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import license from 'rollup-plugin-license'

const licensePath = path.resolve('src', 'assets', 'LICENSE.txt')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        license({
            sourcemap: true,
            cwd: process.cwd(), // The default

            banner: {
                commentStyle: 'ignored',
                content: `Bundle of <%= pkg.name %>
                Generated: <%= moment().format('YYYY-MM-DD') %>
                Version: <%= pkg.version %>
                Dependencies:
                <% _.forEach(dependencies, function (dependency) { %>
                <%= dependency.name %> -- <%= dependency.version %>
                <% }) %>`,
            },

            thirdParty: {
                output: {
                    file: licensePath,
                },
            },
        }),
        react(),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
})
