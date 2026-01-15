import { defineCollection, z } from 'astro:content';

const categoryEnum = z.enum([
  'latino-vs-slavic',
  'adventure',
  'language',
  'hidden-stories',
]);

const regionEnum = z.enum([
  'dalmatia',
  'dubrovnik',
  'istria',
  'slavonia',
  'continental',
  'kvarner',
  'lika',
]);

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    caption: z.string().optional(), // Handwritten caption for hero image
    tags: z.array(z.string()).default([]),
    category: categoryEnum,
    confusionLevel: z.number().min(1).max(5),
    draft: z.boolean().default(false),
    location: z.string().default('Zagreb'),
    region: regionEnum.default('continental'),
  }),
});

export type Category = z.infer<typeof categoryEnum>;
export type Region = z.infer<typeof regionEnum>;

export const collections = { blog };
