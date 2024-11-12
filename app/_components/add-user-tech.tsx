"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import { Form, FormField, FormItem, FormLabel } from "./ui/form"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"
import { CircleCheckBigIcon } from "lucide-react"
import { DialogClose } from "./ui/dialog"
import { createUserOnTech } from "./_actions/create-user-on-tech"
import { AddSilgleUser } from "./add-single-user"

interface GetNameTechProps {
  name: string
}

const FormSchema = z.object({
  users: z.string({
    required_error: "Por favor, selecione um usuário",
  }),
})

export function UserAdd({ name }: GetNameTechProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    {
      handleCreateUser(data)
    }
  }

  const handleDialogOpenChange = (isOpen: boolean) => {
    setIsDialogOpen(isOpen)
  }

  const handleCreateUser = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)

    try {
      await createUserOnTech({
        userName: data.users,
        nameTech: name,
      })

      setIsDialogOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          className="w-full space-y-4 p-1"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="users"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-2">
                  <FormLabel className="text-xs uppercase text-gray-400">
                    Usuários
                  </FormLabel>

                  <AddSilgleUser field={field} />
                </div>
              </FormItem>
            )}
          />

          <Button
            className="w-full bg-green-700 hover:bg-green-800/80"
            type="submit"
          >
            Adicionar
          </Button>
        </form>
      </Form>

      <AlertDialog onOpenChange={handleDialogOpenChange} open={isDialogOpen}>
        <AlertDialogContent className="h-[250px] w-[250px] rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Usuário adicionado com sucesso!
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex items-center justify-center">
            <CircleCheckBigIcon size={70} color="green" />
          </div>

          <AlertDialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Concluir
              </Button>
            </DialogClose>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
