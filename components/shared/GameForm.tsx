'use client'

import { gameFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface props {
  type: 'create' | 'update'
  userId: string
}

export default function GameForm({ type, userId }: props) {
  const form = useForm<z.infer<typeof gameFormSchema>>({
    resolver: zodResolver(gameFormSchema),
    defaultValues: {
      title: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof gameFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-5"
        >
          <div className="flex flex-col gap-5 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-heading-light">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="title of the game"
                      {...field}
                      className="bg-gray-light text-heading-light border-transparent rounded-md outline-none placeholder:text-heading-light focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
