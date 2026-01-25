import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Public client for fetching data (Safe to use in React)
export const client = createClient({
  projectId: "m909wrdy", 
  dataset: "production",
  useCdn: true, 
  apiVersion: "2026-01-17", 
});

// Image Builder Helper
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
