import { pages } from "./src/router/astro_integration.js";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [pages],
});
