import React from 'react'
import PrivacyPolicy from '../components/datainsamlig/PrivacyPolicy'

export default function Integritetspolicy() {
  return (
    <div className="bg-orange-100 dark:bg-teal-950 pt-10 pb-10">
      <section className="max-w-3xl mx-auto px-4 ">
        {' '}
        <PrivacyPolicy />
      </section>
    </div>
  )
}
