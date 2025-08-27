import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
    externalDemos: defineCollection({
        loader: file("src/content/lists/ExternalDemos.json"),
        schema: z.object({
            label: z.string(),
            url: z.string(),
        }),
    }),
    pages: defineCollection({
        loader: file("src/content/lists/Pages.json"),
        schema: z.object({
            label: z.string(),
            url: z.string(),
        }),
    }),
};
