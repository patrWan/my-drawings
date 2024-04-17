import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Header() {
  const session = await auth();

  //if (!session?.user) return null;

  return (
    <header className="flex items-center justify-between">
      <Link className="text-xl font-bold leading-[4rem]" href="/">
        My Draws @ {session?.user?.name}
      </Link>
      <nav>
        <ul className="flex gap gap-4">
          <li>
            {session?.user !== undefined ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({redirectTo : "/"});
                  
                }}
              >
                <button type="submit">Cerrar Sesión</button>
              </form>
            ) : (
              <Link className="text-gray-300 hover:text-white" href="/about">
                Registrate
              </Link>
            )}
          </li>
          <li>
            <Link className="text-gray-300 hover:text-white" href="/about">
              Sobre la página
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
