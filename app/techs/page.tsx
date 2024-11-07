import Header from "../_components/header"
import Search from "../_components/search"
import TechItem from "../_components/tech-item"
import { db } from "../_lib/prisma"

interface TechPageProps {
  searchParams: {
    name?: string
    area?: string
  }
}

const TechsPage = async ({ searchParams }: TechPageProps) => {
  const { name } = await searchParams
  const { area } = await searchParams
  const techs = await db.tech.findMany({
    where: {
      OR: [
        name
          ? {
              name: {
                contains: name,
                mode: "insensitive",
              },
            }
          : {},

        area
          ? {
              area: {
                contains: area,
                mode: "insensitive",
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="px-5">
        <div className="my-6">
          <Search />
        </div>
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
          Resultatos para &quot;{name || area}
          &quot;
        </h2>
        <div className="mb-5 grid min-h-[450px] grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-8">
          {techs.map((techs) => (
            <TechItem key={techs.id} tech={techs} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechsPage
