import { BookOpen, CalendarRange, CloudSun, Shovel, Sprout } from "lucide-react";
import type { ViewId } from "@/data/guide";
import { climateById } from "@/data/guide";
import { GroveProvider, useGrove } from "@/lib/grove-state";
import { ClimateView } from "@/components/climate-view";
import { GuideView } from "@/components/guide-view";
import { PlantingView } from "@/components/planting-view";
import { SeasonsView } from "@/components/seasons-view";
import { PlanView } from "@/components/plan-view";

const NAV: { id: ViewId; label: string; icon: typeof CloudSun }[] = [
  { id: "climate", label: "Climate", icon: CloudSun },
  { id: "guide", label: "Field guide", icon: BookOpen },
  { id: "planting", label: "Planting", icon: Shovel },
  { id: "seasons", label: "Seasons", icon: CalendarRange },
  { id: "plan", label: "My plan", icon: Sprout },
];

function Shell() {
  const { view, setView, zone, climate, selected } = useGrove();
  const place = climateById(climate);

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-parchment/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-xl leading-none text-ink">Nut Grove</p>
              <p className="mt-1 text-xs text-ink-soft">A beginner’s climate guide to growing nuts</p>
            </div>
            <button
              type="button"
              onClick={() => setView("climate")}
              className="shrink-0 rounded-full border border-line bg-paper px-3 py-2 text-left text-xs leading-snug text-ink"
            >
              <span className="block font-medium">Zone {zone}</span>
              <span className="block text-ink-soft">{place.name}</span>
            </button>
          </div>
          <nav className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1" aria-label="Guide sections">
            {NAV.map((item) => {
              const on = view === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm font-medium ${
                    on ? "bg-moss text-cream" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <Icon className="size-4" aria-hidden />
                  {item.label}
                  {item.id === "plan" && selected.length > 0 ? (
                    <span className={on ? "text-cream" : "text-moss"}>{selected.length}</span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">
        {view === "climate" ? <ClimateView /> : null}
        {view === "guide" ? <GuideView /> : null}
        {view === "planting" ? <PlantingView /> : null}
        {view === "seasons" ? <SeasonsView /> : null}
        {view === "plan" ? <PlanView /> : null}
      </main>
      <footer className="mx-auto max-w-3xl px-4 pt-4 pb-12 text-xs leading-relaxed text-ink-soft">
        A field guide for home growers, not a substitute for your local extension office.
        Cultivar lists change, and a frost pocket in your own yard can override a zone map.
      </footer>
    </div>
  );
}

export function GroveApp() {
  return (
    <GroveProvider>
      <Shell />
    </GroveProvider>
  );
}
