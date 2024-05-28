import {type SchemaTypeDefinition} from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/blog'
import blog from './schemaTypes/blog'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [post, blog, category, blockContent],
}
