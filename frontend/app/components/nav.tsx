'use client'
import { links } from '../utils/navlinks'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between bg-gray-900 text-white p-4">
      {/* logo */}
      <Link href="/">
        <h3 className="text-xl font-bold">nextStrapi</h3>
      </Link>

      {/* nav links */}
      <ul className="flex gap-4">
        {links.map(link => {
          const isActive = pathname.endsWith(`/${link.href}`)
          {
            console.log(pathname)
          }
          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? 'text-blue-400' : 'text-white'}
            >
              {link.name}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
