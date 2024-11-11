"use server"

import { revalidatePath } from "next/cache"

import { getServerSession } from "next-auth"

import { authOptions } from "@/app/_lib/auth"
import { db } from "@/app/_lib/prisma"

interface CreateUserOnTechParams {
  userId: string
  nameTech: string
}

export const createUserOnTech = async (params: CreateUserOnTechParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }

  const tech = await db.tech.findMany({
    where: {
      name: params.nameTech,
    },
  })

  const extractTechId = tech.find((tech) => tech.name === params.nameTech)?.id

  const techId = extractTechId

  await db.usersOnTechs.create({
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    data: { userId: params.userId, techId: techId as any },
  })

  revalidatePath("/techs/[id]")
  revalidatePath("/techs")
}
