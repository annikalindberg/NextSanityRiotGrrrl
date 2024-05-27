import React from 'react'
import OmOss from '../components/om-oss/OmOss'
import WhatToExpect from '../components/om-oss/WhatToExpect'
import BlogCards from '../components/BlogCards'

export default function OmOssPage() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-100 to-cyan-100 dark:bg-gradient-to-t dark:from-fuchsia-950 dark:to-cyan-950 pt-10 pb-10">
      <h1 className="mt-5 ml-6">Om oss</h1>
      <OmOss />
      <div className="bg-gradient-to-t from-indigo-100 via-amber-100 to-teal-200 dark:bg-gradient-to-t dark:from-teal-800 dark:via-violet-950 dark:to-indigo-950 ">
        <WhatToExpect />
      </div>
      <h2 className="text-3xl font-bold text-center">Senaste från vår blogg</h2>
      <BlogCards />
    </div>
  )
}
