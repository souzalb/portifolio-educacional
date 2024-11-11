"use server"

import { db } from "@/app/_lib/prisma"
import { revalidatePath } from "next/cache"

export const deleteTech = async (techId: string) => {
  await db.usersOnTechs.deleteMany({
    where: {
      techId: techId,
    },
  })
  await db.tech.delete({
    where: {
      id: techId,
    },
  })

  revalidatePath("/techs")
  revalidatePath("/")
}
