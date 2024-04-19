import Link from "next/link";
import { auth, signOut } from "@/auth";

import { LogoutOutlined } from "@ant-design/icons";

import { Alkatra } from "next/font/google";

export const inter = Alkatra({ subsets: ["latin"] });
export const runtime = "edge";

export default async function Header() {
  const session = await auth();

  //if (!session?.user) return null;

  return (
    <header className="flex items-center justify-between text-black  bg-background px-10">
      <Link
        className={`${inter.className} text-2xl font-bold leading-[4rem] mx-8`}
        href="/"
      >
        {session?.user?.name?.toUpperCase()} | drawings
      </Link>
      <nav>
        <ul className="flex gap gap-4 items-center">
          <li>
            <Link className="font-bold hover:text-purple-600" href="/about">
              Sobre la página
            </Link>
          </li>
          <li>
            {session?.user !== undefined ? (
              <div className="flex space-x-4">
                <button className=" font-bold hover:text-purple-600">
                  Mi Perfil
                </button>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button
                    className="font-bold hover:text-purple-600"
                    type="submit"
                  >
                    Cerrar Sesión
                  </button>
                </form>
              </div>
            ) : (
              <Link
                className="bg-purple-950 text-white font-bold border-2 p-2 border-black rounded-xl shadow-md shadow-purple-600 hover:shadow-xl hover:shadow-purple-600"
                href="/auth/singup"
              >
                Registrate
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
