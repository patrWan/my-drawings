export const runtime = "edge";

import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { D1Database } from "@cloudflare/workers-types";
import { getRequestContext } from '@cloudflare/next-on-pages'

export interface Env {
  DB: D1Database;
}
  //const adapter = new PrismaD1(env.DB);
  //const prisma = new PrismaClient({ adapter });

  //const users = await prisma.profile.findMany();

  //console.log(users)


export default function TestPrismaButton() {
  return (
    <div>
      <button className="p-2 border-2 m-2">rEGISTRAR Algo</button>
    </div>
  );
}
