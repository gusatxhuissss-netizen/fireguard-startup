import { useState } from "react";
import { toast } from "sonner";
import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Flame,
  Gauge,
  Menu,
  MoreHorizontal,
  MoveUpRight,
  OctagonAlert,
  PenLine,
  Radar,
  Search,
  ShieldCheck,
  Siren,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import BrandMark from "@/components/BrandMark";

type IconType = typeof ShieldCheck;

const problems: Array<{ title: string; text: string; icon: IconType; tone: string }> = [
  {
    title: "Inspeções esquecidas",
    text: "Prazos espalhados em planilhas e mensagens que se perdem no dia a dia.",
    icon: CalendarClock,
    tone: "amber",
  },
  {
    title: "Equipamentos sem controle",
    text: "Sem uma visão clara de localização, validade e histórico de cada item.",
    icon: OctagonAlert,
    tone: "red",
  },
  {
    title: "Documentação desorganizada",
    text: "Arquivos importantes longe de quem precisa deles no momento certo.",
    icon: FileText,
    tone: "slate",
  },
  {
    title: "Falta de acompanhamento",
    text: "Decisões reativas quando o risco pede presença e antecipação.",
    icon: Radar,
    tone: "blue",
  },
];

const features: Array<{ title: string; text: string; icon: IconType }> = [
  { title: "Dashboard de segurança", text: "A saúde da operação em um só lugar.", icon: Gauge },
  { title: "Cadastro de equipamentos", text: "Cada ativo com contexto, histórico e dono.", icon: ShieldCheck },
  { title: "Controle de inspeções", text: "Rotinas claras para nada passar despercebido.", icon: ClipboardCheck },
  { title: "Alertas de vencimento", text: "Antecipe prazos antes que virem urgências.", icon: BellRing },
  { title: "Checklists", text: "Padronize a execução em todos os locais.", icon: Check },
  { title: "Registro de ocorrências", text: "Contexto para aprender com cada evento.", icon: Siren },
  { title: "Relatórios", text: "Informação pronta para orientar decisões.", icon: TrendingUp },
  { title: "Gestão de documentos", text: "Tudo organizado, acessível e rastreável.", icon: FileText },
];

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    eyebrow: "Para começar",
    description: "O essencial para colocar sua rotina de segurança em ordem.",
    features: ["1 local cadastrado", "Inventário de equipamentos", "Checklists básicos"],
  },
  {
    name: "Pro",
    price: "R$ 100",
    eyebrow: "Para evoluir",
    description: "Mais automação e visibilidade para times que querem antecipar riscos.",
    features: ["Locais e equipes ampliados", "Alertas inteligentes", "Relatórios e documentos"],
    featured: true,
  },
  {
    name: "Business",
    price: "R$ 300",
    eyebrow: "Para escalar",
    description: "Governança e controle para operações com múltiplos locais.",
    features: ["Gestão multiunidade", "Permissões por equipe", "Suporte prioritário"],
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dashboard-window ${compact ? "dashboard-window--compact" : ""}`} aria-label="Prévia do dashboard FireGuard">
      <div className="dashboard-window__topbar">
        <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="window-address"><span className="window-address__lock">●</span> app.fireguard.com.br</div>
        <MoreHorizontal size={16} className="window-more" aria-hidden="true" />
      </div>
      <div className="dashboard-window__body">
        <aside className="dashboard-sidebar">
          <BrandMark compact inverse />
          <div className="dashboard-sidebar__profile"><span>AC</span><div><b>Acme Corp.</b><small>Workspace</small></div><ChevronRight size={13} /></div>
          <div className="dashboard-nav-label">VISÃO GERAL</div>
          <div className="dashboard-nav-item is-active"><Gauge size={14} /> Visão geral</div>
          <div className="dashboard-nav-item"><ShieldCheck size={14} /> Equipamentos</div>
          <div className="dashboard-nav-item"><ClipboardCheck size={14} /> Inspeções</div>
          <div className="dashboard-nav-item"><FileText size={14} /> Documentos</div>
          <div className="dashboard-nav-label dashboard-nav-label--spaced">GESTÃO</div>
          <div className="dashboard-nav-item"><Siren size={14} /> Ocorrências <span className="nav-count">3</span></div>
          <div className="dashboard-nav-item"><Users size={14} /> Equipe</div>
          <div className="dashboard-sidebar__bottom"><span className="status-dot" /> Operação protegida</div>
        </aside>
        <div className="dashboard-content">
          <div className="dashboard-content__header">
            <div><span className="dashboard-kicker">SEGUNDA-FEIRA, 21 DE SETEMBRO</span><h3>Bom dia, Camila.</h3></div>
            <div className="dashboard-actions"><button aria-label="Buscar"><Search size={14} /></button><button className="notification-button" aria-label="Notificações"><BellRing size={14} /><i /></button><span className="avatar">CA</span></div>
          </div>
          <div className="dashboard-status-banner"><span className="status-icon"><ShieldCheck size={16} /></span><div><b>Status de segurança</b><small>Todos os pontos críticos estão sob controle.</small></div><span className="status-pill">Seguro</span></div>
          <div className="dashboard-stat-grid">
            <div className="dashboard-stat"><span>Equipamentos</span><strong>128</strong><small className="positive">+8,4% <em>vs. mês anterior</em></small><div className="mini-bars"><i style={{ height: "32%" }} /><i style={{ height: "48%" }} /><i style={{ height: "43%" }} /><i style={{ height: "68%" }} /><i style={{ height: "57%" }} /><i style={{ height: "82%" }} /><i style={{ height: "74%" }} /></div></div>
            <div className="dashboard-stat"><span>Inspeções próximas</span><strong>07</strong><small className="warning">2 vencem esta semana</small><div className="stat-progress"><i style={{ width: "71%" }} /></div></div>
            <div className="dashboard-stat"><span>Ocorrências abertas</span><strong>03</strong><small className="muted">Nenhuma crítica</small><div className="incident-line"><span /><span /><span /></div></div>
          </div>
          <div className="dashboard-visual-grid">
            <div className="dashboard-chart-card"><div className="chart-heading"><div><span>Inspeções realizadas</span><b>42 <small>neste mês</small></b></div><span className="chart-badge">+12%</span></div><div className="chart-area"><div className="chart-y"><span>50</span><span>25</span><span>0</span></div><div className="chart-lines"><i /><i /><i /></div><svg viewBox="0 0 400 115" preserveAspectRatio="none" role="img" aria-label="Gráfico de inspeções crescentes"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#ef4b42" stopOpacity=".35" /><stop offset="1" stopColor="#ef4b42" stopOpacity="0" /></linearGradient></defs><path d="M0 96 C35 88, 42 72, 71 78 S105 95, 129 67 S171 74, 194 55 S235 62, 257 42 S296 48, 319 26 S360 36, 400 8 L400 115 L0 115 Z" fill="url(#chartFill)" /><path d="M0 96 C35 88, 42 72, 71 78 S105 95, 129 67 S171 74, 194 55 S235 62, 257 42 S296 48, 319 26 S360 36, 400 8" fill="none" stroke="#f05a4e" strokeLinecap="round" strokeWidth="3" /></svg><div className="chart-x"><span>01 set</span><span>08 set</span><span>15 set</span><span>21 set</span></div></div></div>
            <div className="dashboard-alert-card"><div className="chart-heading"><div><span>Próximos alertas</span><b>3 <small>pendências</small></b></div><ArrowRight size={14} /></div><div className="alert-row"><span className="alert-icon alert-icon--amber"><CalendarClock size={13} /></span><div><b>Extintor CO₂ #042</b><small>Vencimento em 2 dias</small></div><ChevronRight size={13} /></div><div className="alert-row"><span className="alert-icon alert-icon--red"><AlertTriangle size={13} /></span><div><b>Rota de fuga — Bloco B</b><small>Inspeção atrasada</small></div><ChevronRight size={13} /></div><div className="alert-row"><span className="alert-icon alert-icon--blue"><PenLine size={13} /></span><div><b>Checklist mensal</b><small>Agendado para amanhã</small></div><ChevronRight size={13} /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const handleComingSoon = (label: string) => {
    toast(`${label} estará disponível em breve.`, { description: "Estamos preparando a próxima etapa do FireGuard." });
  };

  return (
    <div className="site-shell">
      <div className="announcement-bar"><span className="announcement-dot" /> FireGuard está construindo uma nova forma de cuidar da segurança <span className="announcement-link" onClick={() => handleNav("solucao")}>Conheça a plataforma <ArrowRight size={13} /></span></div>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand-link" href="#inicio" aria-label="FireGuard — início"><BrandMark /></a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#solucao" onClick={() => setMenuOpen(false)}>Recursos</a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
          </nav>
          <div className="site-header__actions"><button className="text-button" onClick={() => handleComingSoon("Acesso à plataforma")}>Entrar <MoveUpRight size={14} /></button><button className="button button--small button--dark" onClick={() => handleNav("planos")}>Começar agora <ArrowRight size={14} /></button></div>
          <button className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-grid-texture" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" /><div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-mark"><Sparkles size={12} /></span> Segurança que pensa à frente</div>
              <h1>Tecnologia que protege <em>o que importa.</em></h1>
              <p className="hero-subtitle">Simplifique a gestão da segurança contra incêndios com uma plataforma inteligente, organizada e feita para empresas.</p>
              <div className="hero-actions"><button className="button button--primary" onClick={() => handleNav("planos")}>Começar agora <ArrowRight size={16} /></button><button className="button button--ghost-light" onClick={() => handleNav("dashboard")}>Conhecer a plataforma <MoveUpRight size={15} /></button></div>
              <div className="hero-proof"><div className="proof-avatars"><span>LM</span><span>RS</span><span>AC</span><span>+</span></div><div><b>Uma rotina mais segura</b><small>organização que vira prevenção</small></div></div>
            </div>
            <div className="hero-product reveal-up reveal-delay-2"><div className="product-orbit-label"><span className="live-dot" /> Prévia do produto <span>v1.0</span></div><DashboardMockup /></div>
          </div>
          <div className="hero-scroll-cue"><span>Role para explorar</span><i /></div>
        </section>

        <section className="problem-section section-light" id="problema">
          <div className="container">
            <div className="section-intro section-intro--split reveal-up"><div><span className="section-number">01 / O desafio</span><h2>O risco cresce quando<br /><em>a rotina se perde.</em></h2></div><p>Planilhas desconectadas, prazos esquecidos e documentos espalhados criam pontos cegos. O FireGuard transforma a complexidade da operação em clareza para agir.</p></div>
            <div className="problem-grid">{problems.map(({ title, text, icon: Icon, tone }, index) => <article className={`problem-card reveal-up reveal-delay-${Math.min(index + 1, 3)}`} key={title}><div className={`problem-icon problem-icon--${tone}`}><Icon size={19} /></div><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p><div className="card-arrow"><ArrowRight size={15} /></div></article>)}</div>
          </div>
        </section>

        <section className="solution-section section-dark" id="solucao">
          <div className="container solution-layout"><div className="solution-copy reveal-up"><span className="section-number section-number--light">02 / A solução</span><h2>Uma central de controle para <em>cada decisão.</em></h2><p>O FireGuard conecta pessoas, processos e informações para você sair do modo reativo e construir uma cultura de prevenção contínua.</p><button className="inline-link" onClick={() => handleNav("dashboard")}>Ver o dashboard em ação <ArrowRight size={15} /></button><div className="solution-caption"><div className="caption-line" /><span>Feito para a realidade de operações brasileiras</span></div></div><div className="feature-grid">{features.map(({ title, text, icon: Icon }, index) => <article className="feature-card reveal-up" style={{ animationDelay: `${index * 45}ms` }} key={title}><div className="feature-card__icon"><Icon size={18} /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="feature-card__arrow" size={14} /></article>)}</div></div>
        </section>

        <section className="steps-section section-light" id="como-funciona">
          <div className="container"><div className="section-intro section-intro--center reveal-up"><span className="section-number">03 / Como funciona</span><h2>Comece simples.<br /><em>Evolua com confiança.</em></h2><p>Quatro passos para transformar a segurança em uma rotina visível, rastreável e possível de melhorar.</p></div><div className="steps-track"><div className="steps-line" />{[{ number: "01", title: "Cadastre seu local", text: "Crie o mapa da sua operação em poucos minutos.", icon: PenLine }, { number: "02", title: "Adicione seus equipamentos", text: "Tenha cada ativo identificado e no contexto certo.", icon: ShieldCheck }, { number: "03", title: "Faça e registre inspeções", text: "Padronize checklists e mantenha o histórico vivo.", icon: ClipboardCheck }, { number: "04", title: "Receba alertas e acompanhe tudo", text: "Antecipe prazos e mantenha o controle todos os dias.", icon: BellRing }].map(({ number, title, text, icon: Icon }) => <article className="step-card reveal-up" key={number}><div className="step-number">{number}</div><div className="step-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="dashboard-section section-cream" id="dashboard"><div className="container"><div className="section-intro section-intro--split reveal-up"><div><span className="section-number">04 / Visibilidade</span><h2>Saúde da operação<br /><em>em um só olhar.</em></h2></div><div className="dashboard-intro-side"><p>Informação certa, no momento certo. Uma visão que ajuda sua equipe a priorizar o que realmente importa.</p><div className="dashboard-meta"><span className="live-dot live-dot--dark" /> Dados de demonstração <span>•</span> Interface em evolução</div></div></div><div className="dashboard-showcase reveal-up"><DashboardMockup compact /></div></div></section>

        <section className="plans-section section-dark" id="planos"><div className="container"><div className="section-intro section-intro--split section-intro--light reveal-up"><div><span className="section-number section-number--light">05 / Planos</span><h2>Escolha o ritmo<br /><em>da sua operação.</em></h2></div><div className="plans-intro-side"><p>Comece com o essencial e evolua conforme sua operação cresce. Os planos e valores serão configuráveis para a realidade do seu negócio.</p><span className="config-label"><span /> Valores configuráveis</span></div></div><div className="plans-grid">{plans.map((plan, index) => <article className={`plan-card reveal-up ${plan.featured ? "plan-card--featured" : ""}`} style={{ animationDelay: `${index * 90}ms` }} key={plan.name}>{plan.featured && <div className="plan-ribbon">Mais escolhido</div>}<div className="plan-card__top"><span className="plan-eyebrow">{plan.eyebrow}</span><h3>{plan.name}</h3><p>{plan.description}</p></div><div className="plan-price"><strong>{plan.price}</strong><span>preço configurável</span></div><ul>{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><button className={`button ${plan.featured ? "button--primary" : "button--outline-light"}`} onClick={() => handleComingSoon(`Plano ${plan.name}`)}>Conhecer plano <ArrowRight size={14} /></button></article>)}</div></div></section>

        <section className="about-section section-light" id="sobre"><div className="container about-layout"><div className="about-mark reveal-up"><div className="about-mark__halo" /><Flame size={74} strokeWidth={1.15} /></div><div className="about-copy reveal-up"><span className="section-number">06 / Sobre nós</span><h2>Prevenção não é um evento.<br /><em>É uma cultura.</em></h2><p>O FireGuard nasce para ajudar empresas a cuidarem melhor do que sustenta suas operações: pessoas, espaços e continuidade. Tecnologia é o meio. Clareza para agir é o objetivo.</p><div className="about-signature"><span className="signature-line" /><span>Construído com intenção, para operações reais.</span></div></div><div className="about-stat reveal-up"><span>Nosso princípio</span><strong>Antecipar<br /><em>para proteger.</em></strong><div className="about-stat__mark"><ShieldCheck size={20} /><span>FG / 01</span></div></div></div></section>

        <section className="cta-section"><div className="cta-grid-texture" aria-hidden="true" /><div className="container cta-layout"><div><span className="eyebrow eyebrow--light"><span className="eyebrow-mark"><Sparkles size={12} /></span> O próximo passo é simples</span><h2>Proteção começa<br /><em>com organização.</em></h2></div><div className="cta-copy"><p>Tenha mais controle sobre a segurança do seu negócio com o FireGuard.</p><button className="button button--white" onClick={() => scrollToSection("planos")}>Começar agora <ArrowRight size={16} /></button></div></div></section>
      </main>

      <footer className="site-footer" id="contato"><div className="container"><div className="footer-top"><div className="footer-brand"><BrandMark inverse /><p>Uma plataforma inteligente para prevenção, controle e gestão de riscos de incêndio.</p><a href="mailto:contato@fireguard.com.br">contato@fireguard.com.br <MoveUpRight size={13} /></a></div><div className="footer-nav"><div><span>Explorar</span><a href="#inicio">Início</a><a href="#solucao">Recursos</a><a href="#planos">Planos</a></div><div><span>FireGuard</span><a href="#sobre">Sobre nós</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></div><div><span>Legal</span><a href="#contato" onClick={() => handleComingSoon("Termos de uso")}>Termos de uso</a><a href="#contato" onClick={() => handleComingSoon("Política de privacidade")}>Política de privacidade</a></div></div></div><div className="footer-bottom"><span>© 2026 FireGuard. Feito para proteger o que importa.</span><span>Interface demonstrativa · Conteúdo editável</span></div></div></footer>
    </div>
  );
}

export default Home;
