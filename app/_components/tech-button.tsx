"use client"

import {
  CircleAlertIcon,
  CircleCheckBigIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { deleteTech } from "./_actions/delete-tech"
import { useState } from "react"
import { useSession } from "next-auth/react"
import React from "react"
import { UserAdd } from "./add-user-tech"

interface GetTechId {
  id: string
  name: string
}

const TechButtons = ({ id, name }: GetTechId) => {
  const { data } = useSession()

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDialogConfirmOpen, setIsDialogConfirmOpen] = useState(false)
  const [isDialogAddUserOpen, setIsDialogAddUserOpen] = useState(false)

  const handleDeleteTech = async () => {
    try {
      deleteTech(id)
      setIsDialogOpen(true)
    } catch (error) {
      console.log("Erro ao excluir tecnologia", error)
    }
  }

  const handleDialogOpenChange = (isOpen: boolean) => {
    setIsDialogOpen(isOpen)
  }

  const handleDialogConfirmOpenChange = (isOpen: boolean) => {
    setIsDialogConfirmOpen(isOpen)
  }

  const handleDialogAddUserOpenChange = (isOpen: boolean) => {
    setIsDialogAddUserOpen(isOpen)
  }

  return (
    <>
      {data?.user?.email == "lincolncloud23@gmail.com" ? (
        <>
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md bg-orange-500">
            <PencilIcon className="text-white" size={20} />
          </div>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md bg-red-500"
            onClick={() => setIsDialogConfirmOpen(true)}
          >
            <Trash2Icon className="text-white" size={20} />
          </div>

          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md bg-blue-500"
            onClick={() => setIsDialogAddUserOpen(true)}
          >
            <UserPlusIcon className="text-white" size={20} />
          </div>
        </>
      ) : (
        ""
      )}

      <Dialog
        onOpenChange={handleDialogAddUserOpenChange}
        open={isDialogAddUserOpen}
      >
        <DialogContent className="w-[70%] rounded-xl lg:w-[25%]">
          <DialogHeader>
            <DialogTitle>Adicionar usuário</DialogTitle>
          </DialogHeader>
          <UserAdd name={name} />
        </DialogContent>
      </Dialog>

      <AlertDialog onOpenChange={handleDialogOpenChange} open={isDialogOpen}>
        <AlertDialogContent className="h-[180px] w-[250px] rounded-3xl">
          <AlertDialogHeader className="">
            <AlertDialogTitle className="text-center">
              Tecnologia excluida com sucesso!
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex h-full items-center justify-center">
            <CircleCheckBigIcon size={70} color="green" />
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        onOpenChange={handleDialogConfirmOpenChange}
        open={isDialogConfirmOpen}
      >
        <AlertDialogContent className="h-[250px] w-[250px] rounded-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Você realmente quer excluir?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex items-center justify-center">
            <CircleAlertIcon size={70} color="orange" />
          </div>

          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button className="w-full" onClick={handleDeleteTech}>
                Excluir
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default TechButtons
