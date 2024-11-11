import { StarIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Tech } from "@prisma/client"
import Users from "./users"
import Link from "next/link"

interface TechItemProps {
  tech: Tech
}

const TechItem = ({ tech }: TechItemProps) => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const areaTech = tech.area as any

  return (
    <>
      <Card className="h-[440px] max-w-[300px] cursor-pointer rounded-2xl">
        <CardContent className="p-0 px-1 pt-1">
          {/* Image */}

          <Link href={`/techs/${tech.id}`}>
            <div className="relative h-[159px] w-full">
              <Image
                alt={tech.name}
                fill
                className="rounded-2xl object-cover"
                src={tech.imageUrl}
              />
              {/* estrutura de img gdrive: https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID */}
            </div>
          </Link>

          {/* Text */}
          <div className="flex h-[280px] flex-col justify-between px-2 py-3">
            <Link
              href={`/techs/${tech.id}`}
              className="mb-2 flex h-full flex-col justify-between py-1"
            >
              <h2 className="truncate text-lg font-semibold">{tech.name}</h2>

              <div className="flex items-center gap-1">
                <StarIcon size={15} className="fill-primary text-primary" />
                <StarIcon size={15} className="fill-primary text-primary" />
                <StarIcon size={15} className="fill-primary text-primary" />
                <StarIcon size={15} className="fill-primary text-primary" />
                <StarIcon size={15} className="fill-primary text-primary" />
                <p className="ml-1 text-sm font-semibold text-primary">
                  {tech.rating}
                </p>
              </div>

              <p className="truncate text-sm text-gray-400">
                {tech.description}
              </p>

              <div>
                <h3 className="mb-1 text-xs font-bold uppercase text-gray-400">
                  Tipo de Recurso
                </h3>
                <Badge className="w-fit rounded-xl" variant="default">
                  <p className="text-xs font-semibold">{tech.type}</p>
                </Badge>
              </div>

              <div>
                <h3 className="mb-1 text-xs font-bold uppercase text-gray-400">
                  Área Tecnológica
                </h3>
                <Badge
                  className="w-fit rounded-xl"
                  variant={
                    areaTech == "Tecnologia da Informação"
                      ? "TI"
                      : areaTech == "Segurança do Trabalho"
                        ? "SST"
                        : areaTech == "Aulas Online"
                          ? "Online"
                          : areaTech
                  }
                >
                  <p className="truncate text-xs font-semibold">{tech.area}</p>
                </Badge>
              </div>
            </Link>
            <div>
              <h3 className="mb-1 text-xs font-bold uppercase text-gray-400">
                Usuários
              </h3>
              <div className="flex gap-2 truncate">
                <Users tech={tech} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default TechItem
