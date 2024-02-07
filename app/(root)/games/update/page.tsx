import GameForm from '@/components/shared/GameForm'
import { auth } from '@clerk/nextjs'

const { sessionClaims } = auth()

const userId = sessionClaims?.userId as string

export default function updateGame() {
  return (
    <>
      <section className="text-center p-4 md:text-left">
        <h3 className="font-bold text-heading-light text-xl">Create Game</h3>
        <GameForm type="create" userId={userId} />
      </section>
    </>
  )
}
