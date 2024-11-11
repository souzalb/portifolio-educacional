"use client"

import { DialogHeader, DialogTitle } from "./ui/dialog"
import { InputForm } from "./form-tech"
import { ScrollArea } from "./ui/scroll-area"

const CreateTechDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Cadastro de Nova Tecnologia</DialogTitle>
      </DialogHeader>

      <ScrollArea className="h-full w-full rounded-md">
        <InputForm />
      </ScrollArea>
    </>
  )
}

export default CreateTechDialog
