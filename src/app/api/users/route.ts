import db from "@/db";

export async function GET(request: Request) {
  const users = await db.profile.findMany();
  const result = JSON.stringify(users);

  return new Response(result);
}

export async function POST(request: Request) {
    const users = await db.user.create({
        data : {
            username : 'patr.wan',
            password : 'xg57hhjpxn',
            profileId : 1,
        }
    });
    const result = JSON.stringify(users);
  
    return new Response(result);
  }