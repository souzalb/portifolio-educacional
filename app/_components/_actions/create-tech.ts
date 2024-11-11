"use server"

import { getServerSession } from "next-auth"

import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"

interface CreateTechParams {
  name: string
  rating: string
  description: string
  imageUrl: string
  access: string
  link: string
  type: string
  area: string
}

export const createTech = async (params: CreateTechParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }

  await db.tech.create({
    data: { ...params },
  })
}
