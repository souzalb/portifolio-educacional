"use server"

import { db } from "@/app/_lib/prisma"

export const getUsers = async () => {
  return await db.user.findMany({
    orderBy: {
      name: "asc",
    },
  })
}
