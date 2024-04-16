import DrawingGrid from "@/components/DrawingGrid";
import ProfileInfo from "@/components/ProfileInfo";

export default async function UserPage() {
  

  return (
    <main className="p-4 grid gap-4">
      <ProfileInfo/>
      <DrawingGrid/>
    </main>
  );
}
