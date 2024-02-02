'use client'

import { lstItensNav } from '@/utils/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItens() {
  const pathname = usePathname()

  return (
    <ul className="text-dark flex justify-center w-full gap-5 flex-col sm:flex-row sm:text-heading-light">
      {lstItensNav.map((item, index) => {
        return (
          <li
            key={index}
            className={`${pathname === item.route && 'text-heading-primary'} hover:text-heading-primary transition-all font-medium `}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItens
