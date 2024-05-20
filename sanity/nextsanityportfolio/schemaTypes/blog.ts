import {validation} from 'sanity'
import authorType from './author'
import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {init} from 'next/dist/compiled/webpack/webpack'

export default {
  name: 'blog',
  type: 'document',
  icon: BookIcon,
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      options: {hotspot: true},
      title: 'Title Image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'additionalImage',
      type: 'image',
      options: {hotspot: true},
      title: 'Additional Image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date of publication',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
