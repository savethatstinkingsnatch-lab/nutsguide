import {
  CLIMATES,
  CLIMATE_RULES,
  PLANTS,
  ZONES,
  climateById,
  fitFor,
  zoneSentence,
  type Fit,
} from "@/data/guide";
import { useGrove } from "@/lib/grove-state";
import { FitBadge } from "@/components/fit-badge";

const ORDER: Fit[] = ["grow", "stretch", "skip"];

const GROUP_COPY: Record<Fit, { title: string; line: string }> = {
  grow: {
    title: "Grow these",
    line: "Winter zone and season character both line up.",
  },
  stretch: {
    title: "A stretch",
    line: "Possible with the right cultivar, site, or extra care — not the easy yes.",
  },
  skip: {
    title: "Skip for now",
    line: "The climate is working against you. A different nut will be kinder.",
  },
};

export function ClimateView() {
  const { zone, climate, setZone, setClimate, openPlant, selected } = useGrove();
  const place = climateById(climate);
  const zoneInfo = ZONES.find((z) => z.zone === zone) ?? ZONES[3];

  const grouped = ORDER.map((fit) => ({
    fit,
    plants: PLANTS.filter((p) => fitFor(p, zone, climate) === fit),
  }));

  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-moss">The climate guide</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
          Match the nut to the sky you actually have.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Winter low, winter chill, summer heat, and the weather at harvest. Those four
          things decide more than fertilizer, and they are why a zone number by itself
          misleads beginners.
        </p>
      </header>

      <ol className="grid gap-3 sm:grid-cols-2">
        {CLIMATE_RULES.map((rule) => (
          <li key={rule.n} className="rounded-card border border-line bg-paper p-5">
            <p className="font-display text-sm text-amber">{rule.n}</p>
            <h2 className="mt-1 font-display text-2xl text-ink">{rule.title}</h2>
            <p className="mt-1 text-sm font-medium text-moss">{rule.kicker}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{rule.body}</p>
          </li>
        ))}
      </ol>

      <section className="flex flex-col gap-4">
        <div>
          <h2 className="font-display text-3xl text-ink">Your winter low</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Use a typical cold night, not the record. These bands are the USDA winter
            zones. They work outside the United States too — match the temperature, not
            the country. If you already know your zone, tap it.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-9" role="radiogroup" aria-label="Winter zone">
          {ZONES.map((z) => {
            const on = z.zone === zone;
            return (
              <button
                key={z.zone}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setZone(z.zone)}
                className={`flex min-h-11 flex-col items-center justify-center rounded-xl border px-1 py-2 transition-colors ${
                  on
                    ? "border-moss bg-moss text-cream"
                    : "border-line bg-paper text-ink hover:border-moss"
                }`}
              >
                <span className="font-display text-lg leading-none">{z.zone}</span>
                <span className={`mt-1 text-xs leading-tight ${on ? "text-cream/80" : "text-ink-soft"}`}>
                  zone
                </span>
              </button>
            );
          })}
        </div>
        <p className="rounded-xl bg-moss-soft px-4 py-3 text-sm text-moss-deep">
          <span className="font-medium">Zone {zone}.</span> {zoneInfo.low}. {zoneInfo.hint}.
          That is only rule one — survival of the wood.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <div>
          <h2 className="font-display text-3xl text-ink">The character of the year</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Two places can share a zone and still fail different nuts. A dry valley and a
            humid summer are not the same climate.
          </p>
        </div>
        <div className="flex flex-col gap-2" role="radiogroup" aria-label="Climate character">
          {CLIMATES.map((c) => {
            const on = c.id === climate;
            return (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setClimate(c.id)}
                className={`flex items-start gap-3 rounded-card border px-4 py-3 text-left transition-colors ${
                  on ? "border-moss bg-paper" : "border-line bg-cream hover:border-moss"
                }`}
              >
                <span
                  className={`mt-1 size-4 shrink-0 rounded-full border-2 ${
                    on ? "border-moss bg-moss" : "border-line bg-paper"
                  }`}
                  aria-hidden
                />
                <span>
                  <span className="block font-medium text-ink">{c.name}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink-soft">{c.line}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-ink-soft">{c.places}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div>
          <h2 className="font-display text-3xl text-ink">What this sky can grow</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Zone {zone}, {place.name.toLowerCase()}.{" "}
            {grouped.find((g) => g.fit === "grow")?.plants.length ?? 0} clear matches. Saved
            plants stay in your plan.
          </p>
        </div>
        {grouped.map(({ fit, plants }) => (
          <div key={fit}>
            <h3 className="font-display text-xl text-ink">{GROUP_COPY[fit].title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{GROUP_COPY[fit].line}</p>
            {plants.length === 0 ? (
              <p className="mt-3 text-sm text-ink-soft">Nothing in this group for the sky you picked.</p>
            ) : (
              <ul className="mt-3 flex flex-col gap-2">
                {plants.map((plant) => (
                  <li key={plant.id}>
                    <button
                      type="button"
                      onClick={() => openPlant(plant.id)}
                      className="flex w-full flex-col gap-2 rounded-card border border-line bg-paper px-4 py-3 text-left hover:border-moss sm:flex-row sm:items-start sm:justify-between"
                    >
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-ink">{plant.name}</span>
                          <span className="text-xs text-ink-soft">
                            {plant.form} · {plant.difficulty}
                          </span>
                          {selected.includes(plant.id) ? (
                            <span className="text-xs font-medium text-moss">In your plan</span>
                          ) : null}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                          {zoneSentence(plant, zone)} {plant.climateWhy[climate]}
                        </span>
                      </span>
                      <FitBadge fit={fit} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
