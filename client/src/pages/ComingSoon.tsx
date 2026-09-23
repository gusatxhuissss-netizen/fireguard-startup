import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";

export default function ComingSoon() {
  const [, setLocation] = useLocation();

  return (
    <main className="min-h-screen bg-[#171918] px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl items-center justify-center">
        <section className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl sm:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-[#e5483f]/40 bg-[#e5483f]/10 text-[#ef7068]">
            <ShieldCheck size={26} aria-hidden="true" />
          </div>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef7068]">FireGuard / Em preparação</p>
          <h1 className="mt-4 font-[Space_Grotesk] text-4xl font-medium tracking-[-0.06em] sm:text-5xl">Esta área está sendo preparada.</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55">A interface institucional já está disponível. O acesso a esta área será conectado quando os fluxos de conta e operação forem configurados.</p>
          <button className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#e5483f] px-5 text-xs font-semibold text-white transition hover:bg-[#f0554b]" onClick={() => setLocation("/")}> <ArrowLeft size={15} /> Voltar para o início </button>
        </section>
      </div>
    </main>
  );
}
