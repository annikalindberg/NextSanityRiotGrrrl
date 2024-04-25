'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Check from '../../public/assets/check.svg'
import Link from 'next/link'
import classes from '../components/pricing.module.css'

const slugify = text => text.toLowerCase().replace(/\s+/g, '-')

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
const PricingPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="py-12 lg:py-15"
      aria-label="Pricing Options"
    >
      <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px] mb-10 mt-7 leading-7">
        Våra tester inkluderar en övergripande granskning av koden samt manuella
        tester av användarflödena. Vi använder verktyg som skärmläsare och
        tangentbordsnavigering för att säkerställa att alla element på din
        webbplats är tillgängliga för varje användare.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 lg:gap-8">
        {' '}
        {[
          {
            title: 'Audit Small',
            description:
              'Perfekt för dig som är osäker på hur din hemsida presterar tillgänglighetsmässigt och vill ha en första överblick.',
            price: 'Gratis erbjudande',
            features: [
              'Hälsostatus för din hemsida',
              'Vi gör en översiktlig koll för att identifiera de vanligaste tillgänglighetsbristerna',
              'Manuell tesning av 2 sidor (du väljer själv vilka)',
            ],
            buttonLabel: 'Boka gratis audit small',
            bgClass: 'bg-stone-50 dark:bg-rose-950',
            widthClass: '',
          },
          {
            title: 'Audit Medium',
            description:
              'Här får du en djupgående analys av din webbplats tillgänglighetsstatus och vad som behöver åtgärdas.',
            price: '7000 kr',
            features: [
              'Kostnadsfritt och förutsättningslöst första möte för att diskutera dina behov och förväntningar innan vi bestämmer oss för att gå vidare',
              'Manuella tester av upp till 5 unika sidor (du väljer själv vilka)',
              'Detaljerad analys utifrån kriterier som behöver uppfyllas gentemot WCAG 2.2 (nivå A och AA), tillgänglighetsdirektivet och DOS-lagen',
              'Detaljerad sammanställning av resultat och rekommendationer för åtgärder',
              'Stöd i att göra smarta prioriteringar utifrån parametrar som impact, svårighetsgrad etc.',
              'Hänvisning till resurser för att åtgärda brister',
              'Möjlighet att boka en uppföljningsaudit för att säkerställa att åtgärderna har haft önskad effekt',
            ],
            buttonLabel: 'Boka Audit Medium',
            bgClass: 'bg-blue-100 shadow-4xl dark:bg-fuchsia-950',
            widthClass: '',
          },
          {
            title: 'Audit Large',
            description:
              'Personligt utformad tjänst för dig som vill ha en heltäckande analys av din hemsida och en individuellt utformad handlingsplan med tekniskt stöd för att åtgärda bristerna.',
            price: '10000 kr',
            features: [
              'Allt som ingår i Audit Medium plus:',
              'Hälsostatus för din hemsida',
              'En första scanning av din hemsida för att identifiera eventuella tillgänglighetsbriste',
              'Manuell tesning av 10 sidor (du väljer själv vilka)',
              'Sammnaställning med identifierade brister rangordnade efter impact och komplexitet',
              'Tillgänglighetsredogörelse',
            ],
            buttonLabel: 'Boka Audit Large',
            bgClass: 'bg-green-100 shadow-4xl dark:bg-green-950',
            widthClass: '',
          },
        ].map((card, index) => (
          <article
            key={index}
            className={`border-2 border-blue-200 dark:border-rose-100 w-full md:w-2/3 lg:w-${
              index === 1 ? '2/5' : '1/5'
            } rounded-lg p-7 flex flex-col justify-between ${
              card.bgClass
            } transition-all duration-300 ease-in-out transform ${
              index === 1
                ? `lg:scale-110 shadow-xl ${classes.specialCard}`
                : 'hover:scale-105'
            }`}
          >
            {index === 1 && (
              <span className="absolute top-0 right-0 p-2 bg-red-500 text-white text-sm rounded-bl-lg">
                Best Value!
              </span>
            )}

            <div>
              <h3 className="font-medium text-2xl text-center mb-5 mt-3">
                {card.title}
              </h3>
              <p
                className={`${classes.multiLineEllipsis} text-center text-xs leading-5`}
              >
                {card.description}
              </p>

              <h2 className="text-2xl font-semibold lg:text-2xl pt-4 text-center leading-10">
                {card.price}
              </h2>
              <ol className="mt-4 text-xs ">
                {card.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-2 mb-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={featureIndex}
                  >
                    <Image src={Check} alt="Included" width={10} height={10} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
            <Link
              href={`/forms/${slugify(card.title)}`}
              aria-label={`Boka ${card.title}`}
              className="mt-4 rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-2 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
              onClick={() => console.log(`${card.buttonLabel} clicked`)}
            >
              {card.buttonLabel}
            </Link>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default PricingPage
