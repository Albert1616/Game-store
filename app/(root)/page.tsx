import ContainerGame from '@/components/shared/ContainerGame'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { imagesCarousel } from '@/utils'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-[5em] py-6 ">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {imagesCarousel.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <ContainerGame
                    src={item.src}
                    title={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  )
}
