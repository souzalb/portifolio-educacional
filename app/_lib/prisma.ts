//garante que apenas uma instância do prisma client vai ser executada

import { PrismaClient } from "@prisma/client"

declare global {
  /* eslint no-var: off */
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
