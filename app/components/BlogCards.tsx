// components/BlogCards.tsx
import { client, urlFor } from '../lib/client'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

async function fetchLatestPosts() {
  const query = `
    *[_type == "blog"] | order(publishedAt desc)[0...4] {
      "currentSlug": slug.current,
      title,
      author->{
        name,
        image
      },
      smallDescription,
      titleImage,
      publishedAt,
    }
  `
  const data = await client.fetch(query)
  return data
}

const BlogCard = ({ post }: { post: any }) => {
  const publishedDate = post.publishedAt
    ? format(new Date(post.publishedAt), 'PPP')
    : 'Unknown Date'

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <Image
        src={urlFor(post.titleImage).url()}
        alt={post.titleImage.alt}
        width={400}
        height={200}
        className="rounded-lg"
      />
      <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{post.smallDescription}</p>
      <p className="mt-2 text-xs text-gray-500">{publishedDate}</p>
      <Link
        href={`/blog/${post.currentSlug}`}
        className="mt-4 inline-block text-primary hover:underline"
        aria-label={`Läs hela artikeln ${post.title}`}
      >
        Läs hela &quot; {post.title} &quot;
      </Link>
    </div>
  )
}

export default async function BlogCards() {
  const latestPosts = await fetchLatestPosts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {latestPosts.map((post: any, idx: number) => (
        <BlogCard key={idx} post={post} />
      ))}
    </div>
  )
}
