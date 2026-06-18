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
  icon?: LucideIcon;
  title: string;
  description: string;
};

export function SimpleCard({ icon: Icon, title, description }: SimpleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`card simple-card ${isOpen ? "is-open" : ""}`}>
      <button
        className="simple-card-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {Icon ? (
          <span className="icon-badge" aria-hidden="true">
            <Icon size={20} strokeWidth={2} />
          </span>
        ) : null}
        <span className="simple-card-title">{title}</span>
        <ChevronDown className="simple-card-chevron" size={19} aria-hidden="true" />
      </button>
      <p className="simple-card-description">{description}</p>
    </article>
  );
}
