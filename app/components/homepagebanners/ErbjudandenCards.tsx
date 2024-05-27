import React from 'react'
import { Card, CardContent, CardButton } from '@/components/ui/card'
import Image from 'next/image'
import erbjudande from '@/public/images/erbjudande2.svg'

const tjanst = [
  {
    title: 'Öppningserbjudande hemsida',
    description: `Vi har ett öppningserbjudande för dig som behöver en ny hemsida. De 4 första som bokar vårt paket "Kickstart - snabbt och enkelt", kommer att få 60% (!) i rabatt på ordinarie pris.
Så är du sugen på att få en kvalitetshemsida levererad inom 2 veckor, SEO-optimerad, tillgänglighets-optimerad, unik design med 60% rabatt av ordinarie pris?
Det enda vi vill ha i utbyte är chansen att få några fina vitsord av dig (om du blir nöjd såklart, vilket vi lovar att du kommer bli) och att du kanske vill rekommendera oss vidare sen 🙏🏻


Lycka till och hoppas att vi hörs! 🌟`,
    url: '/utvecklartjanster',
    buttonLabel: 'Bokningsförfrågan av Kickstart-paketet',
  },
]

export default function ErbjudandeCards() {
  return (
    <div className=" md:mt-5 pb-10">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="mt-2 text-3xl font-bold text-center">
          Öppningserbjudande 60% rabatt
        </h1>
        <section className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mt-5 mb-5">
            <Card className="w-full max-w-4xl bg-gradient-to-t from-rose-100 to-teal-100 dark:bg-gradient-to-t dark:from-rose-950 dark:to-teal-950 border-4 border-rose-900 dark:border-fuchsia-100 shadow-lg transform transition-transform hover:scale-105 rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={erbjudande}
                  alt="Tjej som ropar ut i en megafon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold">{tjanst[0].title}</h3>
                <p>
                  Vi har ett mycket förmånligt öppningserbjudande för dig som
                  behöver en ny hemsida.{' '}
                </p>
                <h3>Hur gör jag för att ta del av erbjudandet? </h3>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  Enkelt! Bli en av de 4 första som bokar vårt paket
                  &quot;Kickstart - snabbt och enkelt&quot;, kommer att få 60% i
                  rabatt på ordinarie pris.
                </p>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  Så är du sugen på att få en kvalitetshemsida levererad inom 2
                  veckor, SEO-optimerad, tillgänglighets-optimerad, unik design
                  med 60% rabatt av ordinarie pris?{' '}
                </p>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  Det enda vi vill ha i utbyte är chansen att få några fina
                  vitsord av dig (om du blir nöjd såklart, vilket vi lovar att
                  du kommer bli) och att du kanske vill rekommendera oss vidare
                  sen 🙏🏻
                </p>
                <CardButton
                  className="w-full mt-5 bg-rose-900 text-white py-2 px-4 rounded hover:bg-rose-800 dark:bg-fuchsia-100 dark:text-slate-900 dark:hover:bg-fuchsia-200"
                  href={tjanst[0].url}
                >
                  Ta mig till {tjanst[0].title}
                </CardButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </div>
  )
}
