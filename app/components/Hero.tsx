import Image from 'next/image'
import banner from '@/public/images/banner.svg'
import SectionDivider from '@/components/ui/SectionDivider'
import { motion } from 'framer-motion'
import Logo from '@/public/images/Logo.svg'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="divide-y  divide-gray-100 dark:divide-gray-700  flex-col flex mr-20 ml-20 	"
    >
      <div className="space-y-20 mt-20  pb-8 lg:ml-20 lg:mr-20 ">
        {' '}
        <h1 className="leading-50 md:text-5xl lg:text-8xl font-bold">
          {' '}
          Framtidens webbutveckling{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            prisvärda
          </span>{' '}
          och{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            tillgängliga
          </span>{' '}
          digitala{' '}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            lösningar
          </span>
        </h1>{' '}
        <span className=" items-center flex pr-3">
          <SectionDivider />
          <p className="mt-30 pl-3 font-medium text-3xl">
            Varför välja mellan <span className=" italic"> tillgänglighet</span>{' '}
            och <span className=" italic"> snygg design,</span> när du kan få
            <span className="font-bold"> båda?</span>
          </p>
        </span>
      </div>
      <Image alt="" src={banner} width={5000} height={5000} className="" />
    </motion.div>
  )
}
