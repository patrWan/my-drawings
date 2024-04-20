import SingupForm from "@/components/SingupForm";
import { DM_Sans } from "next/font/google";

export const font = DM_Sans({ subsets: ["latin"] });

export const runtime = 'edge';

export default async function page() {
  return (
    <div className="h-auto m-auto w-96 grid gap-1 p-4 border-2 text-black bg-white border-black rounded-3xl">
        <p className={`${font.className} text-2xl font-bold text-center`}>
          My @Drawings <span className="text-purple-600">Registro</span>
        </p>
        <SingupForm/>
    </div>
  )
}
