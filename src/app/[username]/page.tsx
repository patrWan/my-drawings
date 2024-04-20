import DrawingGrid from "@/components/DrawingGrid";
import ProfileInfo from "@/components/ProfileInfo";
//import db from "@/db";
//import { User } from "@/types";



export default async function UserPage() {
  //const profile  = await db.profile.findUnique({where:{id : 15}});

  return (
    <main className="p-4 flex flex-col space-y-10 bg-background">
      <ProfileInfo/>
      <DrawingGrid/>
    </main>
  );
}
