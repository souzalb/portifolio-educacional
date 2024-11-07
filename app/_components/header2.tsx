"use client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import SidebarSheet from "./sidebar-sheet"

const Header2 = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Button size="icon" variant="secondary">
            <ChevronLeftIcon />
          </Button>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header2
