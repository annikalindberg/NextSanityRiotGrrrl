import Image from 'next/image'
import banner from '@/public/images/banner1.svg'
import { motion } from 'framer-motion'
import girl from '@/public/images/girl.svg'
import Link from 'next/link'

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
        <div className=" mt-5 max-w-xs ml-4  md:max-w-sm lg:max-w-xl lg:mr-10">
          <h1 className=" text-left font-bold leading-relaxed tracking-wider text-3xl md:text-4xl lg:text-6xl md:leading-normal lg:leading-normal">
            Kvalitetssäkrade webbplatser <br />
            <span className="tracking-widest"> för alla</span>
          </h1>
          <p className=" mt-3 text-xl md:text-xl lg:text-3xl md:m-4">
            Varför välja mellan <em>tillgänglighet</em> och innovativ{' '}
            <em>design,</em> när du kan få <strong>båda?</strong>{' '}
          </p>{' '}
          <p className="mt-5 md:mt-8 lg:mt-15 tracking-wider leading-10">
            Vi är utvecklare och experter på tillgänglighet. Med oss slipper du
            kompromissa. <br />
          </p>
          <p className="mt-5 md:mt-8 lg:mt-15 font-bold">
            {' '}
            Boka ett kostnadsfritt och förutsättningslöst samtal så berättar vi
            mer.
          </p>{' '}
          <div className=" items-center flex justify-center mt-8 md:mt-10 lg:mt-20">
            <Link
              href="/contact"
              className="rounded bg-rose-900 text-white dark:bg-fuchsia-100 dark:text-slate-900 py-4 px-4 font-medium hover:bg-rose-800 dark:hover:bg-fuchsia-200 transition-colors duration-500 ease-in-out  transform hover:scale-105 "
            >
              Boka en gratis konsultation
            </Link>
          </div>
        </div>
        {/* Image container */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // End at the normal position with full opacity
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Customize the type of animation and its properties
          className="flex justify-center items-center lg:w-1/2"
        >
          {' '}
          <Image
            alt="Kvinna med en laptop i knät och knutna nävar i luften som en segergest."
            src={girl}
            width={300}
            height={300}
            className="items-center w-1/2 justify-center lg:w-3/4"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
