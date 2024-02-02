'use server'
import { conectToDataBase } from '../database'
import User from '../database/models/user.model'

type PropsUser = {
  clerkId: string
  email_addresses: string
  username: string
  first_name: string
  last_name: string
  photo: string
}

export const createUser = async (user: PropsUser) => {
  try {
    await conectToDataBase()
    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {}
}
