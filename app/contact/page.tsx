'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { sendEmail } from '@/actions/sendEmail'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="mt-20 text-4xl font-semibold dark:text-white">
        Kontakta mig!{' '}
      </h1>

      <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a
          className="underline"
          href="mailto:annika.edit.lindberg&#64;gmail&#46;com"
        >
          annika.edit.lindberg&#64;gmail&#46;com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { data, error } = await sendEmail(formData)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully!')
          console.log(data)
        }}
      >
        <label
          htmlFor="senderEmail"
          className="dark:text-white mb-1 mt-2 text-left"
        >
          Your Email:
        </label>
        <input
          id="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Enter your email here"
        />
        <label htmlFor="message" className="dark:text-white mt-3 text-left">
          Your Message:
        </label>
        <textarea
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Write your message here"
          required
          maxLength={5000}
        />
        {/*   <label
          id="planLabel"
          htmlFor="selectPlan"
          className="font-semibold mb-2"
        >
          Select Plan (required)
        </label>
        <select
          id="selectPlan"
          name="selectPlan"
          className={`h-14 px-4 rounded-lg border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none`}
          required
          aria-labelledby="planLabel"
        >
          <option value="" disabled selected>
            --Vad är du intresserad av?--
          </option>
          <option value="Audit Small">Audit Small (kostnadsfritt)</option>
          <option value="Audit Medium">Audit Medium</option>
          <option value="Audit Large">Audit Large</option>
        </select>
 */}
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white font-semibold py-3 rounded-lg mt-5"
        >
          Send Email
        </button>
      </form>
    </motion.section>
  )
}