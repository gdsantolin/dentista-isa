import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Header />

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <section id="about" className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Dental care with a personal touch
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional, welcoming care for your smile.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            This MVP landing page introduces Dr. Isabella and highlights the core services that matter most to patients.
          </p>
        </section>
      </main>
    </div>
  );
}
