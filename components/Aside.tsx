import Link from 'next/link'

export default function SidebarNavigation() {
  return (
    <aside className="h-full w-48 bg-sky-950 text-white p-5 sticky top-0">
      <ul>
        <li>
          <Link href="#section1">Vad menas med digital tillgänglighet?</Link>
        </li>
        <li>
          <Link href="#section2">Varöfr är det viktigt?</Link>
        </li>
        <li>
          <Link href="#section3">ection 3</Link>
        </li>
      </ul>
    </aside>
  )
}
