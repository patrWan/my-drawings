import db from "@/db";

export async function GET(request: Request) {
  const users = await db.profile.findMany();
  const result = JSON.stringify(users);

  return new Response(result);
}
