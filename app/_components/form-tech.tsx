"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { SelectAccess } from "./select-access"
import { SelectArea } from "./select-area"
import { ComboboxDemo } from "./selected-user-box"
import { SelectType } from "./select-type"
import { createTech } from "./_actions/create-tech"
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

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Este campo é obrigatório",
  }),
  rating: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  description: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  imageUrl: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  access: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  link: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  type: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  area: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
  users: z.string().min(1, {
    message: "Este campo é obrigatório",
  }),
})

export function InputForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      rating: "",
      description: "",
      imageUrl: "",
      access: "",
      link: "",
      type: "",
      area: "",
      users: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    handleCreateTech(data)
  }

  const handleDialogOpenChange = (isOpen: boolean) => {
    setIsDialogOpen(isOpen)
  }

  const handleCreateTech = async (data: z.infer<typeof FormSchema>) => {
    console.log(data)

    try {
      await createTech({
        name: data.name,
        rating: data.rating,
        description: data.description,
        imageUrl:
          "https://drive.google.com/uc?export=view&id=1gNDPB4YB_zvPqll3SE-ovd69ir560Zio",
        access: data.access,
        link: data.link,
        type: data.type,
        area: data.area,
      })

      await createUserOnTech({
        userId: data.users,
        nameTech: data.name,
      })

      setIsDialogOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Form {...form}>
        <form className="space-y-4 p-1" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-gray-400">
                  Nome da tecnologia
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="max-w-[50%]">
                  <FormLabel className="text-xs uppercase text-gray-400">
                    Avaliação
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite uma nota de 0 a 5"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="max-w-[50%]">
                  <FormLabel className="text-xs uppercase text-gray-400">
                    Imagem
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      className="cursor-pointer"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-gray-400">
                  Descrição
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escreva uma breve descrição sobre a tecnologia"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="access"
              render={({ field }) => (
                <FormItem className="max-w-[50%]">
                  <FormLabel className="text-xs uppercase text-gray-400">
                    Acesso
                  </FormLabel>
                  <FormControl>
                    <SelectAccess field={field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="max-w-[50%]">
                  <FormLabel className="text-xs uppercase text-gray-400">
                    Tipo
                  </FormLabel>
                  <FormControl>
                    <SelectType field={field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-gray-400">
                  Link de acesso{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    type="link"
                    placeholder="https://link_da_tecnologia"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex w-full items-center justify-between">
            <FormField
              control={form.control}
              name="users"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="text-xs uppercase text-gray-400">
                      Usuários
                    </FormLabel>
                    <FormControl>
                      <ComboboxDemo field={field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col gap-2">
                    <FormLabel className="text-xs uppercase text-gray-400">
                      Área
                    </FormLabel>
                    <FormControl>
                      <SelectArea field={field} />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button className="w-full bg-green-700" type="submit">
            Criar
          </Button>
        </form>
      </Form>

      <AlertDialog onOpenChange={handleDialogOpenChange} open={isDialogOpen}>
        <AlertDialogContent className="h-[250px] w-[250px] rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Tecnologia criada com sucesso!
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
