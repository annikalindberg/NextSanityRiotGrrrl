import React from 'react'
import OmOss from '../components/om-oss/OmOss'
import WhatToExpect from '../components/om-oss/WhatToExpect'

export default function OmOssPage() {
  return (
    <>
      <h1 className="mt-5 ml-6">Om oss</h1>
      <div className="max-w-3xl mx-auto px-4 pt-16">
        <OmOss />
      </div>
      <div className="bg-gradient-to-t from-indigo-100 via-amber-100 to-teal-200 dark:bg-gradient-to-t dark:from-teal-800 dark:via-violet-950 dark:to-indigo-950 ">
        <WhatToExpect />
      </div>
      {/*       <section className="max-w-3xl mx-auto px-4 pt-16"></section>
       */}{' '}
    </>
  )
}
