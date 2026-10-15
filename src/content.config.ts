import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sourceSchema = z.object({ title: z.string(), url: z.string().url() });
const productSchema = z.object({
  name: z.string(),
  note: z.string().max(140).optional(),
  url: z.string().url(),
  store: z.enum(["amazon", "noon", "jarir", "extra", "other"]).default("amazon"),
});
const cities = ["riyadh", "jeddah", "makkah", "madinah", "dammam", "khobar", "qassim", "abha", "tabuk", "hail", "other"] as const;
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
    city: z.enum(cities).optional(),
    leadCta: z.boolean().optional(),
    products: z.array(productSchema).max(3).default([]),
    ogImage: z.string().optional(),
  }),
});

const tag = defineCollection({
  loader: glob({ base: "./content/tags", pattern: "**/*.{md,mdx}" }),
  schema: z.object({ title: z.string().optional(), description: z.string().optional() }),
});

export const collections = { post, tag };
