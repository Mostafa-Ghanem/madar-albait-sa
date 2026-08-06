import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sourceSchema = z.object({ title: z.string(), url: z.string().url() });
const post = defineCollection({
  loader: glob({ base: "./content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().max(75),
    description: z.string().min(80).max(180),
    category: z.enum(["satellites", "channels", "receivers", "streaming"]),
    tags: z.array(z.string()).default([]),
    authorSlug: z.enum(["mostafa-ghanem", "gamal-abdelaziz"]).default("mostafa-ghanem"),
    reviewerSlug: z.enum(["mostafa-ghanem", "gamal-abdelaziz"]).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    pinned: z.boolean().default(false),
    affiliate: z.boolean().default(false),
    verificationStatus: z.enum(["verified", "evergreen", "pending"]).default("evergreen"),
    publishDate: z.string().or(z.date()).transform((v) => new Date(v)),
    updatedDate: z.string().or(z.date()).optional().transform((v) => v ? new Date(v) : undefined),
    lastVerifiedDate: z.string().or(z.date()).optional().transform((v) => v ? new Date(v) : undefined),
    sources: z.array(sourceSchema).default([]),
    ogImage: z.string().optional(),
  }),
});

const tag = defineCollection({
  loader: glob({ base: "./content/tags", pattern: "**/*.{md,mdx}" }),
  schema: z.object({ title: z.string().optional(), description: z.string().optional() }),
});

export const collections = { post, tag };
