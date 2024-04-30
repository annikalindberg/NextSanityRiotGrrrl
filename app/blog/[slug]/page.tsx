import { client, urlFor } from '../../lib/client'
import { fullBlog } from '../../lib/interface'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}' ]
    {"currentSlug": slug.current,
      title,
      content,
      titleImage}[0]
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
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div>
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase dark:text-gray-200">
            Annika - blogg
          </span>

          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
        </h1>
        <div className="relative h-96 mt-20">
          <Image
            src={urlFor(data.titleImage).url()}
            alt="Title Image"
            layout="fill"
            objectFit="cover" // This can be cover, contain, etc.
            className="rounded-lg"
          />
        </div>

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
    </main>
  )
}
