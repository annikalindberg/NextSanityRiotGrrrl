import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tjanster from '../components/om-oss/tjanster'
import TjansterCards from '../components/homepagebanners/TjansterCards'

export default function TjansterPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 ">
      <h1 className="mt-5 ml-6">Tjänster</h1>
      <Tjanster />
      <TjansterCards />
    </section>
  )
}
