import LoginForm from "@/components/LoginForm";
import { auth } from "@/auth";

import { DM_Sans } from "next/font/google";

const font = DM_Sans({ subsets: ["latin"] });


export const runtime = 'edge';

export default async function Home() {
  const session = await auth();

  if (!session?.user)

  return (
    <main className="grid">
      <div className="h-96 m-auto w-96 grid gap-1 p-4 border-2 text-black bg-white border-black rounded-3xl">
        <p className={`${font.className} text-2xl font-bold text-center`}>
          My @Drawings
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
