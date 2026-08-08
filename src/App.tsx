import {
  Bell,
  Briefcase,
  Building2,
  Clock3,
  Search,
  Send,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";
import { ButtonLink } from "./components/Buttons";
import { FAQAccordion, IconCard, PhotoCard, PricingCard, ProductFrame, ValueItem } from "./components/Cards";
import { SectionHeader } from "./components/SectionHeader";
import {
  audiences,
  faqs,
  finalCta,
  hero,
  howItWorks,
  navLinks,
  photoShowcase,
  pricing,
  scenario,
  telegramUrl,
  trustPoints,
} from "./content/siteContent";

const valueIcons = [Building2, Bell, Clock3];
const stepIcons = [SlidersHorizontal, Search, Send];
const audienceIcons = [UserRound, Building2, Briefcase];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <ProductDemo />
        <Scenario />
        <AudienceSection />
        <PhotoShowcase />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Основна навигация">
        <a href="#" className="logo-link" aria-label="imot.ly начало">
          <img className="logo-image" src="/assets/imotly-logo.png" alt="" aria-hidden="true" />
          <span className="brand-word">IMOT.LY</span>
        </a>

        <div className="nav-links" aria-label="Секции">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <ButtonLink href={telegramUrl} className="header-cta" showTelegramIcon ariaLabel="Започни в Telegram">
          Започни в Telegram
        </ButtonLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-label">{hero.label}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            <ButtonLink href={telegramUrl} showTelegramIcon ariaLabel="Започни в Telegram">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#kak-raboti" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <figure className="hero-visual">
          <img src={hero.imageUrl} alt={hero.imageAlt} width="1200" height="900" fetchPriority="high" />
          <figcaption className="sr-only">{hero.imageAlt}</figcaption>
          <div className="hero-search-card" aria-hidden="true">
            <span>Търсене</span>
            <strong>Двустаен в София</strong>
            <p>Лозенец · Иван Вазов · до 280 000{"\u00a0"}€</p>
            <div>
              <small>imot.bg</small>
              <small>olx.bg</small>
              <small>alo.bg</small>
            </div>
          </div>
          <div className="hero-alert-card" aria-hidden="true">
            <span className="alert-dot" />
            <div>
              <strong>Нова подходяща обява</strong>
              <p>пристигна в Telegram преди 4 мин</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-section" aria-label="Основни предимства">
      <div className="container">
        <div className="trust-strip">
          {trustPoints.map((point, index) => {
            const Icon = valueIcons[index];
            return <ValueItem key={point.title} icon={Icon} {...point} />;
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="kak-raboti">
      <div className="container split-section">
        <SectionHeader
          align="left"
          eyebrow="Как работи"
          title="От първото търсене до първата добра обява."
          description="Три ясни стъпки, без ново приложение и без постоянно проверяване на сайтове."
        />
        <div className="steps-grid">
          {howItWorks.map((step, index) => {
            const Icon = stepIcons[index];
            return <IconCard key={step.title} icon={Icon} index={index} {...step} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProductDemo() {
  return (
    <section className="section section-white" id="demo">
      <div className="container demo-layout">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Продуктът"
            title="Твоята пряка връзка с големите имотни сайтове"
            description="Задаваш филтри, получаваш новите съвпадения и отваряш оригиналната обява, когато искаш да видиш детайлите."
          />
          <ButtonLink href={telegramUrl} className="section-cta" showTelegramIcon>
            Започни сега
          </ButtonLink>
        </div>

        <ProductFrame label="Демо визуализация на imot.ly в Telegram">
          <div className="product-screenshots" aria-label="Екрани от IMOT.LY в Telegram">
            <figure className="product-shot">
              <img src="/assets/product-radars.png" alt="Екран с активни имотни търсения в IMOT.LY" loading="lazy" decoding="async" width="840" height="1522" />
            </figure>
            <figure className="product-shot">
              <img src="/assets/product-listing.png" alt="Екран с детайли за нова имотна обява в IMOT.LY" loading="lazy" decoding="async" width="874" height="1708" />
            </figure>
          </div>
        </ProductFrame>
      </div>
    </section>
  );
}

function Scenario() {
  return (
    <section className="scenario-section">
      <div className="container scenario-card reveal-card">
        <div className="scenario-copy">
          <p className="section-eyebrow">{scenario.eyebrow}</p>
          <h2>{scenario.title}</h2>
          <p>{scenario.description}</p>
        </div>
        <img src={scenario.imageUrl} alt={scenario.imageAlt} loading="lazy" decoding="async" width="1100" height="760" />
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="audience-section" aria-labelledby="audience-title">
      <div className="container">
        <div className="audience-hero">
          <p className="audience-pill">За всички, които търсят имоти</p>
          <h2 id="audience-title">
            Първи до имотите, <span>важни за теб.</span>
            <br />
            Полезен за търсещи и за брокери.
          </h2>
          <p>
            Получавай новите обяви веднага и действай преди останалите. Спести време, намери повече възможности и затвори сделка по-бързо.
          </p>
        </div>
        <div className="audience-grid">
          {audiences.map((audience, index) => {
            const Icon = audienceIcons[index];
            return <IconCard key={audience.title} icon={Icon} {...audience} />;
          })}
        </div>
      </div>
    </section>
  );
}

function PhotoShowcase() {
  return (
    <section className="photo-section" aria-labelledby="photo-title">
      <div className="container">
        <div className="photo-heading">
          <SectionHeader
            align="left"
            eyebrow="Контекст"
            title="Имотни ситуации, не абстрактни обещания."
            description="Сайтът остава близо до реалното търсене: квартали, бюджет, подходящо жилище и работа с повече от един сценарий."
          />
        </div>
        <div className="photo-grid">
          {photoShowcase.map((photo) => (
            <PhotoCard key={photo.title} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section section-white" id="cena">
      <div className="container pricing-layout">
        <SectionHeader align="left" eyebrow={pricing.eyebrow} title={pricing.title} description="Цената е лесна за разбиране и съобразена с началната версия на продукта." />
        <PricingCard
          price={pricing.price}
          period={pricing.period}
          suitableFor={pricing.suitableFor}
          note={pricing.note}
          inclusions={pricing.inclusions}
          cta={
            <ButtonLink href={telegramUrl} className="pricing-button" showTelegramIcon>
              {pricing.cta}
            </ButtonLink>
          }
        />
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="container faq-layout">
        <SectionHeader eyebrow="Въпроси" title="Кратко и по същество." description="Отговори на най-важното преди да започнеш." />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="container final-cta-card">
        <div>
          <p className="section-eyebrow">Готов ли си?</p>
          <h2 id="final-cta-title">{finalCta.title}</h2>
          <p>{finalCta.description}</p>
        </div>
        <ButtonLink href={telegramUrl} className="final-cta-button" showTelegramIcon>
          {finalCta.cta}
        </ButtonLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo-link" aria-label="imot.ly начало">
            <img className="logo-image" src="/assets/imotly-logo.png" alt="" aria-hidden="true" />
            <span className="brand-word">IMOT.LY</span>
          </a>
          <p className="footer-powered">
            <span>Power By</span>
            <a href="https://agiledelivery.eu" target="_blank" rel="noreferrer" aria-label="AgileDelivery website">
              <img src="/assets/agile-delivery-logo.svg" alt="" aria-hidden="true" />
              <span>AgileDelivery</span>
            </a>
          </p>
        </div>

        <address className="footer-contact">
          <span>Контакти:</span>
          <a href="mailto:info@agiledelivery.eu">info@agiledelivery.eu</a>
          <span aria-hidden="true">&</span>
          <a href="tel:+359898203128">+359 898 203 128</a>
        </address>
      </div>
    </footer>
  );
}

export default App;
