import { useMemo, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { PLANTS, fitFor, plantById, zoneSentence } from "@/data/guide";
import { useGrove } from "@/lib/grove-state";
import { FitBadge } from "@/components/fit-badge";
import { FamilyNote } from "@/components/family-note";

export function GuideView() {
  const grove = useGrove();
  const { zone, climate, openId, openPlant, toggleSelected, selected } = grove;
  const [query, setQuery] = useState("");
  const [onlyFit, setOnlyFit] = useState(false);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLANTS.filter((p) => {
      const fit = fitFor(p, zone, climate);
      if (onlyFit && fit === "skip") return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.latin.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );
    });
  }, [query, onlyFit, zone, climate]);

  const open = openId ? plantById(openId) : undefined;

  if (open) {
    const fit = fitFor(open, zone, climate);
    const saved = selected.includes(open.id);
    return (
      <article className="flex flex-col gap-6">
        <button
          type="button"
          onClick={() => openPlant(null)}
          className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-medium text-moss"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All nuts
        </button>
        <header>
          <div className="flex flex-wrap items-center gap-2">
            <FitBadge fit={fit} />
            <span className="text-xs text-ink-soft">
              {open.form} · {open.difficulty} · zones {open.zoneMin}–{open.zoneMax}
            </span>
          </div>
          <h1 className="mt-3 font-display text-4xl text-ink">{open.name}</h1>
          <p className="mt-1 text-sm italic text-ink-soft">{open.latin}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{open.tagline}</p>
        </header>

        <p className="max-w-2xl rounded-card border border-line bg-paper p-4 text-sm leading-relaxed text-ink">
          {zoneSentence(open, zone)} {open.climateWhy[climate]}
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-ink">{open.startHere}</p>

        <dl className="grid gap-3 sm:grid-cols-2">
          {(
            [
              ["First crop", open.years],
              ["Mature size", open.size],
              ["Spacing", open.spacing],
              ["Sun", open.sun],
              ["Soil", open.soil],
              ["Water", open.water],
              ["Winter chill", open.chill],
              ["Harvest", open.harvest],
            ] as const
          ).map(([label, value]) => (
            <div key={label} className="rounded-card border border-line bg-cream px-4 py-3">
              <dt className="text-xs font-medium tracking-wide text-moss">{label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <section>
          <h2 className="font-display text-2xl text-ink">Pollination</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{open.pollination}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">How to start</h2>
          <ol className="mt-3 flex max-w-2xl flex-col gap-3">
            {open.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="font-display text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">What usually goes wrong</h2>
          <ul className="mt-3 flex max-w-2xl list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-soft">
            {open.pitfalls.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        {open.id === "almond" ? (
          <p className="max-w-2xl text-sm leading-relaxed text-ink">
            See also Volume 11: Fruit Trees for chill hours, planting, and pollination partners.
          </p>
        ) : null}

        {open.id === "black-walnut" ? <FamilyNote /> : null}

        <section className="max-w-2xl rounded-card bg-moss-soft p-4">
          <h2 className="font-display text-xl text-moss-deep">What to buy</h2>
          <p className="mt-2 text-sm leading-relaxed text-moss-deep">{open.buy}</p>
        </section>

        <button
          type="button"
          onClick={() => toggleSelected(open.id)}
          className={`inline-flex min-h-11 items-center justify-center self-start rounded-full px-5 text-sm font-medium ${
            saved ? "bg-line text-ink" : "bg-moss text-cream"
          }`}
        >
          {saved ? "Remove from my plan" : "Add to my plan"}
        </button>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-moss">Field guide</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Eleven nuts, told straight.</h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Trees, one shrub, and the peanut — which is not a tree. Every entry is written
          for a first planting, and each one already knows the climate you set.
        </p>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search nuts</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or latin"
            className="min-h-11 w-full rounded-full border border-line bg-paper pr-4 pl-10 text-sm text-ink outline-none placeholder:text-ink-soft focus:border-moss"
          />
        </label>
        <button
          type="button"
          aria-pressed={onlyFit}
          onClick={() => setOnlyFit((v) => !v)}
          className={`min-h-11 rounded-full border px-4 text-sm font-medium ${
            onlyFit ? "border-moss bg-moss text-cream" : "border-line bg-paper text-ink"
          }`}
        >
          Hide skips
        </button>
      </div>

      {list.length === 0 ? (
        <p className="text-sm text-ink-soft">Nothing matches that search in this climate.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {list.map((plant) => {
            const fit = fitFor(plant, zone, climate);
            return (
              <li key={plant.id}>
                <button
                  type="button"
                  onClick={() => openPlant(plant.id)}
                  className="flex w-full flex-col gap-2 rounded-card border border-line bg-paper px-4 py-4 text-left hover:border-moss"
                >
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-2xl text-ink">{plant.name}</span>
                    <FitBadge fit={fit} />
                    {selected.includes(plant.id) ? (
                      <span className="text-xs font-medium text-moss">In your plan</span>
                    ) : null}
                  </span>
                  <span className="text-sm italic text-ink-soft">{plant.latin}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{plant.tagline}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
