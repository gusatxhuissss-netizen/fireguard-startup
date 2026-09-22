import { Flame } from "lucide-react";

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup ${inverse ? "brand-lockup--inverse" : ""}`} aria-label="FireGuard">
      <span className="brand-symbol" aria-hidden="true">
        <span className="brand-symbol__halo" />
        <Flame size={compact ? 17 : 20} strokeWidth={2.7} />
      </span>
      {!compact && <span className="brand-wordmark">Fire<span>Guard</span></span>}
    </span>
  );
}

export default BrandMark;
