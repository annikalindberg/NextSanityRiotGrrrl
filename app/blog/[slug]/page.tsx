import { client, urlFor } from '../../lib/client'
import { fullBlog } from '../../lib/interface'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.nexttoedit-tech.com'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)
  return {
    title: data.title,
    description: data.smallDescription,
    metadataBase: new URL('https://www.nexttoedit-tech.com'), // Use the baseURL determined above
    openGraph: {
      title: data.title,
      description: data.content,
      images: [
        {
          url: urlFor(data.titleImage).url(),
          alt: data.titleImage.alt,
        },
      ],
    },
  }
}
async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']
    {
      "currentSlug": slug.current,
      title,
      content,
      smallDescription,
      titleImage,
      additionalImage // Included additionalImage in the query
    }[0],
    date,
  `

  const data = await client.fetch(query)
  return data
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string }
}) {
  const data: fullBlog = await getData(params.slug)
  console.log(data) // This will log the fetched data or null

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div>
        <h1 className="text-center">
          <span className="block text-base text-primary font-semibold tracking-wide uppercase dark:text-gray-200">
            NextToEdit Tech Blogg
          </span>
          <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          {data.date}
        </p>

        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          {data.smallDescription}
        </p>

        <div className="relative h-96 mt-20">
          <Image
            src={urlFor(data.titleImage).url()}
            alt={data.titleImage.alt}
            fill // Using the fill prop
            sizes="(max-width: 768px) 100vw, 50vw" // Added sizes prop
            className="rounded-lg object-cover"
          />
        </div>

        {data.additionalImage && (
          <div className="relative h-96 mt-20">
            <Image
              src={urlFor(data.additionalImage.asset._ref).url()}
              alt={data.additionalImage.alt}
              fill // Using the fill prop
              sizes="(max-width: 768px) 100vw, 50vw" // Added sizes prop
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
    </section>
  )
}
