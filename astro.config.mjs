import { defineConfig } from 'astro/config';
import siteContent from './src/data/site.json' with { type: 'json' };

export default defineConfig({
  site: siteContent.siteUrl,
  output: 'static'
});
