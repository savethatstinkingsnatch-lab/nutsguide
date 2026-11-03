import { CHECKLIST, climateById, fitFor, plantById } from "@/data/guide";
import { useGrove } from "@/lib/grove-state";
import { FitBadge } from "@/components/fit-badge";

export function PlanView() {
  const { zone, climate, selected, toggleSelected, checks, toggleCheck, openPlant, setView } =
    useGrove();
  const place = climateById(climate);
  const plants = selected.map((id) => plantById(id)).filter((p) => p != null);
  const done = CHECKLIST.filter((item) => checks.includes(item.id)).length;

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-moss">My planting plan</p>
        <h1 className="mt-2 font-display text-4xl text-ink">A short list you can actually plant.</h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Saved on this device for zone {zone}, {place.name.toLowerCase()}. Nothing here is
          an account — clear the browser’s saved data and the list goes with it.
        </p>
      </header>

      <section>
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-2xl text-ink">Plants</h2>
          <button
            type="button"
            onClick={() => setView("guide")}
            className="min-h-11 text-sm font-medium text-moss"
          >
            Browse the guide
          </button>
        </div>
        {plants.length === 0 ? (
          <p className="mt-3 max-w-2xl rounded-card border border-dashed border-line bg-cream px-4 py-6 text-sm leading-relaxed text-ink-soft">
            Nothing saved yet. Start from the climate guide and add the nuts marked “Grow
            here.” A stretch plant is allowed — just read why it is a stretch before you
            buy it.
          </p>
        ) : (
          <ul className="mt-3 flex flex-col gap-2">
            {plants.map((plant) => {
              const fit = fitFor(plant, zone, climate);
              return (
                <li
                  key={plant.id}
                  className="rounded-card border border-line bg-paper px-4 py-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openPlant(plant.id)}
                      className="font-medium text-ink underline decoration-line underline-offset-4"
                    >
                      {plant.name}
                    </button>
                    <FitBadge fit={fit} />
                    <button
                      type="button"
                      onClick={() => toggleSelected(plant.id)}
                      className="ml-auto min-h-11 text-sm text-ink-soft"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft">
                    {plant.size}. Space {plant.spacing.toLowerCase()}.
                  </p>
                  {plant.needsPartner ? (
                    <p className="mt-2 text-sm leading-relaxed text-amber">
                      Needs a partner: {plant.pollination}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{plant.pollination}</p>
                  )}
                  {fit === "skip" ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      This sky is a poor match. Open the entry before you spend the money.
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
        {plants.some((p) => p.id === "black-walnut" || p.id === "english-walnut") ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Walnut note: keep these well away from the vegetable garden. Juglone from the
            roots and husks stunts tomatoes, apples, and a long list of other plants.
          </p>
        ) : null}
        {plants.some((p) => p.id === "cashew") ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink">
            Cashew note: the raw shell oil blisters skin. Do not add this tree unless you
            already know a safe way to process it.
          </p>
        ) : null}
      </section>

      <section className="max-w-2xl">
        <h2 className="font-display text-2xl text-ink">Before you dig</h2>
        <p className="mt-1 text-sm text-ink-soft">
          {done} of {CHECKLIST.length} checked. This list is the same one a patient
          neighbor would walk you through.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {CHECKLIST.map((item) => {
            const on = checks.includes(item.id);
            return (
              <li key={item.id}>
                <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-card border border-line bg-paper px-4 py-3">
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-1 size-4 accent-moss"
                  />
                  <span className={`text-sm leading-relaxed ${on ? "text-ink-soft" : "text-ink"}`}>
                    {item.label}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
