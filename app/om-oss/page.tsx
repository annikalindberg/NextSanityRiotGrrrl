import React from 'react'
import { OmOssAccordion } from '../components/OmOssAccordion'
import OmOss from '../components/om-oss/OmOss'

export default function OmOssPage() {
  return (
    <>
      <h1 className="mt-5 ml-6">Om oss</h1>
      <div className="bg-gradient-to-t from-teal-200 via-amber-100 to-indigo-100 dark:bg-gradient-to-t dark:from-teal-800 dark:via-violet-950 dark:to-indigo-950">
        <section className="max-w-3xl mx-auto px-4 pt-16">
          <OmOss />
          <OmOssAccordion />
        </section>
      </div>
    </>
  )
}
