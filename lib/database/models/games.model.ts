import { Schema, model, models, Document } from 'mongoose'

export interface IGame extends Document {
  title: string
  description: string
  cover_art: string
  price: string | boolean
  location?: string
  createdAt: Date
  startDateTime: Date
  endDateTime: Date
  url?: string
  category: { _id: string; name: string }
  organization: { _id: string; fistName: string; lastName: string }
}

const GameSchema = new Schema({
  title: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  cover_art: { type: String, required: true },
  price: { type: String, default: false },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organization: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Game = models.game || model('Game', GameSchema)

export default Game
