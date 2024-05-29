import { client, urlFor } from '../../lib/client'
import { fullBlog } from '../../lib/interface'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { format } from 'date-fns'
import BlogCards from '../../components/BlogCards'
import Link from 'next/link'

// Utility function to extract plain text from Portable Text
function extractPlainText(blocks: any[]) {
  return blocks
    .map((block: { _type: string; children: any[] }) => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: { text: any }) => child.text).join('')
    })
    .join('\n')
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getData(params.slug)
  const plainTextContent = extractPlainText(data.content)

  return {
    title: data.title,
    description: data.smallDescription,
    metadataBase: new URL(
      `https://www.nexttoedit-tech.com/blog/${params.slug}`
    ),
    openGraph: {
      title: data.title,
      description: plainTextContent,
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
      author->{
        name,
        image
      },
      content,
      smallDescription,
      titleImage{
        asset->{
          _id,
          url
        },
        alt
      },
      additionalImage{
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
    }[0]
  `

  const data = await client.fetch(query)
  console.log('Fetched Data:', data)

  return data
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string }
}) {
  const data: fullBlog = await getData(params.slug)
  console.log('Fetched Data:', data) // Debugging log

  const publishedDate = data.publishedAt
    ? format(new Date(data.publishedAt), 'PPP')
    : 'Unknown Date'

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
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {publishedDate}
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {data.smallDescription}
        </p>

        <div className="relative max-w-3xl mx-auto mt-10">
          <Image
            src={urlFor(data.titleImage).url()}
            alt={data.titleImage.alt}
            width={400}
            height={500}
            className="rounded-lg "
          />
        </div>

        <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
          <PortableText value={data.content} />
        </div>
        {/*         <div className="relative max-w-3xl mx-auto mt-10">
          <Image
            src={urlFor(data.additionalImage).url()}
            alt={data.additionalImage.alt}
            width={400}
            height={500}
            className="rounded-lg flex justify-center items-center
        "
          />
        </div> */}
        {/* Author Information at the Bottom */}
        {data.author && (
          <div className="flex items-center mt-10">
            {data.author.image && (
              <Image
                src={urlFor(data.author.image).url()}
                alt={data.author.name ?? 'Author Image'}
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <div className="ml-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {data.author.name ?? 'Unknown Author'}
              </p>
            </div>
          </div>
        )}
      </div>
      <section className="max-w-3xl mx-auto px-6 py-4 ">
        <h3 className="text-center text-3xl font-bold mt-5 mb-5">
          Läs de senaste inläggen
        </h3>
        <BlogCards />
      </section>
    </section>
  )
}
