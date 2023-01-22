import { defineConfig } from 'astro/config';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
// import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare()
  // integrations: [prefetch()]
  ,

  integrations: [react(), tailwind(
  //   {
  //   // Example: Provide a custom path to a Tailwind config file
  //   config: { path: './custom-config.cjs' },
  // }
  )]
});