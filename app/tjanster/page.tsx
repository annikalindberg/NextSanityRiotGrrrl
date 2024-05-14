import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import banner from '@/public/images/banner.svg'
import Image from 'next/image'
import Link from 'next/link'
import { url } from 'inspector'

const tjanst = [
  {
    title: 'Utvecklartjänster',
    smallDescription:
      'Vi hjälper dig med att bygga en ny webbplats, uppdatera en befintlig eller skapa en helt ny webbapplikation. Vi använder oss av moderna tekniker och ramverk för att skapa en webbplats som är snabb, säker och tillgänglig för alla användare.',
    url: '/utvecklartjanster',
  },
]

export default function TjansterPage() {
  return (
    <>
      <h1 className="mt-5 ml-6">Tjänster</h1>
      <section className="max-w-3xl mx-auto px-4 ">
        <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
          <Card>
            {/* Your card content here */}
            <Image
              src={banner}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">
                {tjanst[0].title}
              </h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {tjanst[0].smallDescription}
              </p>
              <Link
                className="w-full mt-7 hover:underline"
                href="/utvecklartjanster"
              >
                Take me to {tjanst[0].title}
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
