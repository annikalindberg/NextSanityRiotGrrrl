import React from 'react'
import CookiePolicy from '../components/datainsamlig/CookiePolicy'

export default function CookiePolicyPage() {
  return (
    <div className="bg-orange-100 dark:bg-teal-950 pt-10 pb-10">
      <section className="max-w-3xl mx-auto px-4 ">
        {' '}
        <CookiePolicy />
      </section>
    </div>
  )
}