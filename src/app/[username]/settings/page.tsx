import SettingsForm from "@/components/SettingsForm";

import { auth } from "@/auth"

export const runtime = 'edge';

export default async function page() {
  const session = await auth()
  return (
    <div className="bg-background text-black">
        <SettingsForm username={session?.user?.name}/>
    </div>
  )
}
