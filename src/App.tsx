import {
  Bell,
  Building2,
  Check,
  Clock3,
  AppWindow,
  Layers3,
  MapPinned,
  MessageCircle,
  Search,
  Send,
  SlidersHorizontal,
} from "lucide-react";
import { FeatureCard, SimpleCard } from "./components/Cards";
import { SectionHeader } from "./components/SectionHeader";
import {
  examples,
  faqs,
  features,
  footerLinks,
  hero,
  navLinks,
  personas,
  photoShowcase,
  pricing,
  problemItems,
  solution,
  steps,
  telegramUrl,
} from "./content/siteContent";

const featureIcons = [Building2, Clock3, Layers3, SlidersHorizontal, AppWindow, MessageCircle];
const stepIcons = [Send, Search, Bell];

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between" aria-label="Основна навигация">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-normal text-ink" aria-label="imot.ly начало">
            <span className="brand-mark">i</span>
            <span>imot.ly</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-ink/70 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
          <a href={telegramUrl} className="btn btn-primary min-h-10 px-3 py-2 sm:min-h-11 sm:px-5 sm:py-3">
            <Send size={17} />
            <span className="hidden xs:inline">Стартирай</span>
            <span className="xs:hidden">Telegram</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="container grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1fr_0.92fr] md:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-white/70 px-3 py-1 text-sm font-medium text-mint">
                <span className="h-2 w-2 rounded-full bg-rose" />
                {hero.badge}
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:mt-6 sm:text-lg sm:leading-8">{hero.description}</p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a href={telegramUrl} className="btn btn-primary">
                  <Send size={18} />
                  {hero.primaryCta}
                </a>
                <a href="#kak-raboti" className="btn btn-secondary">
                  {hero.secondaryCta}
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-3 text-sm text-ink/60 sm:mt-9">
                {["imot.bg", "olx.bg", "alo.bg"].map((source) => (
                  <span key={source} className="source-pill">
                    {source}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-panel" aria-label="Примерен Telegram чат с имотни обяви">
              <div className="map-grid" />
              <div className="search-radar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="city-line" aria-hidden="true">
                {[22, 36, 28, 48, 32, 42, 26].map((height, index) => (
                  <span key={index} style={{ height: `${height}px` }} />
                ))}
              </div>
              <div className="property-orbit" aria-hidden="true">
                <Building2 className="property-icon building-one" size={42} strokeWidth={1.6} />
                <MapPinned className="property-icon pin-one" size={38} strokeWidth={1.6} />
                <KeyIcon />
              </div>
              <div className="telegram-window">
                <div className="chat-header">
                  <span className="brand-mark small">i</span>
                  <div>
                    <p className="text-sm font-semibold">imot.ly бот</p>
                    <p className="text-xs text-mint">активно търсене</p>
                  </div>
                </div>
                <div className="chat-message muted">Двустаен, София, Лозенец / Иван Вазов, до 700 EUR</div>
                <div className="listing-card">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">Нова обява от imot.bg</p>
                    <span>преди 4 мин</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">2 стаи · 64 кв.м · близо до метро · 680 EUR</p>
                </div>
                <div className="listing-card alt">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">Съвпадение от olx.bg</p>
                    <span>преди 11 мин</span>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">Обзаведен · южно изложение · 650 EUR</p>
                </div>
                <div className="chat-actions">
                  <span>Всеки час</span>
                  <span>Само нови</span>
                  <span>2 източника</span>
                </div>
              </div>
              <div className="floating-alert alert-one" aria-hidden="true">
                <span className="alert-dot" />
                <strong>Нов имот</strong>
                <small>Лозенец · 680 EUR</small>
              </div>
              <div className="floating-alert alert-two" aria-hidden="true">
                <span className="alert-dot rose-dot" />
                <strong>Съвпадение</strong>
                <small>imot.bg · преди 2 мин</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Проблемът"
              title="Търсенето на имот не трябва да е часове скролване ежедневно."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {problemItems.map((item) => (
                <article key={item} className="problem-card">
                  <Check className="text-rose" size={20} aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-eyebrow text-left">Решението</p>
              <h2 className="section-title text-left">{solution.title}</h2>
              <p className="section-description mx-0 text-left">{solution.description}</p>
            </div>
            <div className="solution-strip">
              {["Комплексни филтри", "Лесно следене", "Функционален дизайн"].map((item, index) => (
                <div key={item} className="solution-step">
                  <span>{index + 1}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="За кого е" title="Един бот за лично търсене и професионална работа." />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {personas.map((persona) => (
                <SimpleCard key={persona.title} {...persona} />
              ))}
            </div>
          </div>
        </section>

        <section className="photo-section" aria-labelledby="photo-showcase-title">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-eyebrow text-left">На практика</p>
                <h2 id="photo-showcase-title" className="section-title text-left">
                  Реални имотни ситуации, без излишен шум.
                </h2>
              </div>
              <p className="max-w-xl leading-7 text-ink/70">
                imot.ly е направен за ежедневното търсене: квартали, конкретни критерии, бърза реакция и няколко активни сценария.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {photoShowcase.map((photo) => (
                <figure key={photo.title} className="photo-card">
                  <img src={photo.imageUrl} alt={photo.alt} loading="lazy" decoding="async" />
                  <figcaption>
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-ink text-white" id="vazmozhnosti">
          <div className="container">
            <SectionHeader
              eyebrow="Възможности"
              title="Контрол върху обявите, без шум."
              description="Фокусът е върху скорост, точни филтри и яснота в Telegram."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} icon={featureIcons[index]} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cena">
          <div className="container">
            <div className="pricing-card">
              <div>
                <p className="section-eyebrow text-left">Цена</p>
                <h2 className="section-title text-left">{pricing.title}</h2>
                <p className="section-description mx-0 text-left">{pricing.note}</p>
              </div>
              <div className="price-box">
                <p className="text-sm font-medium text-ink/60">Ранен достъп</p>
                <p className="mt-2 text-5xl font-semibold">{pricing.price}</p>
                <p className="mt-1 text-ink/60">{pricing.period}</p>
                <a href={telegramUrl} className="btn btn-primary mt-6 w-full">
                  <Send size={18} />
                  {pricing.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" id="kak-raboti">
          <div className="container">
            <SectionHeader eyebrow="Как работи" title="От първото търсене до първата добра обява." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <article key={step.title} className="step-card">
                    <div className="icon-badge">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <span className="step-number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader eyebrow="Примери" title="Реални търсения, написани нормално." />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {examples.map((example) => (
                <article key={example} className="example-card">
                  <MapPinned size={20} className="text-mint" aria-hidden="true" />
                  <p>{example}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" id="faq">
          <div className="container">
            <SectionHeader eyebrow="Въпроси" title="Кратко и по същество." />
            <div className="mx-auto mt-10 max-w-3xl divide-y divide-ink/10 rounded-lg border border-ink/10 bg-paper">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-aurora" aria-hidden="true" />
          <div className="container text-center">
            <h2 className="mx-auto max-w-3xl text-[2rem] font-semibold leading-tight text-white sm:text-4xl">
              Започни с едно търсене и остави imot.ly да следи пазара вместо теб.
            </h2>
            <a href={telegramUrl} className="btn btn-light mt-8 w-full max-w-xs sm:w-auto sm:max-w-none">
              <Send size={18} />
              Стартирай в Telegram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-paper py-8">
        <div className="container flex flex-col gap-5 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-ink">imot.ly</p>
            <p>Agile Delivery</p>
          </div>
          <div className="flex gap-5">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="hover:text-ink">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function KeyIcon() {
  return (
    <svg className="property-icon key-one" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="9" stroke="currentColor" strokeWidth="3" />
      <path d="M29 29L50 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M43 43L49 37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M49 49L55 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default App;
