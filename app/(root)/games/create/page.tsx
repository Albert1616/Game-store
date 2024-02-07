import GameForm from '@/components/shared/GameForm'
import { auth } from '@clerk/nextjs'

const { sessionClaims } = auth()

const userId = sessionClaims?.userId as string

export default function createGame() {
  return (
    <>
      <section className="p-4">
        <h3 className="font-bold text-heading-light text-3xl text-center md:text-left">
          Create Game
        </h3>
        <GameForm type="create" userId={userId} />
      </section>
    </>
  )
}
