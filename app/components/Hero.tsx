import Image from 'next/image'
import banner from '@/public/images/banner1.svg'
import SectionDivider from '@/components/ui/SectionDivider'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className=" mr-10 ml-10 	"
    >
      <div className="space-y-9 pt-10  pb-7 lg:ml-20 lg:mr-20 ">
        {' '}
        <h1 className="leading-50 text-3xl md:text-4xl lg:text-6xl font-bold lg:max-w-xl">
          {' '}
          Framtidens webbutveckling{' '}
          <span className="bg-gradient-to-r from-orange-400 via-rose-700 dark:rose-100 dark:to-red-100 to-red-900 bg-clip-text text-transparent ">
            prisvärda
          </span>{' '}
          och{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-900 bg-clip-text text-transparent">
            tillgängliga
          </span>{' '}
          digitala{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            lösningar
          </span>
        </h1>{' '}
        <span className=" items-center flex pr-3">
          <SectionDivider />
          <p className=" pl-3 md:mt-30 md:max-w-xl font-medium md:text-3xl leading-50">
            Varför välja mellan <span className=" italic"> tillgänglighet</span>{' '}
            och innovativ<span className=" italic">design,</span> när du kan få
            <span className="font-bold"> båda?</span>
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
        <Image
          alt="Illustration av människor med funktionsvariationer som sitter i en kontorsmiljö"
          src={banner}
          width={500}
          height={500}
          className="items-center flex w-500 h-500"
        />
      </div>
    </motion.div>
  )
}
