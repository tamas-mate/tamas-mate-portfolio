import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const analyze = process.env.ANALYZE === "true";

export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
		analyze && visualizer({ filename: "stats.html", brotliSize: true }),
	].filter(Boolean),
	resolve: {
		alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
	},
});
