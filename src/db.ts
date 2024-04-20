import { getRequestContext } from "@cloudflare/next-on-pages";

//export const runtime = 'edge'
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

interface Env {
  DB: D1Database;
}
const adapter = new PrismaD1((getRequestContext().env as Env).DB);
const prisma = new PrismaClient({ adapter });

export default prisma;
