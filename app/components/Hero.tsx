import Image from 'next/image'
import banner from '@/public/images/banner1.svg'
import SectionDivider from '@/components/ui/SectionDivider'
import { motion } from 'framer-motion'
import Logo from '@/public/images/GradientLogo.png'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="divide-y divide-gray-100 dark:divide-gray-700 mr-20 ml-20 	"
    >
      <div className="space-y-20  pb-8 lg:ml-20 lg:mr-20 ">
        {' '}
        <Image src={Logo} alt="Logo" className="w-700 h-700" />
        <h1 className="leading-50 text-4xl md:text-5xl lg:text-8xl font-bold lg:max-w-xl">
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
          <p className=" pl-3 md:mt-30 md:max-w-xl font-medium text-2xl">
            Varför välja mellan <span className=" italic"> tillgänglighet</span>{' '}
            och <span className=" italic"> snygg design,</span> när du kan få
            <span className="font-bold"> båda?</span>
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
        <Image
          alt=""
          src={banner}
          width={500}
          height={500}
          className="items-center flex w-500 h-500"
        />
      </div>
    </motion.div>
  )
}
