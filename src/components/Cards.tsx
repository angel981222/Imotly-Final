import { ChevronDown, ExternalLink, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export function IconCard({ icon: Icon, title, description, index }: IconCardProps) {
  return (
    <article className="icon-card reveal-card">
      <div className="icon-card-topline">
        <span className="icon-badge" aria-hidden="true">
          <Icon size={21} strokeWidth={2} />
        </span>
        {typeof index === "number" ? <span className="card-index">0{index + 1}</span> : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

type ValueItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ValueItem({ icon: Icon, title, description }: ValueItemProps) {
  return (
    <article className="value-item">
      <span className="value-icon" aria-hidden="true">
        <Icon size={19} strokeWidth={2.2} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

type ProductFrameProps = {
  children: ReactNode;
  label: string;
};

export function ProductFrame({ children, label }: ProductFrameProps) {
  return (
    <div className="product-frame" aria-label={label}>
      <div className="product-frame-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {children}
    </div>
  );
}

type PricingCardProps = {
  name: string;
  duration: string;
  originalPrice: string;
  promotionalPrice: string;
  suitableFor: string;
  badge?: string;
  note?: string;
  featured?: boolean;
  cta: ReactNode;
};

export function PricingCard({ name, duration, originalPrice, promotionalPrice, suitableFor, badge, note, featured, cta }: PricingCardProps) {
  return (
    <article className={`pricing-card reveal-card ${featured ? "pricing-card-featured" : ""}`}>
      <div className="pricing-card-header">
        <div>
          <h3>{name}</h3>
          <p className="pricing-duration">{duration}</p>
        </div>
        {badge ? <span className="pricing-badge">{badge}</span> : null}
      </div>
      <div className="pricing-price-stack">
        <span className="pricing-original">{originalPrice}</span>
        <strong>{promotionalPrice}</strong>
      </div>
      <p className="pricing-suitable">{suitableFor}</p>
      {note ? <p className="pricing-note">{note}</p> : null}
      {cta}
    </article>
  );
}

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <span>{item.question}</span>
            <ChevronDown size={19} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

type PhotoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

export function PhotoCard({ title, description, imageUrl, alt }: PhotoCardProps) {
  return (
    <figure className="photo-card reveal-card">
      <img src={imageUrl} alt={alt} loading="lazy" decoding="async" width="900" height="620" />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

export function SourceLink({ children }: { children: ReactNode }) {
  return (
    <span className="source-link">
      {children}
      <ExternalLink size={13} aria-hidden="true" />
    </span>
  );
}
