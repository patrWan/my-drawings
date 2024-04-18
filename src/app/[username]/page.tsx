import DrawingGrid from "@/components/DrawingGrid";
import ProfileInfo from "@/components/ProfileInfo";

export const runtime = 'edge';

export default async function UserPage() {
  

  return (
    <main className="p-4 flex flex-col space-y-10 bg-white">
      <ProfileInfo/>
      <DrawingGrid/>
    </main>
  );
}
