import React from 'react'
import { Card, CardContent, CardButton } from '@/components/ui/card'
import banner from '@/public/images/banner.svg'
import Image from 'next/image'
import utveckling from '@/public/images/webbutveckling.svg'
import access from '@/public/images/access.svg'
import unicorn from '@/public/images/unicorn2.svg'

const tjanst = [
  {
    title: 'Öppningserbjudande',
    smallDescription: 'Den ',
    url: '/utvecklartjanster',
  },
  {
    title: 'Tillgänglighets-audits',
    smallDescription:
      'Vi granskar befintliga webbplatser och identifierar tillgänglighetsbrister. Vi ser till att dina webbsidor uppfyller gällande riktlinjer och lagar om digital tillgänglighet.',
    url: '/tillganglighets-audits',
  },
  {
    title: 'Konsulttjänster',
    smallDescription:
      ' På jakt efter en konsult specialiserad inom Frontend och UX?',
    url: '/konsulttjanster',
  },
  {},
]

export default function TjansterCards() {
  return (
    <div className="bg-gradient-to-t from-rose-100 to-teal-100 dark:bg-gradient-to-t dark:from-rose-950 dark:to-teal-950 pt-10 pb-10">
      <section className="max-w-3xl mx-auto px-4 ">
        <h1 className="mt-5 ml-6">Tjänster</h1>
        <section className="max-w-3xl mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 gap-5">
            <Card className="border-4 border-rose-900 dark:border-fuchsia-100">
              {/* Your card content here */}
              <Image
                src={utveckling}
                alt="image"
                width={300}
                height={300}
                className="rounded-t-lg h-[200px] object-cover  bg-green-400"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">
                  {tjanst[0].title}
                </h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {tjanst[0].smallDescription}
                </p>
                <CardButton
                  className="w-full mt-7 hover:underline"
                  href="/utvecklartjanster"
                >
                  Ta mig till {tjanst[0].title}
                </CardButton>
              </CardContent>
            </Card>
            <Card className="border-4 border-rose-900 dark:border-fuchsia-100">
              {/* Your card content here */}
              <Image
                src={access}
                alt="image"
                width={300}
                height={300}
                className="rounded-t-lg h-[200px] object-cover bg-yellow-400"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">
                  {tjanst[1].title}
                </h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {tjanst[1].smallDescription}
                </p>
                <CardButton
                  className="w-full mt-7 hover:underline"
                  href="/tillganglighets-audits"
                >
                  Ta mig till {tjanst[1].title}
                </CardButton>
              </CardContent>
            </Card>
            <Card className="border-4 border-rose-900 dark:border-fuchsia-100">
              {/* Your card content here */}
              <Image
                src={unicorn}
                alt="AI generated image of a unicorn sitting along in front of a desk with several monitors and a laptop"
                width={300}
                height={300}
                className="rounded-t-lg h-[200px] object-cover "
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-2 font-bold">
                  {tjanst[2].title}
                </h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {tjanst[2].smallDescription}
                </p>
                <CardButton
                  className="w-full mt-7 hover:underline"
                  href="/konsulttjanster"
                >
                  Ta mig till {tjanst[2].title}
                </CardButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </div>
  )
}
