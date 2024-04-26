'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { auditRequest } from '@/actions/auditRequest'
import { motion } from 'framer-motion'

export default function DynamicForm({ params }: { params: { form: string } }) {
  const formTitle = decodeURIComponent(params.form).replace(/-/g, ' ')

  const auditType = decodeURIComponent(params.form).replace(/-/g, ' ')
  return (
    <main className="max-w-3xl mx-auto px-4 ">
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
          Du har valt att boka en {formTitle}!
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
          onSubmit={async event => {
            event.preventDefault() // Don't forget to prevent the default form submission!
            const formData = new FormData(event.currentTarget)
            formData.append('auditType', formTitle) // Append the audit type to the formData

            const { data, error } = await auditRequest(formData)

            if (error) {
              toast.error(error)
              return
            }

            toast.success('Email sent successfully!')
            console.log(data)
          }}
        >
          {/* Hidden input to include the audit type */}

          <input type="hidden" name="auditType" value={auditType} />
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
          <label htmlFor="addUrl" className="dark:text-white mt-3 text-left">
            Your URL:
          </label>
          <input
            id="addUrl"
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="addUrl"
            type="url"
            required
            maxLength={500}
            placeholder="Enter your URL here"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white font-semibold py-3 rounded-lg mt-5"
          >
            Send Request
          </button>
        </form>
      </motion.section>
    </main>
  )
}
