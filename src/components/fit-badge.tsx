import type { Fit } from "@/data/guide";
import { fitLabel } from "@/data/guide";

export function FitBadge({ fit }: { fit: Fit }) {
  const tone =
    fit === "grow"
      ? "bg-moss-soft text-moss-deep"
      : fit === "stretch"
        ? "bg-amber-soft text-amber"
        : "bg-line text-ink-soft";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tone}`}>
      {fitLabel(fit)}
    </span>
  );
}
