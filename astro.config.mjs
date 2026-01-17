// @ts-check
import { defineConfig, envField } from 'astro/config';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

/**
 * Build a map of content paths to their lastmod dates.
 * Reads frontmatter directly from content files at config time.
 */
async function buildContentDateMap() {
  const dateMap = new Map();
  const contentDir = './src/content';

  const collections = [
    { name: 'blog', urlPrefix: '/blog/' },
    { name: 'guides', urlPrefix: '/guides/' },
    { name: 'weekly', urlPrefix: '/weekly/' },
  ];

  for (const { name, urlPrefix } of collections) {
    try {
      const dir = join(contentDir, name);
      const files = await readdir(dir);

      for (const file of files) {
        if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

        const filePath = join(dir, file);
        const content = await readFile(filePath, 'utf-8');
        // Trim leading whitespace so gray-matter finds the frontmatter
        const { data } = matter(content.trimStart());

        if (data.draft) continue;

        const slug = file.replace(/\.(md|mdx)$/, '');
        const path = `${urlPrefix}${slug}/`;
        const lastmod = data.updatedDate || data.pubDate;

        if (lastmod) {
          dateMap.set(path, new Date(lastmod));
        }
      }
    } catch {
      // Collection directory doesn't exist, skip
    }
  }

  return dateMap;
}

const contentDateMap = await buildContentDateMap();

// https://astro.build/config
export default defineConfig({
  site: 'https://gabrielincroatia.com',
  integrations: [
    react(),
    mdx(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname;
        const lastmod = contentDateMap.get(path);

        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }

        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),

  env: {
    schema: {
      CONVERTKIT_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    }
  }
});