import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Schema validation for frontmatter
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        category: z.string().default('General'),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
