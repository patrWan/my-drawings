import SettingsForm from "@/components/SettingsForm";
import db from "@/db";

export default async function page() {
  return (
    <div className="bg-background text-black">
        <SettingsForm/>
    </div>
  )
}
