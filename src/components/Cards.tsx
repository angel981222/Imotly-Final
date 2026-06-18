import { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`card feature-card group ${isOpen ? "is-open" : ""}`}>
      <button
        className="feature-card-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="icon-badge" aria-hidden="true">
          <Icon size={20} strokeWidth={2} />
        </span>
        <span className="feature-card-title">{title}</span>
        <ChevronDown className="feature-card-chevron" size={19} aria-hidden="true" />
      </button>
      <p className="feature-card-description">{description}</p>
    </article>
  );
}

type SimpleCardProps = {
  title: string;
  description: string;
};

export function SimpleCard({ title, description }: SimpleCardProps) {
  return (
    <article className="card">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-4 leading-7 text-ink/70">{description}</p>
    </article>
  );
}
