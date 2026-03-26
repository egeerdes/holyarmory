import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import mdPlugin from 'vite-plugin-markdown'

export default defineConfig({
	plugins: [react(), cloudflare(),mdPlugin({mode:['html','toc']})]
});
