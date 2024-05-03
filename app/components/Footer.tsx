import React from 'react'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="mb-10 mt-10 px-4 text-center text-gray-500 ">
      <SocialLinks />
      <small className="mb-2 block text-xs">
        &copy; 2024 Annika Lindberg. All rights reserved.
      </small>
    </footer>
  )
}
