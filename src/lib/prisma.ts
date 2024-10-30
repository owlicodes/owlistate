import { PrismaClient } from "@prisma/client";

import { env } from "@/env/server";

declare global {
  // eslint-disable-next-line no-var
  var __database__: PrismaClient;
}

let prisma: PrismaClient;

if (env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__database__) {
    global.__database__ = new PrismaClient();
  }
  prisma = global.__database__;
}

export default prisma;
