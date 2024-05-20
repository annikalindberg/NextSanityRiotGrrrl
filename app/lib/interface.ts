export interface simpleBlogCard {
  title: string
  smallDescription: string
  currentSlug: string
  titleImage: any
}

export interface fullBlog {
  smallDescription: string
  currentSlug: string
  title: string
  content: any
  titleImage: any
  image: string
  additionalImage: {
    asset: {
      _ref: string
    }
    alt: string
  }
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
