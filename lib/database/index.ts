import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const cached = (global as any).mongoose || { con: null, promise: null }

export const conectToDataBase = async () => {
  if (cached.conn) return cached.conn

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: 'game-store',
      bufferCommands: false,
    })

  cached.conn = await cached.promise

  return cached.conn
}