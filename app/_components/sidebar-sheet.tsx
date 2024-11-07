"use client"

import { HomeIcon, LogInIcon, LogOutIcon, UserCircle2Icon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Avatar } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"
import { quickSearchOption } from "../_constants/search"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <div className="flex items-center gap-2">
          <Avatar>
            {/* <AvatarImage src="" /> */}
            <UserCircle2Icon size={40} />
          </Avatar>

          <div>
            {/* TODO: nome e email */}
            <p className="font-bold">Bem-vindo!</p>
            <p className="text-xs">Portifólio Tech</p>
          </div>
        </div>

        <>
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
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
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
          // onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
