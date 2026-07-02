import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <Hero />
      </main>
    </div>
  );
}
