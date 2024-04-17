import Link from "next/link";
import { auth, signOut } from "@/auth";

import {
  LogoutOutlined
} from "@ant-design/icons";

export default async function Header() {
  const session = await auth();

  //if (!session?.user) return null;

  return (
    <header className="flex items-center justify-between  ">
      <Link className="text-xl font-bold leading-[4rem] mx-8" href="/">
         @{session?.user?.name} drawings
      </Link>
      <nav>
        <ul className="flex gap gap-4 items-center">
          
          <li>
            <Link className="text-gray-300 hover:text-white" href="/about">
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
              <Link className="text-gray-300 hover:text-white" href="/about">
                Registrate
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
