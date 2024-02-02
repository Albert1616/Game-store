import Image from 'next/image'
import { Button } from '../ui/button'

interface Props {
  src: string
  title: string
  description: string
}

function ContainerGame({ src, title, description }: Props) {
  return (
    <section className="grid grid-cols-1 bg-gray-light lg:grid-cols-3">
      <div className="col-span-2 w-full">
        <Image
          src={src}
          alt="Capa de um jogo"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between py-4 px-6 gap-6 text-heading-light">
        <div>
          <h2 className="font-bold text-4xl md:text-2xl">{title}</h2>
          <p className="text-md mt-4 md:text-lg">{description}</p>
        </div>
        <Button className="w-2/4 bg-heading-primary hover:bg-heading-primary-light ">
          Saiba mais
        </Button>
      </div>
    </section>
  )
}

export default ContainerGame
