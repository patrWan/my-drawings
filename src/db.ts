import { getRequestContext } from "@cloudflare/next-on-pages";

//export const runtime = 'edge'
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export interface Env {
  DB: D1Database;
}

//console.log(getRequestContext().env.DB)
const adapter = new PrismaD1((getRequestContext().env as Env).DB);
const prisma = new PrismaClient({ adapter });

//const users = await prisma.profile.findMany();
//const result = JSON.stringify(users);

export default prisma;
