import { FamilyNote } from "@/components/family-note";

const START_STEPS = [
  "Find your winter zone and climate in this app.",
  "Pick a nut marked “Grow here”.",
  "Choose named cultivars where available, and a partner if the plant needs one. Use planting seed for peanuts.",
  "Test drainage before you dig.",
  "Water deeply the first two summers.",
  "Be patient: most nut trees take years to bear. Peanuts take one summer.",
  "Dry your harvest fully and read Stay Safe before you eat or share.",
];

const SAFETY: { title: string; body: string; source?: { href: string; label: string } }[] = [
  {
    title: "Mold",
    body: "Throw out any nut that is moldy, shriveled, discolored, or tastes bitter or stale. Some molds make aflatoxin, a poison you cannot cook out. Dry nuts fully and store them cool and dry.",
    source: {
      href: "https://www.fda.gov/food/natural-toxins-food/mycotoxins",
      label: "FDA, Mycotoxins",
    },
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
    body: "Do not harvest ginkgo seeds to eat. The fruit can irritate skin; wear gloves if you have to clean it up. Poison Control says not to eat ginkgo seeds, raw or roasted. A large amount has been followed by seizures. This guide does not give a safe number. If someone eats an unknown amount, call Poison Control at 1-800-222-1222.",
    source: {
      href: "https://www.poison.org/articles/ginkgo-biloba-risks-benefits-181",
      label: "Poison Control, Ginkgo biloba risks",
    },
  },
  {
    title: "Cashew",
    body: "Never crack raw cashew shells, and do not try to roast them at home. University of Florida extension says homeowners should not shell or eat nuts from a backyard tree. Leave the shell and the kernel to commercial processors.",
    source: {
      href: "https://edis.ifas.ufl.edu/publication/HS377",
      label: "UF/IFAS, Cashew apple in the Florida home landscape",
    },
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
  {
    term: "Juglone",
    meaning:
      "A chemical from walnut roots, leaves, and husks. It commonly injures tomato, potato, pepper, and eggplant. It does not injure every garden plant.",
  },
  { term: "Aflatoxin", meaning: "A poison made by some molds on nuts." },
  { term: "Tannin", meaning: "The bitter part of acorns." },
  { term: "Hull and husk", meaning: "The outer cover around the shell." },
];

const SOURCES: { topic: string; label: string; href: string }[] = [
  {
    topic: "Winter zones",
    label: "USDA Plant Hardiness Zone Map, how to use the maps",
    href: "https://planthardiness.ars.usda.gov/pages/how-to-use-the-maps",
  },
  {
    topic: "Peanut planting",
    label: "UGA Extension, Peanut planting (soil at 4 inches, 68°F for three days)",
    href: "https://site.extension.uga.edu/plowpoints/2016/04/peanut-planting/",
  },
  {
    topic: "Juglone",
    label: "Wisconsin Horticulture, Black walnut toxicity",
    href: "https://hort.extension.wisc.edu/articles/black-walnut-toxicity/",
  },
  {
    topic: "Cashew nuts at home",
    label: "UF/IFAS HS377, Cashew apple in the Florida home landscape",
    href: "https://edis.ifas.ufl.edu/publication/HS377",
  },
  {
    topic: "Ginkgo seeds",
    label: "Poison Control, Ginkgo biloba risks and benefits",
    href: "https://www.poison.org/articles/ginkgo-biloba-risks-benefits-181",
  },
  {
    topic: "Aflatoxin and other mycotoxins",
    label: "FDA, Mycotoxins",
    href: "https://www.fda.gov/food/natural-toxins-food/mycotoxins",
  },
  {
    topic: "Bitter almond and stone-fruit kernels",
    label: "FDA, Natural toxins in food",
    href: "https://www.fda.gov/food/chemical-contaminants-pesticides/natural-toxins-food",
  },
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
            {item.source ? (
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Source:{" "}
                <a className="underline" href={item.source.href} target="_blank" rel="noreferrer">
                  {item.source.label}
                </a>
              </p>
            ) : null}
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

export function SourcesView() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <header>
        <p className="text-sm font-medium tracking-wide text-moss">Where the claims come from</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Sources</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Zone ranges, climate-fit labels, and pollination notes in this guide are a rough
          screen. Cultivar and local conditions can change the result. Confirm a pair, a
          chill requirement, or a pesticide question with your nursery or county extension.
        </p>
      </header>
      <ul className="flex flex-col gap-3">
        {SOURCES.map((item) => (
          <li key={item.href} className="border-t border-line pt-3">
            <p className="text-sm font-medium text-ink">{item.topic}</p>
            <a
              className="mt-1 block text-sm leading-relaxed text-moss underline"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
