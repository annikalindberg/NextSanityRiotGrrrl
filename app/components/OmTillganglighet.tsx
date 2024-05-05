'use client' // This file is client-side only

import FaqTillganglighet from './Tillganglighet'

export default function OmTillganglighet() {
  return (
    <div className="bg-sky-100 dark:bg-sky-950 pt-5 md:pt-10 lg:pt-20 min-h-screen">
      <section className=" max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {' '}
        <FaqTillganglighet />
      </section>
    </div>
  )
}
