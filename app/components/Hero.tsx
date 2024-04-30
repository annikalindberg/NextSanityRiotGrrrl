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
      className="border-2 border-rose-600 md:border-slate-800 md:m-10 lg:border-green-800 lg:m-20  	"
    >
      <div className="border-2 border-green-600 mt-5 max-w-xs ml-4 md:border-pink-600 md:max-w-sm gap-3 lg:gap-5 lg:max-w-xl ">
        <h1 className="border-2 border-blue-600 font-bold leading-normal ">
          Webbutveckling med tillgänglighetsperspektiv <span>&</span> <br />
          Tillgänglighetsgranskning med utvecklarperspektiv
        </h1>
        <p className="border-2 border-rose-600 mt-3 md:text-xl lg:text-3xl md:ml-20 md:m-7">
          Varför välja mellan <span className=" italic"> tillgänglighet</span>{' '}
          och innovativ<span className=" italic">design,</span> när du kan få
          <span className="font-bold"> båda?</span>
        </p>{' '}
        <p className="text-sm ...">
          The quick brown fox Webbutveckling med tillgänglighetsperspektiv{' '}
          <span>&</span> <br />
          Tillgänglighetsgranskning med ett utvecklarperspektiv ...
        </p>
        <h1 className="text-base ...">The quick brown fox ...</h1>
        <p className="text-lg ...">The quick brown fox lg...</p>
        <p className="text-xl ...">The quick brown fox ...</p>
        <p className="text-2xl ...">The quick brown fox ...</p>
        <div className="flex flex-col justify-center items-center gap-3 lg:gap-5">
          <Image
            alt="Illustration av människor med funktionsvariationer som sitter i en kontorsmiljö"
            src={banner}
            width={500}
            height={500}
            className="items-center flex w-500 h-500"
          />
        </div>
      </div>
    </motion.div>
  )
}
