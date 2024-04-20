import SettingsForm from "@/components/SettingsForm";
import db from "@/db";
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

export default async function page() {
  const session = await auth()
  return (
    <div className="bg-background text-black">
        <SettingsForm username={session?.user?.name}/>
    </div>
  )
}
