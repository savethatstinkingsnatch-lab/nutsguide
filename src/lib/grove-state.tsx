import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ClimateId, ViewId } from "@/data/guide";

const STORAGE_KEY = "nutgrove.v1";

export type GroveState = {
  zone: number;
  climate: ClimateId;
  view: ViewId;
  selected: string[];
  checks: string[];
  openId: string | null;
};

const DEFAULTS: GroveState = {
  zone: 6,
  climate: "temperate",
  view: "climate",
  selected: [],
  checks: [],
  openId: null,
};

type GroveApi = GroveState & {
  ready: boolean;
  setZone: (zone: number) => void;
  setClimate: (climate: ClimateId) => void;
  setView: (view: ViewId) => void;
  openPlant: (id: string | null) => void;
  toggleSelected: (id: string) => void;
  toggleCheck: (id: string) => void;
};

const Ctx = createContext<GroveApi | null>(null);

function sanitize(raw: unknown): GroveState {
  const base = { ...DEFAULTS };
  if (!raw || typeof raw !== "object") return base;
  const o = raw as Partial<GroveState>;
  const zone = typeof o.zone === "number" && o.zone >= 3 && o.zone <= 11 ? o.zone : base.zone;
  const climates: ClimateId[] = [
    "cold",
    "temperate",
    "mediterranean",
    "humid",
    "subtropical",
    "tropical",
  ];
  const climate = climates.includes(o.climate as ClimateId)
    ? (o.climate as ClimateId)
    : base.climate;
  const views: ViewId[] = ["climate", "guide", "planting", "seasons", "plan"];
  const view = views.includes(o.view as ViewId) ? (o.view as ViewId) : base.view;
  const selected = Array.isArray(o.selected)
    ? o.selected.filter((id): id is string => typeof id === "string")
    : [];
  const checks = Array.isArray(o.checks)
    ? o.checks.filter((id): id is string => typeof id === "string")
    : [];
  return { zone, climate, view, selected, checks, openId: null };
}

export function GroveProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GroveState>(DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState(sanitize(JSON.parse(raw)));
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const { openId: _open, ...persisted } = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [state, ready]);

  const api = useMemo<GroveApi>(
    () => ({
      ...state,
      ready,
      setZone: (zone) => setState((s) => ({ ...s, zone })),
      setClimate: (climate) => setState((s) => ({ ...s, climate })),
      setView: (view) => setState((s) => ({ ...s, view, openId: null })),
      openPlant: (id) => setState((s) => ({ ...s, view: "guide", openId: id })),
      toggleSelected: (id) =>
        setState((s) => ({
          ...s,
          selected: s.selected.includes(id)
            ? s.selected.filter((x) => x !== id)
            : [...s.selected, id],
        })),
      toggleCheck: (id) =>
        setState((s) => ({
          ...s,
          checks: s.checks.includes(id) ? s.checks.filter((x) => x !== id) : [...s.checks, id],
        })),
    }),
    [state, ready],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGrove() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useGrove must be used inside GroveProvider");
  return ctx;
}
