import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Rankaztactics Team'),
    category: z.string().default('Amazon FBA'),
    heroImage: z.string().optional(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
