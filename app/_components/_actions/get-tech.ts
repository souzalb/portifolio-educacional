"use server"

import { db } from "@/app/_lib/prisma"

interface GetTechProps {
  id: string
}

export const getTechs = async ({ id }: GetTechProps) => {
  return await db.tech.findMany({
    where: {
      id: id,
    },
  })
}
