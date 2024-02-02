import Image from 'next/image'
import { Copyright } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center gap-4 p-4 sm:flex-row">
      <Link href="/">
        <Image
          src="/assets/logo-games.svg"
          alt="Logo da página"
          width={128}
          height={36}
        />
      </Link>
      <p className="flex items-center gap-1">
        <Copyright size={12} /> Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
