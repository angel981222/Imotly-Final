import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="card group">
      <div className="icon-badge" aria-hidden="true">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
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
