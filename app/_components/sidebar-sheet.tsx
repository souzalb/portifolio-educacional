"use client"

import { FilePlus2Icon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"
import { quickSearchOption } from "../_constants/search"
import { signOut, useSession } from "next-auth/react"
import CreateTechDialog from "./create-tech-dialog"

const SidebarSheet = () => {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[70%] rounded-xl">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-2">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        {data?.user?.email == "lincolncloud23@gmail.com" ? (
          <Dialog>
            <DialogTrigger asChild className="justify-start">
              <Button variant="ghost">
                <FilePlus2Icon />
                Cadastrar Tecnologia
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[95%] w-[90%] rounded-xl lg:h-[80%]">
              <CreateTechDialog />
            </DialogContent>
          </Dialog>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOption.map((option) => (
          <SheetClose asChild key={option.title}>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/techs?area=${option.title}`}>
                <Image
                  alt={option.title}
                  height={18}
                  width={18}
                  src={option.imageUrl}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
