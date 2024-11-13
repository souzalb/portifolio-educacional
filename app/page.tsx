import { format } from "date-fns"
import Header from "./_components/header"
import { ptBR } from "date-fns/locale/pt-BR"
import { quickSearchOption } from "./_constants/search"
import { Button } from "./_components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { db } from "./_lib/prisma"

import TechItem from "./_components/tech-item"
import Search from "./_components/search"
import { Card, CardContent, CardHeader } from "./_components/ui/card"
import {
  FilePlus2Icon,
  LightbulbIcon,
  ListCheckIcon,
  ScreenShareIcon,
} from "lucide-react"

const Home = async () => {
  const techs = await db.tech.findMany({
    orderBy: {
      name: "asc",
    },
  })

  return (
    <div>
      {/* header*/}
      <Header />

      <div className="p-5 lg:p-10">
        <div className="lg:flex lg:w-full lg:items-center lg:gap-4">
          {/* Text */}
          <div className="lg:w-[20%]">
            <h2 className="text-xl">
              Olá, <b>Seja Bem-vindo!</b>
            </h2>
            <p>
              <span className="capitalize">
                {format(new Date(), "EEEE, dd ", { locale: ptBR })}
              </span>
              de
              <span>{format(new Date(), " MMMM", { locale: ptBR })}</span>
            </p>
          </div>

          {/* Search */}
          <div className="mt-6 lg:mt-0 lg:w-[80%]">
            <Search />
          </div>
        </div>

        {/* Quick Search */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              asChild
              key={option.title}
            >
              <Link href={`/techs?area=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>
        {/* Banner */}
        <div className="relative mt-6 h-[200px] w-full lg:hidden">
          <Image
            alt="Portfólio de tecnologias educacionais, um espaço para você, docente e trabalhador senai!"
            src="/banner.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="relative mt-6 hidden h-[300px] w-full lg:block">
          <Image
            alt="Portfólio de tecnologias educacionais, um espaço para você, docente e trabalhador senai!"
            src="/banner2.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Quick links */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Links Rápidos
        </h2>
        <Card>
          <CardContent>
            <div className="grid grid-cols-2 lg:flex lg:justify-between">
              <Link
                target="blank"
                href="https://port-tec-edu-senai.my.canva.site"
              >
                <div className="mt-6 flex items-center gap-2">
                  <div className="rounded-xl bg-gray-700 p-3">
                    <ScreenShareIcon />
                  </div>
                  <p className="text-sm font-semibold">Portfólio DN</p>
                </div>
              </Link>

              <Link
                target="blank"
                href="https://sesisenaisp.sharepoint.com/sites/PORTALGIS/Lists/Aquisio%20de%20Softwares/AllItems.aspx?OR=Teams-HL&CT=1720708200630&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA2MTMxODQwOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D"
              >
                <div className="mt-6 flex items-center gap-2">
                  <div className="rounded-xl bg-gray-700 p-3">
                    <ListCheckIcon />
                  </div>
                  <p className="text-sm font-semibold">Lista de Aquisição</p>
                </div>
              </Link>

              <Link
                target="blank"
                href="https://sesisenaisp.sharepoint.com/sites/PORTALGIS/SitePages/Requisição-de-Licenças.aspx?OR=Teams-HL&CT=1721059880623&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNDA2MTMxODQwOCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D"
              >
                <div className="mt-6 flex items-center gap-2">
                  <div className="rounded-xl bg-gray-700 p-3">
                    <FilePlus2Icon />
                  </div>
                  <p className="text-sm font-semibold">
                    Requisição de Licenças
                  </p>
                </div>
              </Link>

              <Link target="blank" href="https://forms.office.com/r/9cTTJrjcG3">
                <div className="mt-6 flex items-center gap-2">
                  <div className="rounded-xl bg-gray-700 p-3">
                    <LightbulbIcon />
                  </div>
                  <p className="text-sm font-semibold">Sugestão de novo item</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Techs */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Tecnologias
        </h2>
        <div className="grid min-h-[450px] grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-8">
          {techs.map((techs) => (
            <TechItem key={techs.id} tech={techs} />
          ))}
        </div>

        <Card className="mt-5 bg-gradient-to-b from-blue-900 to-blue-950">
          <CardHeader>
            <h2>Equipe Responsável</h2>
          </CardHeader>
          <CardContent>
            <div className="truncate lg:flex lg:items-center lg:gap-8">
              <div className="mb-4 flex gap-2 lg:mb-0">
                <Image
                  className="rounded-full object-cover"
                  src="https://drive.google.com/uc?export=view&id=1H5UWk7HucoyEm7nos-24PYnVXWm8Pm5K"
                  width={35}
                  height={35}
                  alt="Lincoln Souza"
                />

                <div>
                  <p className="text-sm">Lincoln Bezerra de Souza</p>
                  <p className="max-w-[100%] truncate text-xs">
                    Instrutor de Formação Profissional II (TI)
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-2 lg:mb-0">
                <Image
                  className="rounded-full object-cover"
                  src="https://drive.google.com/uc?export=view&id=1MM6WNo8Gz3Q5AWm2ZBAhibiz4jL5gjZ_"
                  width={35}
                  height={35}
                  alt="Ronaldo Esperandio"
                />
                <div>
                  <p className="text-sm">Ronaldo Esperandio</p>
                  <p className="max-w-[100%] truncate text-xs">
                    Orientador de Prática Profissional
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Image
                  className="rounded-full object-cover"
                  src="https://drive.google.com/uc?export=view&id=1k0srAX4EIqSi6pLLCCUmNK1WZUxl_fYW"
                  width={35}
                  height={35}
                  alt="Leonardo de Paula"
                />
                <div className="">
                  <p className="text-sm">Leonardo de Paula</p>
                  <p className="max-w-[75%] truncate text-xs">
                    Coordenador de Atividades Técnicas e Pedagógicas
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
