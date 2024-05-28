/* import { Card, CardContent } from '@/components/ui/card'
import { simpleBlogCard } from '../lib/interface'
import { client, urlFor } from '../lib/client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link' */
import BlogCards from '../components/BlogCards'

export const metadata = {
  title: 'Blogg om webbutveckling och tillgänglighet',
  description:
    'Håll dig uppdaterad om vad som händer inom webbutveckling och tillgänglighetsoptimering. Lär dig om fördelarna med handkodade sidor och hur tillgängliga webbplatser gynnar alla användare, få handfasta tips och hacks för att öka din SEO, webbtrafik och skapa fantastiska användarupplevelser.',
}
/* export const revalidate = 30 // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage, 
      author->{
        name,
        image
      },
      publishedAt
      
  

  }`

  const data = await client.fetch(query)

  return data
}
 */
export default function BlogPage() {
  /*   const data: simpleBlogCard[] = await getData()
   */
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-4 ">
        <p className="text-4xl font-bold">NextToEdit Blogg</p>
        <p className="text-gray-500 dark:text-gray-400">
          Här hittar du våra senaste blogginlägg om webbutveckling och
          tillgänglighetsoptimering. Vi delar med oss av tips och tricks för att
          skapa fantastiska användarupplevelser och öka din webbtrafik. Vill du
          att vi skriver om något speciellt? Kontakta oss!
        </p>
        {/* <div className="grid grid-cols-1  md:grid-cols-2 mt-5 mb-5 gap-5">
          {data.map((post, idx) => (
            <Card key={idx} className="overflow-hidden">
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.titleImage.alt}
                width={700}
                height={100}
                className="rounded-t-lg h-60 md:h-40 object-cover w-full"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>
                <Button asChild className="w-full mt-7">
                  <Link
                    className="hover:underline"
                    href={`/blog/${post.currentSlug}`}
                  >
                    {post.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div> */}
        <BlogCards />{' '}
      </section>
    </>
  )
}
