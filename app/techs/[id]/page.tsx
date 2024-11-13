import Header2 from "@/app/_components/header2"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import TechButtons from "@/app/_components/tech-button"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"

import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import Users from "@/app/_components/users"
import { db } from "@/app/_lib/prisma"
import Home from "@/app/page"
import {
  ChevronLeftIcon,
  CircleCheckBigIcon,
  LightbulbIcon,
  Link2Icon,
  MenuIcon,
  StarIcon,
  TextIcon,
  UserRoundIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TechPageProps {
  params: {
    id: string
  }
}

const TechPage = async ({ params }: TechPageProps) => {
  const { id } = await params
  const tech = await db.tech.findUnique({
    where: {
      id: id,
    },

    //JOIN entre a tabela barbearia e serviços
    include: {
      users: true,
    },
  })

  if (!tech) {
    return (
      <>
        <Home />
      </>
    )
  }

  return (
    <div>
      <div className="hidden lg:block">
        <Header2 />
      </div>

      <div className="lg:p-10 lg:px-20">
        {/* Image */}
        <div className="relative h-[250px] w-full lg:hidden">
          <Image
            src={tech?.imageUrl}
            alt={tech?.name}
            fill
            className="object-cover"
          />

          <Button
            size="icon"
            variant="secondary"
            className="absolute left-4 top-4"
            asChild
          >
            <Link href="/">
              <ChevronLeftIcon />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-4 top-4"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>

        {/*Top Head  */}
        <div className="border-b border-solid p-5 lg:flex lg:items-center lg:gap-6">
          <div className="hidden lg:inline">
            <Image
              src={tech?.imageUrl}
              alt={tech?.name}
              width={100}
              height={100}
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{tech?.name}</h1>
              <TechButtons id={id} name={tech.name} />
            </div>

            <div className="mb-2 mt-3 flex items-center gap-2">
              <LightbulbIcon className="text-primary" size={18} />
              <p className="text-sm">{tech?.area}</p>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <StarIcon className="text-primary" size={18} />
              <p className="text-sm">{tech?.rating} (434 avaliações)</p>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="space-y-2 border-b border-solid p-5">
          <h2 className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400">
            <TextIcon className="text-primary" size={18} />
            Descrição
          </h2>
          <p className="text-justify text-sm">{tech?.description}</p>
        </div>

        {/* Resource */}
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400">
            <TextIcon className="text-primary" size={18} />
            Tipo de Recurso
          </h2>
          <Badge className="w-fit rounded-xl" variant="default">
            <p className="text-xs font-semibold">{tech.type}</p>
          </Badge>
        </div>

        {/* Area */}
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400">
            <CircleCheckBigIcon className="text-primary" size={18} />
            Acesso
          </h2>
          <Badge className="w-fit rounded-xl" variant="default">
            <p className="text-xs font-semibold">{tech.access}</p>
          </Badge>
        </div>

        {/* Link */}
        <div className="space-y-3 border-b border-solid p-5">
          <h2 className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400">
            <Link2Icon className="text-primary" size={18} />
            Link de Acesso
          </h2>
          <Link href={tech.link} target="blank">
            <p className="mt-3 text-xs font-semibold">{tech.link}</p>
          </Link>
        </div>

        {/* Users */}
        <div className="space-y-3 p-5">
          <h2 className="flex items-center gap-1 text-xs font-bold uppercase text-gray-400">
            <UserRoundIcon className="text-primary" size={18} />
            Usuários
          </h2>
          <div className="flex gap-2">
            <Users tech={tech} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechPage
