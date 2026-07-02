export function Hero() {
  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Dental care with a personal touch
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Your smile deserves calm, expert care.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            From preventive visits to whitening, restorations, and implants, we offer thoughtful care in a warm and professional setting.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-zinc-950 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-50 p-3">
          <img
            src="https://images.unsplash.com/photo-1662837625421-5fd8ed6131a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dentist smiling with a patient"
            className="h-[420px] w-full rounded-[1.25rem] object-cover"
          />
          <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
            Dra. Isabella Lorde
          </div>
        </div>
      </div>
    </section>
  );
}
