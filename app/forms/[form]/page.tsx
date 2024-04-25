import React from 'react'
import toast from 'react-hot-toast'
import { usePathname } from 'next/navigation'
import { sendEmail } from '@/actions/sendEmail'
import { motion } from 'framer-motion'

export default function DynamicFormPage() {
  const pathname = usePathname()
  const formType = pathname.split('/').pop() // Extracting the form type from the path

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="mt-20 text-4xl font-semibold dark:text-white">
        Contact Us via {formType}!
      </h1>

      <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact us through this form or email us directly.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async event => {
          event.preventDefault()
          const formData = new FormData(event.currentTarget) // Use currentTarget for form data
          const { data, error } = await sendEmail(formData, formType)

          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully!')
          console.log(data)
        }}
      >
        <input
          id="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Enter your email here"
        />
        <textarea
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white"
          name="message"
          placeholder="Write your message here"
          required
          maxLength={5000}
        />
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
