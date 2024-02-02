import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import NavItens from './NavItens'

function MobileNav() {
  return (
    <nav className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={26} className="text-heading-light h-full" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-7">
          <Image
            src="/assets/logo-games.svg"
            alt="Logo do site"
            width={128}
            height={38}
          />
          <NavItens />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
