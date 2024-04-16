import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="grid">
      <div className="bg-zinc-900 h-96 m-auto w-96 grid gap-1 p-4">
        <h1 className="text-4xl text-white font-bold uppercase text-center">
          My @Draws
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
