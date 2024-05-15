import Image from 'next/image'
import { motion } from 'framer-motion'
import girl from '@/public/images/girl.svg'
import Link from 'next/link'
import { CTAButton } from './cta-buttons'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="md:m-10  lg:m-20"
    >
      {/* Wrap content and image in a flex container only on large screens */}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        {/* Text container */}
        <div className="max-w-xs ml-4  md:max-w-sm lg:max-w-xl lg:mr-10">
          <h1 className=" text-left font-bold leading-relaxed tracking-wide text-3xl md:text-4xl lg:text-6xl md:leading-normal ">
            Vi{' '}
            <span
              className="text-rose-900 dark:text-fuchsia-100 font-bold
            "
            >
              {' '}
              skapar{' '}
            </span>{' '}
            webbplatser{' '}
            <span
              className="text-rose-900 dark:text-fuchsia-100 font-bold
            "
            >
              optimerade{' '}
            </span>{' '}
            utifrån tillgänglighet, SEO och användbarhet.{' '}
          </h1>
          <p className=" md:mt-8 lg:mt-15">
            Just nu bjuder vi på en kostnadsfri audit med manuell testning av 2
            sidor på din webbplats! Boka nu för att ta del av erbjudandet.
          </p>
          <div className=" items-center mt-10 mb-10 md:mt-16 md:mb-16 lg:mt-20 lg:mb-20">
            <CTAButton
              title="Jag vill ha en kostnadsfri Audit"
              buttonLabel="Jag vill ha en kostnadsfri Audit"
            />
          </div>{' '}
          {/*   <p className="mt-5 md:mt-8 lg:mt-15 leading-8">
            Vi erbjuder olika paketlösningar där experter går igenom utvalda
            delar av er webbplats, gör omfattande tillgänglighetstestning med en
            åtgärdslista som vi presenterar för ert utvecklarteam.
          </p>{' '} */}
          <p className="mt-4"> Behöver du en helt ny optimerad hemsida?</p>
          <p className="mt-4 mb-2">
            {' '}
            Kolla in våra konkurrenskraftiga paketerbjudanden för tillgängliga
            och hållbara hemsidor idag
          </p>
          <Link
            href="/tjanster"
            passHref
            className="text-ocean-950 font-extrabold text-lg md:text-xl lg:text-2xl dark:text-fuchsia-100 underline "
          >
            Läs mer om våra hemsidepaket
          </Link>
          <p className="mt-5 md:mt-8 lg:mt-15 font-normal leading-8">
            {' '}
            Boka ett kostnadsfritt och förutsättningslöst samtal berättar vi mer
            om hur vi kan förbättra din digitala närvaro, öka synlighet och
            förbättra användarupplevelsen för dina besökare.
          </p>{' '}
        </div>
        {/* Image container */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex flex-col justify-center items-center lg:w-1/2"
        >
          <Image
            alt="Kvinna med en laptop i knät och knutna nävar i luften som en segergest."
            src={girl}
            width={300}
            height={300}
            className="items-center w-1/2 justify-center lg:w-3/4"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
