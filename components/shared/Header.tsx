import Image from 'next/image'
import Link from 'next/link'
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs'
import NavItens from './NavItens'
import MobileNav from './MobileNav'
import { User } from 'lucide-react'

function Header() {
  return (
    <header className="bg-primary-background flex justify-between items-center w-full p-4">
      <Link href="/" className="w-36">
        <Image
          src="/assets/logo.svg"
          alt="Logo da página - controle de video game com nome 
            Albert game store"
          width={128}
          height={36}
        />
      </Link>
      <nav className="hidden sm:block">
        <NavItens />
      </nav>
      <div className="flex justify-center items-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <User size={26} className="text-heading-primary" />
          </Link>
          <MobileNav />
        </SignedOut>
      </div>
    </header>
  )
}

export default Header
