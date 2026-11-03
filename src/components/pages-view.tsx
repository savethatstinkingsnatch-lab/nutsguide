import { FamilyNote } from "@/components/family-note";

const START_STEPS = [
  "Find your winter zone and climate in this app.",
  "Pick a nut marked “Grow here”.",
  "Buy named, grafted plants, and a partner if the plant needs one.",
  "Test drainage before you dig.",
  "Water deeply the first two summers.",
  "Be patient: most nut trees take years to bear. Peanuts take one summer.",
  "Dry your harvest fully and read Stay Safe before you eat or share.",
];

const SAFETY = [
  {
    title: "Mold",
    body: "Throw out any nut that is moldy, shriveled, discolored, or tastes bitter or stale. Some molds make aflatoxin, a poison you cannot cook out. Dry nuts fully and store them cool and dry.",
  },
  {
    title: "Allergies",
    body: "Tree nut and peanut allergies can be severe. Ask before you share. Label gifts.",
  },
  {
    title: "Storage",
    body: "Shelled nuts go rancid. Keep them in sealed jars in the refrigerator for months or the freezer for a year or more. Dry nuts in the shell keep longer in a cool, dry place.",
  },
  {
    title: "Acorns",
    body: "Oak acorns are edible only after the bitter tannins are soaked out. Crack and grind them, then soak in changes of water until the water stays clear and they no longer taste bitter. Never eat raw bitter acorns.",
  },
  {
    title: "Ginkgo",
    body: "The fruit smells bad and can irritate skin like poison ivy. Wear gloves. Eat only a few cooked ginkgo nuts at a time. Never eat them raw, and do not give them to young children.",
  },
  {
    title: "Cashew",
    body: "Never crack raw cashew shells. See the cashew page.",
  },
  {
    title: "Wild nuts",
    body: "Never eat a wild nut you cannot identify for certain.",
  },
];

const GLOSSARY: { term: string; meaning: string }[] = [
  { term: "Cultivar", meaning: "A named variety, like Kanza pecan." },
  { term: "Grafted", meaning: "A named variety joined onto a root. It bears sooner and grows true." },
  { term: "Seedling", meaning: "Grown from a nut. It's slower, and you can't be sure what nuts it will make." },
  { term: "Pollinizer", meaning: "The partner tree that supplies pollen." },
  {
    term: "Type I / Type II",
    meaning: "Pecans that shed pollen first, or have female flowers ready first.",
  },
  {
    term: "Chill hours",
    meaning: "Winter hours between about 32 and 45°F that a tree needs before it blooms.",
  },
  { term: "Juglone", meaning: "A chemical from walnut roots and husks that harms some plants." },
  { term: "Aflatoxin", meaning: "A poison made by some molds on nuts." },
  { term: "Tannin", meaning: "The bitter part of acorns." },
  { term: "Hull and husk", meaning: "The outer cover around the shell." },
];

export function StartView() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <p className="text-sm font-medium tracking-wide text-moss">Start here</p>
        <h1 className="mt-2 font-display text-4xl text-ink">New to nuts?</h1>
      </header>
      <ol className="flex flex-col gap-3">
        {START_STEPS.map((step, i) => (
          <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink">
            <span className="font-display text-amber">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SafetyView() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <p className="text-sm font-medium tracking-wide text-moss">Before you eat or share</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Stay safe with nuts</h1>
      </header>
      <ul className="flex flex-col gap-4">
        {SAFETY.map((item) => (
          <li key={item.title} className="rounded-card border border-line bg-paper p-4">
            <h2 className="font-display text-xl text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ul>
      <FamilyNote />
    </div>
  );
}

export function GlossaryView() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <p className="text-sm font-medium tracking-wide text-moss">Words the nursery uses</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Glossary</h1>
      </header>
      <dl className="flex flex-col gap-3">
        {GLOSSARY.map((item) => (
          <div key={item.term} className="border-t border-line pt-3">
            <dt className="font-medium text-ink">{item.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{item.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function AboutView() {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <header>
        <p className="text-sm font-medium tracking-wide text-moss">About and disclaimer</p>
        <h1 className="mt-2 font-display text-4xl text-ink">About and disclaimer</h1>
      </header>
      <p className="text-sm leading-relaxed text-ink-soft">
        This pocket guide is for learning. Check your local county extension office for advice
        in your area. Never eat a wild nut or plant you cannot identify for certain. If someone
        may have eaten a poisonous plant, call Poison Control at 1-800-222-1222. For pets, call
        your vet. Blue and the Awesome Dudes are not responsible for illness, injury, or crop
        loss. Part of The Education Revolution pocket guide series.
      </p>
    </div>
  );
}
