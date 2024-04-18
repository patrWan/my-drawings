import LoginForm from "@/components/LoginForm";
import { auth } from "@/auth";

export const runtime = 'edge';

export default async function Home() {
  const session = await auth();

  if (!session?.user)

  return (
    <main className="grid">
      <div className="h-96 m-auto w-96 grid gap-1 p-4 border-2 text-black bg-zinc-100">
        <h1 className="text-4x font-bold uppercase text-center">
          My @Drawings
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
