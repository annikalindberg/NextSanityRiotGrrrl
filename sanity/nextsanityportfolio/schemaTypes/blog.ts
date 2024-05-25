// blog.js (Sanity schema)
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'smallDescription',
      type: 'string',
      title: 'Small Description',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'additionalImage',
      type: 'image',
      title: 'Additional Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    },
  ],
}
