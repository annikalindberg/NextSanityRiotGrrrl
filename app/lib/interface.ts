export interface simpleBlogCard {
  title: string
  smallDescription: string
  currentSlug: string
  titleImage: any
  publishedAt: string
  author?: Author
  /*   content: BlockContent[] // Add this line to include block content
   */
}

export interface fullBlog {
  smallDescription: string
  currentSlug: string
  title: string
  content: any
  titleImage: any
  publishedAt: string
  author?: Author
  image: string
  additionalImage: {
    asset: {
      _ref: string
    }
    alt: string
  }
}
export interface Author {
  image: any
  name?: string
  picture?: any
}
// lib/interface.ts
export interface Project {
  slug: string
  title: string
  description: string
  image: string
  imageCaption?: string
  githubLink: string
  LiveDemoLink: string
  stack: string[]
  notes?: string
  futureImprovements?: string
}

/* export interface BlockContent {
  asset: any
  alt: string
  children: any
  _type: 'block'
  styles: {
    title: string
    value: string
  }[]
  lists: {
    title: string
    value: string
  }[]
  marks: {
    decorators: {
      title: string
      value: string
    }[]
    annotations: {
      title: string
      name: string
      type: string
      fields: {
        title: string
        name: string
        type: string
      }[]
    }[]
  }
}
 */
