import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Public client for fetching data (Safe to use in React)
export const client = createClient({
  projectId: "m909wrdy", // Your NEW Project ID
  dataset: "production",
  useCdn: true, // Faster response time for users
  apiVersion: "2026-01-17", // Today's date
  // token: NEVER put a token here for a frontend-only app
});

// Image Builder Helper
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
