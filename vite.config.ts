import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const analyze = process.env.ANALYZE === "true";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		analyze && visualizer({ filename: "stats.html", brotliSize: true }),
	].filter(Boolean),
	resolve: {
		alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"chunk-swiper": ["swiper"],
					"chunk-supabase": ["@supabase/supabase-js"],
					"chunk-toastify": ["react-toastify"],
					"chunk-recaptcha": ["react-google-recaptcha"],
				},
			},
		},
	},
});
