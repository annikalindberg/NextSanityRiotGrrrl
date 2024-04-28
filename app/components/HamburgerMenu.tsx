'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './HamburgerMenu.module.css'
import { LuAlignJustify } from 'react-icons/lu'

export const HamburgerMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null) // Correct ref type for the div that contains the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return
      const focusableSelectors =
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), .hamburger'
      const focusableElements = Array.from(
        menuRef.current.querySelectorAll(focusableSelectors)
      ) as HTMLElement[]

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.key === 'Escape') {
        setIsOpen(false)
      } else if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus()
          event.preventDefault()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus()
          event.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown as any)

    return () => {
      document.removeEventListener('keydown', handleKeyDown as any)
    }
  }, [isOpen])

  return (
    <nav>
      <button
        type="button"
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="menu"
        aria-label="Toggle menu"
        title="Toggle Menu"
      >
        <LuAlignJustify aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          className={isOpen ? styles.menuOpen : styles.menuClosed}
          id="menu"
          ref={menuRef} // Correct element for the ref
        >
          <ul>
            <li>
              <Link href="/" passHref className={styles.menuLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref className={styles.menuLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" passHref className={styles.menuLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" passHref className={styles.menuLink}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default HamburgerMenu
