import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-caderno.jpg";

const CHECKOUT_URL = "https://app.profjonathanrocha.com.br/c/d2rsblt";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5586988812196&text=Ol%C3%A1%21+Quero+informa%C3%A7%C3%B5es+sobre+o+Caderno+de+350+Quest%C3%B5es+PMPE";

const topics = [
  { qtd: "100", title: "Estatuto dos Policiais Militares de Pernambuco", subtitle: "Questões comentadas sobre o estatuto dos policiais militares do estado." },
  { qtd: "50", title: "Lei da Tortura", subtitle: "Questões comentadas para praticar os principais pontos da lei." },
  { qtd: "50", title: "Lei Maria da Penha", subtitle: "Questões comentadas sobre a proteção e o enfrentamento da violência doméstica." },
  { qtd: "50", title: "Lei de Abuso de Autoridade", subtitle: "Questões comentadas para revisar as condutas previstas na lei." },
  { qtd: "30", title: "Lei dos Crimes Hediondos", subtitle: "Questões comentadas sobre os temas centrais da legislação." },
  { qtd: "70", title: "Lei de Drogas", subtitle: "Questões comentadas para reforçar a prática nessa legislação." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caderno PMPE — 350 Questões Comentadas" },
      { name: "description", content: "350 questões comentadas para o concurso da Polícia Militar de Pernambuco: Estatuto dos Policiais Militares de Pernambuco, Lei da Tortura, Lei Maria da Penha, Lei de Abuso de Autoridade, Lei dos Crimes Hediondos e Lei de Drogas." },
      { property: "og:title", content: "Caderno PMPE — 350 Questões Comentadas" },
      { property: "og:description", content: "Pratique com 350 questões comentadas em seis temas de legislação para a PMPE." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function useCountdown(hours: number) {
  const [end] = useState(() => Date.now() + hours * 60 * 60 * 1000);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

function Landing() {
  const { h, m, s } = useCountdown(23);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-yellow-400 selection:text-black">
      {/* Top urgency bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
        🔥 OFERTA POR TEMPO LIMITADO — encerra em{" "}
        <span className="font-mono tabular-nums tracking-wider">{pad(h)}:{pad(m)}:{pad(s)}</span>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at top, rgba(250,204,21,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(220,38,38,0.2), transparent 60%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-10 sm:pt-16 pb-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 text-xs font-semibold tracking-wider uppercase mb-6">
            Concurso PMPE · Legislação em questões
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Prepare-se para a <span className="text-yellow-400">PMPE</span> com{" "}
            <span className="text-yellow-400">350 questões comentadas</span> de legislação 🚔
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-neutral-300">
            Pratique seis temas de legislação para a <strong className="text-white">Polícia Militar de Pernambuco</strong>. Resolva questões, revise os comentários e fortaleça sua preparação para o concurso.
          </p>
          <div className="mt-8 flex justify-center">
            <img src={heroImage} alt="Caderno de questões comentadas para a PMPE" width={1408} height={1008} className="w-full max-w-3xl rounded-xl shadow-[0_30px_80px_-20px_rgba(250,204,21,0.35)]" />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={CHECKOUT_URL} className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 active:scale-[.98] transition px-8 py-4 text-base sm:text-lg font-extrabold uppercase tracking-wide shadow-[0_10px_30px_-5px_rgba(220,38,38,0.6)]">Quero começar a estudar!</a>
            <div className="flex items-center gap-2 text-sm text-neutral-400"><span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />Acesso imediato após a compra</div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400">
            <span>✔ 350 questões comentadas</span><span>✔ 6 temas de legislação</span><span>✔ Estatuto da PMPE e leis especiais</span><span>✔ Garantia de 7 dias</span>
          </div>
        </div>
      </header>

      {/* PAIN POINTS */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black uppercase tracking-tight">A legislação exige atenção. <span className="text-yellow-400">Como está sua prática?</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: "🧭", title: "Dificuldade em fixar as leis?", body: "Resolver questões ajuda a identificar os pontos que você já domina e os que ainda precisa revisar." },
              { icon: "🎯", title: "Erra por detalhes?", body: "Os comentários ajudam você a entender cada resposta e a reconhecer diferenças importantes entre os dispositivos legais." },
              { icon: "⏱️", title: "Muito conteúdo, pouca prática?", body: "São 350 questões distribuídas em seis temas para transformar a revisão da legislação em treino constante." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-neutral-900/70 border border-white/10 p-6 hover:border-yellow-400/40 transition">
                <div className="text-3xl">{c.icon}</div><h3 className="mt-3 text-lg font-bold text-yellow-400">{c.title}</h3><p className="mt-2 text-sm text-neutral-300 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><a href={CHECKOUT_URL} className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 transition px-8 py-4 text-base font-extrabold uppercase tracking-wide">Libere o seu acesso!</a></div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest">O que você recebe</p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black">350 questões comentadas para a <span className="text-yellow-400">PMPE</span></h2>
            <p className="mt-4 text-neutral-300">Pratique o Estatuto dos Policiais Militares de Pernambuco e cinco leis especiais com uma distribuição clara de questões por tema.</p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              {[
                "100 questões sobre o Estatuto dos Policiais Militares de Pernambuco",
                "50 questões sobre a Lei da Tortura",
                "50 questões sobre a Lei Maria da Penha",
                "50 questões sobre a Lei de Abuso de Autoridade",
                "30 questões sobre a Lei dos Crimes Hediondos",
                "70 questões sobre a Lei de Drogas",
              ].map((f) => <li key={f} className="flex gap-3"><span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-xs">✔</span><span>{f}</span></li>)}
            </ul>
            <a href={CHECKOUT_URL} className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition px-8 py-4 text-base font-extrabold uppercase tracking-wide">Quero começar agora</a>
          </div>
          <div className="relative"><div className="absolute -inset-6 bg-yellow-400/10 blur-3xl rounded-full" /><img src={heroImage} alt="Prévia do caderno de questões" loading="lazy" width={1408} height={1008} className="relative rounded-xl border border-white/10" /></div>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-yellow-400 text-sm font-bold uppercase tracking-widest">Divisão das 350 questões</p>
          <h2 className="mt-2 text-center text-2xl sm:text-4xl font-black">Seis temas de <span className="text-yellow-400">legislação</span> para a PMPE</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {topics.map((b) => <div key={b.title} className="rounded-2xl bg-neutral-900/70 border border-white/10 p-6 hover:border-yellow-400/40 transition text-center"><div className="text-5xl sm:text-6xl font-black text-yellow-400 leading-none">{b.qtd}</div><p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">questões</p><h3 className="mt-4 text-lg font-bold">{b.title}</h3><p className="mt-2 text-sm text-neutral-300 leading-relaxed">{b.subtitle}</p></div>)}
          </div>
          <p className="mt-8 text-center text-neutral-400 text-sm">Total: <span className="text-white font-bold">350 questões comentadas</span> para praticar os seis temas.</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black">Estude com direção. <span className="text-yellow-400">Transforme a revisão em prática.</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
            {[
              { title: "Estudo por tema", body: "Organize sua prática entre o Estatuto dos Policiais Militares de Pernambuco e as cinco leis especiais do caderno." },
              { title: "Aprendizado com comentários", body: "Confira a explicação das respostas para revisar a legislação enquanto resolve as questões." },
              { title: "Mais segurança na revisão", body: "Identifique seus erros, retome os assuntos necessários e acompanhe sua evolução nos estudos." },
            ].map((b) => <div key={b.title} className="rounded-2xl bg-black/40 border border-white/10 p-6"><h3 className="text-lg font-bold text-yellow-400">{b.title}</h3><p className="mt-2 text-sm text-neutral-300 leading-relaxed">{b.body}</p></div>)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black">Veja o que <span className="text-yellow-400">nossos alunos dizem</span></h2>
          <p className="text-center text-neutral-400 mt-2 text-sm">Depoimentos de alunos sobre os materiais de estudo.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["https://profjonathanrocha.com.br/wp-content/uploads/2025/02/1.webp", "https://profjonathanrocha.com.br/wp-content/uploads/2025/02/2.webp", "https://profjonathanrocha.com.br/wp-content/uploads/2025/02/3.webp"].map((src, i) => <div key={src} className="rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden"><img src={src} alt={`Depoimento de aluno ${i + 1}`} loading="lazy" className="w-full h-auto block" /></div>)}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black">Além disso, você <span className="text-yellow-400">também vai receber:</span></h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { tag: "BÔNUS 01", title: "Edital verticalizado", old: "R$ 27,00", body: "Organize os tópicos do concurso da PMPE em uma rotina de estudos mais clara." },
              { tag: "BÔNUS 02", title: "Ebook do Concurseiro Iniciante", old: "R$ 57,00", body: "Guia para organizar seus estudos, montar um cronograma e manter a constância na preparação." },
            ].map((b) => <div key={b.tag} className="rounded-2xl bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/30 p-6"><span className="inline-block px-2 py-1 rounded bg-yellow-400 text-black text-xs font-black tracking-widest">{b.tag}</span><h3 className="mt-4 text-xl font-bold">{b.title}</h3><p className="mt-1 text-sm text-neutral-400">De <span className="line-through">{b.old}</span> por <span className="text-yellow-400 font-bold">GRÁTIS HOJE</span></p><p className="mt-3 text-neutral-300 text-sm leading-relaxed">{b.body}</p></div>)}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="py-16 sm:py-24 scroll-mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl border border-yellow-400/40 bg-gradient-to-b from-neutral-900 to-black p-8 sm:p-12 text-center shadow-[0_30px_80px_-20px_rgba(250,204,21,0.25)]">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Receba o acesso agora</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black">Comece a resolver 350 questões comentadas para a PMPE</h2>
            <div className="mt-8"><p className="text-neutral-400 text-sm">Pagamento único, de <span className="line-through">R$ 89,90</span> por apenas:</p><div className="mt-3 flex items-start justify-center gap-1"><span className="text-yellow-400 text-2xl font-bold mt-3">R$</span><span className="text-yellow-400 text-7xl sm:text-8xl font-black leading-none">37</span><span className="text-yellow-400 text-2xl font-bold mt-3">,00</span></div><p className="text-neutral-400 text-xs mt-1">ou em até 12x no cartão</p></div>
            <ul className="mt-8 text-left max-w-md mx-auto space-y-2 text-neutral-200 text-sm">
              {["350 questões comentadas em seis temas de legislação", "Bônus 01: Edital verticalizado", "Bônus 02: Ebook do Concurseiro Iniciante", "Acesso imediato em qualquer dispositivo"].map((f) => <li key={f} className="flex gap-2"><span className="text-green-400">✔</span> {f}</li>)}
            </ul>
            <a href={CHECKOUT_URL} className="mt-8 inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-green-500 hover:bg-green-400 text-black transition px-10 py-5 text-lg font-black uppercase tracking-wide shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)]">Garanta seu desconto agora →</a>
            <p className="mt-4 text-xs text-neutral-500">🔒 Compra 100% segura · Acesso imediato · Garantia de 7 dias</p>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6"><div className="flex-shrink-0 w-24 h-24 rounded-full bg-yellow-400 text-black flex flex-col items-center justify-center font-black"><span className="text-3xl leading-none">7</span><span className="text-[10px] tracking-widest">DIAS</span></div><div><h3 className="text-xl font-bold text-yellow-400">Satisfação garantida</h3><p className="mt-2 text-sm text-neutral-300">Experimente o conteúdo por 7 dias. Se não ficar satisfeito por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem burocracia.</p></div></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-2xl sm:text-4xl font-black">Dúvidas <span className="text-yellow-400">frequentes</span></h2>
          <div className="mt-10 space-y-3">
            {[
              { q: "Como recebo o material?", a: "O acesso é enviado após a confirmação da compra para o seu e-mail." },
              { q: "Quais assuntos estão no caderno?", a: "São 350 questões comentadas: 100 do Estatuto dos Policiais Militares de Pernambuco, 50 da Lei da Tortura, 50 da Lei Maria da Penha, 50 da Lei de Abuso de Autoridade, 30 da Lei dos Crimes Hediondos e 70 da Lei de Drogas." },
              { q: "As questões são comentadas?", a: "Sim. As questões vêm com comentários para ajudar você a revisar cada tema." },
              { q: "Posso acessar no celular?", a: "Sim, o material é compatível com celular, tablet e computador — você estuda de onde estiver." },
              { q: "Tem garantia?", a: "Sim! Você tem 7 dias para pedir reembolso integral." },
              { q: "Tem bônus?", a: "Sim: Edital Verticalizado + Ebook do Concurseiro Iniciante, inclusos sem custo adicional." },
            ].map((f) => <details key={f.q} className="group rounded-xl border border-white/10 bg-black/40 p-5 open:border-yellow-400/40"><summary className="cursor-pointer list-none flex justify-between items-center font-semibold">{f.q}<span className="text-yellow-400 text-xl transition group-open:rotate-45">+</span></summary><p className="mt-3 text-sm text-neutral-300 leading-relaxed">{f.a}</p></details>)}
          </div>
          <div className="mt-12 text-center"><p className="font-bold text-lg">Restou alguma dúvida?</p><p className="text-neutral-400 text-sm">Fale com a gente pelo WhatsApp</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-black px-6 py-3 font-bold">💬 Falar no WhatsApp</a></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-neutral-500 border-t border-white/5">© {new Date().getFullYear()} Caderno PMPE — Todos os direitos reservados.</footer>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-400 text-black flex items-center justify-center text-2xl shadow-[0_10px_30px_-5px_rgba(34,197,94,0.6)]">💬</a>
    </div>
  );
}
