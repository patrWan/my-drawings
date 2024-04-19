import db from "@/db";

export async function GET(request: Request) {
  //const users = await db.profile.deleteMany();

  //const result = JSON.stringify(users);
  
  //return new Response(result);

}

export async function POST(request: Request) {
  const user = await db.user.create({
    data: {
      username: "nanitastica",
      password: "xg57hhjpxn",
      profile: {
        create: {
          picture: "",
          description: "",
          instagram: "",
          facebook: "",
          twitter: "",
          twitch: "",
        },
      },
    },
  });
  const result = JSON.stringify(user);
  return new Response(result);
}
