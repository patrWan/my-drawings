import Link from "next/link";
import { auth, signOut } from "@/auth";

import {
  LogoutOutlined
} from "@ant-design/icons";

import { Alkatra } from 'next/font/google';

export const inter = Alkatra({ subsets: ['latin'] });

export default async function Header() {
  const session = await auth();

  //if (!session?.user) return null;

  return (
    <header className="flex items-center justify-between text-black border-b-2 bg-white px-10">
      <Link className={`${inter.className} text-2xl font-bold leading-[4rem] mx-8`} href="/">
        {session?.user?.name?.toUpperCase()} | drawings
      </Link>
      <nav>
        <ul className="flex gap gap-4 items-center">
          
          <li>
            <Link className="hover:text-gray-400" href="/about">
              Sobre la página
            </Link>
          </li>
          <li>
            {session?.user !== undefined ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({redirectTo : "/"});
                  
                }}
              >
                <button type="submit"> <LogoutOutlined className="text-xl text-red-500 hover:text-red-400"/></button>
              </form>
            ) : (
              <Link className="text-purple-800 font-bold hover:text-purple-600" href="/about">
                Registrate
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
