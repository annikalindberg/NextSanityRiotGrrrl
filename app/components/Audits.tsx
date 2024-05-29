'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '../../public/assets/check.svg'
import Link from 'next/link'
import classes from '../components/pricing.module.css'
import { slugify } from '@/lib/utils'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}
export function Audits() {
  return (
    <article className="max-w-3xl md:max-w-6xl mx-auto px-4 ">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="py-12 lg:py-15"
        aria-label="Pricing Options"
      >
        <h1 className="text-center mb-6 text-2xl dark:text-white md:text-3xl lg:text-3xl font-semibold text-[#36485C]">
          Hur tillgänglig är din webbplats?{' '}
          <div className="mt-4"> Låt oss testa! </div>
        </h1>
        <h2 className=" text-[#36485C] text-center dark:text-white text-lg lg:text-2xl mt-5">
          Boka kostnadsfri audit idag!
        </h2>
        <p className="md:pt-6 md:pb-6 max-w-3xl md:mx-auto  lg:text-xl">
          Vi är experter på tillgänglighet för webb med 15 år i branchen. Vi
          erbjuder tillgänglighets-audits av webbplatser till förmånliga priser
          och med olika paketlösningar.{' '}
        </p>{' '}
        <p className="pt-6 pb-6 max-w-3xl md:mx-auto lg:text-xl">
          Vi bjuder på en kostnadsfri första audit för att du som kund ska få
          ett smakprov på hur vi arbetar och vilka förbättringar som kan
          göras.Vår vision är att webben ska vara en plats för alla.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start lg:gap-8">
          {[
            {
              title: 'Kostnadsfri Audit',
              description:
                'Perfekt för dig som är osäker på hur din hemsida presterar tillgänglighetsmässigt och vill ha en första överblick.',
              price: 'öppningserbjudande',
              offer: 'Kostnadsfritt',
              linethroughPrice: '4 000 kr',
              features: [
                'Hälsostatus för din hemsida.',
                'Vi gör en översiktlig koll för att identifiera de vanligaste tillgänglighetsbristerna.',
                'Manuell testning av 2 sidor (du väljer själv vilka).',
              ],
              buttonLabel: 'Boka kostnadsfri Audit Small',
              bgClass: 'bg-stone-50 dark:bg-rose-950',
              widthClass: '',
            },
            {
              title: 'Audit Medium',
              description:
                'Här får du en djupgående analys av din webbplats tillgänglighetsstatus och vad som behöver åtgärdas.',
              price: '8 000 kr',
              features: [
                'Kostnadsfritt och förutsättningslöst första möte för att diskutera dina behov och förväntningar innan vi bestämmer oss för att gå vidare.',
                'Manuella tester av upp till 5 unika sidor (du väljer själv vilka).',
                'Detaljerad analys utifrån kriterier som behöver uppfyllas gentemot WCAG 2.2 (nivå A och AA)., tillgänglighetsdirektivet och DOS-lagen',
                'Detaljerad sammanställning av resultat och rekommendationer för åtgärder.',
                'Stöd i att göra smarta prioriteringar utifrån parametrar som impact, svårighetsgrad etc.',
                'Hänvisning till resurser för att åtgärda brister.',
                'Möjlighet att boka en uppföljning för att säkerställa att åtgärderna har haft önskad effekt.',
              ],
              buttonLabel: 'Boka Audit Medium',
              bgClass: 'bg-blue-100 shadow-4xl dark:bg-fuchsia-950',
              widthClass: '',
            },
            {
              title: 'Audit Large',
              description:
                'Personligt utformad tjänst för dig som vill ha en heltäckande analys av din hemsida och en individuellt utformad handlingsplan med tekniskt stöd för att åtgärda bristerna.',
              price: '10 000 kr',
              features: [
                'Allt som ingår i Audit Medium plus:',
                'Hälsostatus för din hemsida.',
                'En första scanning av din hemsida för att identifiera eventuella tillgänglighetsbriste.',
                'Manuell testning av 10 sidor (du väljer själv vilka).',
                'Sammnanställning med identifierade brister rangordnade efter impact och komplexitet.',
                'Lista med rekommenderade åtgärder - tydligt och konkret för ditt utvecklarteam att agera på direkt.',
                'En tillgänglighetsredogörelse att lägga till på din hemsida.',
              ],
              buttonLabel: 'Boka Audit Large',
              bgClass: 'bg-green-100 shadow-4xl dark:bg-green-950',
              widthClass: '',
            },
          ].map((card, index) => (
            <article
              aria-label="{card.title}"
              key={index}
              className={`border-2 border-blue-200 dark:border-rose-100 p-7 mt-10 rounded-lg flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105 ${card.bgClass}`}
            >
              <div>
                <h3 className="mb-5 mt-3 text-2xl font-medium text-center">
                  {card.title}
                </h3>
                <p
                  className={`${classes.multiLineEllipsis} text-center text-xs md:text-sm leading-5`}
                >
                  {card.description}
                </p>

                <ol aria-label="Ingår i paketet" className="mt-4 md:text-md ">
                  {card.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 mb-3"
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      custom={featureIndex}
                    >
                      <Image
                        aria-hidden="true"
                        src={Check}
                        alt="Included"
                        width={20}
                        height={20}
                        className="dark:bg-white mr-3"
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
              <Link
                role="button"
                href={`/forms/${slugify(card.title)}`}
                aria-label={`Boka ${card.title}`}
                className="mt-4 rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-2 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out transform hover:scale-105 "
                /*                 onClick={() => console.log(`${card.buttonLabel} clicked`)}
                 */
              >
                {card.buttonLabel}
              </Link>
            </article>
          ))}{' '}
        </div>{' '}
      </motion.section>{' '}
      <p className=" text-xl text-[#36485C] dark:text-white lg:text-xl">
        * Alla priser inklusive moms
      </p>
      <section
        {...fadeInAnimationVariants}
        className="py-12 lg:py-15 max-w-xl mx-auto"
        aria-label="Frequency Asked Questions"
      ></section>
    </article>
  )
}
