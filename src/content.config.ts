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

const temperatureEnum = z.enum([
  'freezing',
  'too-cold',
  'cold',
  'taman',
  'hot',
  'too-hot',
  'burning',
]);

const socialBatteryEnum = z.enum([
  'full',
  'high',
  'medium',
  'low',
  'empty',
  'negative',
]);

const guideTypeEnum = z.enum([
  'food',
  'drinks',
  'activities',
  'seasonal',
  'neighborhoods',
]);

const priceRangeEnum = z.enum([
  'budget',
  'moderate',
  'luxury',
]);

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    caption: z.string().optional(), // Handwritten caption for hero image
    tags: z.array(z.string()).default([]),
    category: categoryEnum,
    confusionLevel: z.number().min(1).max(5),
    draft: z.boolean().default(false),
    location: z.string().default('Zagreb'),
    region: regionEnum.default('continental'),
    // Status card overrides (optional - defaults come from site.ts)
    statusConfusionLevel: z.number().min(1).max(100).optional(),
    statusTemperature: temperatureEnum.optional(),
    statusSocialBattery: socialBatteryEnum.optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    caption: z.string().optional(),
    guideType: guideTypeEnum,
    neighborhood: z.string().optional(),
    priceRange: priceRangeEnum.optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    location: z.string(),
    region: regionEnum.default('continental'),
  }),
});

const weekly = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    weekStart: z.coerce.date(),
    weekEnd: z.coerce.date(),
    pubDate: z.coerce.date(),
    heroImage: image().optional(),
    caption: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    location: z.string(),
    region: regionEnum.default('continental'),
  }),
});

export type Category = z.infer<typeof categoryEnum>;
export type Region = z.infer<typeof regionEnum>;
export type Temperature = z.infer<typeof temperatureEnum>;
export type SocialBattery = z.infer<typeof socialBatteryEnum>;
export type GuideType = z.infer<typeof guideTypeEnum>;
export type PriceRange = z.infer<typeof priceRangeEnum>;

export const collections = { blog, guides, weekly };
