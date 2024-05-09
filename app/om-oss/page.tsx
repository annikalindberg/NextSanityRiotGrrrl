import React from 'react'
import { OmOssAccordion } from '../components/OmOssAccordion'
import OmOss from '../components/OmOss'

export default function OmOssPage() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <h1>Om oss</h1>
      <OmOss />
      <OmOssAccordion />
    </section>
  )
}
