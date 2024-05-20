import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

console.log('Project ID:', process.env.SANITY_PROJECT_ID)
console.log('Dataset:', process.env.SANITY_DATASET)

export default defineConfig({
  name: 'default',
  title: 'nextsanityportfolio',

  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
