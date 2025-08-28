import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const analyze = process.env.ANALYZE === "true";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react(), analyze && visualizer({ filename: "stats.html", brotliSize: true })].filter(
		Boolean,
	),
	resolve: {
		alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;

					if (id.includes("swiper")) return "chunk-swiper";
					if (id.includes("@supabase/")) return "chunk-supabase";
					if (id.includes("react-toastify")) return "chunk-toastify";
					if (id.includes("react-google-recaptcha")) return "chunk-recaptcha";
					return "vendor";
				},
			},
		},
		// Optional: quiet the warning or keep it strict
		// chunkSizeWarningLimit: 800,

		// Optional: tiny size win
		// esbuild: { drop: ["console", "debugger"] },
	},
});
