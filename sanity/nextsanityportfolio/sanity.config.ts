import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

console.log('Project ID:', process.env.SANITY_PROJECT_ID)
console.log('Dataset:', process.env.SANITY_DATASET)

export default defineConfig({
  name: 'default',
  title: 'nextsanityportfolio',

  projectId: 't7u3qpl5',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
