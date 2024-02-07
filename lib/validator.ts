import * as z from 'zod'

export const gameFormSchema = z.object({
  title: z.string().min(3, {
    message: 'O título precisa ter mais de 3 caracteres',
  }),
  description: z
    .string()
    .min(10, { message: 'A descrição precisa ter no mínino 10 caracteres' })
    .max(100, { message: 'Tamanho máximo atingido' }),
  price: z.string(),
  location: z
    .string()
    .min(3, { message: 'A localização precisa ter no mínimo 3 caracteres' }),
  categoryId: z.string(),
  imageUrl: z.string(),
  url: z.string().url(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  isFree: z.boolean(),
})
