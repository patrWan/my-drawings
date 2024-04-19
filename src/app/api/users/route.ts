import db from "@/db";

export async function GET(request: Request) {
  const user = await db.user.findUnique({where : {username : "patr.wan"}}) as any
  const profile = await db.profile.findFirst({include : {user : true}, where : {user : {id : user?.id}}}) as any;

  const result = JSON.stringify({
    user,
    profile
  });

  return new Response(
    result
  );

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
