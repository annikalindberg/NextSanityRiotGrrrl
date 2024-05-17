import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2021-03-25',
  dataset: process.env.SANITY_DATASET!,
  projectId: process.env.SANITY_PROJECT_ID!,
  useCdn: true, // true if your website is static and does not require real-time data
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
