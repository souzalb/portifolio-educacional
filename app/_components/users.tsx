import { Tech } from "@prisma/client"
import { db } from "../_lib/prisma"
import Image from "next/image"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { MailIcon } from "lucide-react"
import Link from "next/link"

interface TechItemProps {
  tech: Tech
}

const Users = async ({ tech }: TechItemProps) => {
  const getUsersTech = await db.usersOnTechs.findMany({
    where: {
      techId: tech.id,
    },
    include: {
      user: true,
    },
  })
  return (
    <>
      {getUsersTech.length > 1
        ? getUsersTech.map((userOnTechs) => (
            <>
              <HoverCard>
                <HoverCardTrigger
                  className="min-h-[30px] min-w-[30px] truncate"
                  key={userOnTechs.user.id}
                >
                  <Image
                    className="cursor-pointer rounded-full object-cover"
                    src={userOnTechs.user.imageUrl}
                    width={30}
                    height={30}
                    alt={userOnTechs.user.name}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-fit rounded-xl">
                  <div className="flex items-center justify-between gap-3">
                    <Image
                      className="rounded-full object-cover"
                      src={userOnTechs.user.imageUrl}
                      width={35}
                      height={35}
                      alt={userOnTechs.user.name}
                    />

                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {userOnTechs.user.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <MailIcon className="text-primary" size={18} />
                        <Link
                          href={`mailto:${userOnTechs.user.email}?subject=Tecnologia Educacional - ${tech.name}?body= Olá, entro em contato através do portifólio de tecnologias educacionais, e gostaria de conversar um pouco sobre essa tecnologia.`}
                        >
                          <div className="text-sm">
                            {userOnTechs.user.email}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </>
          ))
        : getUsersTech.map((userOnTechs) => (
            <>
              <HoverCard>
                <HoverCardTrigger asChild key={userOnTechs.user.id}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      className="rounded-full object-cover"
                      src={userOnTechs.user.imageUrl}
                      width={30}
                      height={30}
                      alt={userOnTechs.user.name}
                    />
                    <div className="text-sm text-gray-400">
                      {userOnTechs.user.name}
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <Image
                        className="rounded-full object-cover"
                        src={userOnTechs.user.imageUrl}
                        width={35}
                        height={35}
                        alt={userOnTechs.user.name}
                        key={userOnTechs.userId}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">
                        {userOnTechs.user.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <MailIcon className="text-primary" size={18} />
                        <div className="text-sm">{userOnTechs.user.email}</div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </>
          ))}
    </>
  )
}

export default Users
