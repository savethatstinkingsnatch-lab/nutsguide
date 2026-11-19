import { FamilyNote } from "@/components/family-note";

const START_STEPS = [
  "Find your winter zone and climate in this app.",
  "Pick a nut marked “Grow here”.",
  "Choose named cultivars where available, and a partner if the plant needs one. Use planting seed for peanuts. Check the tag for patents before you graft or share wood; a missing label does not prove a plant is unprotected.",
  "Soil-test first, and test drainage before you dig. Do not lime or sulfur on a guess.",
  "Water deeply when the soil under the mulch is dry, especially the first two summers. How often depends on rain and soil. A weekly watering in dry weather is a starting guideline, not a fixed calendar.",
  "Be patient: most nut trees take years to bear. Peanuts take one summer.",
  "Dry your harvest fully and read Stay Safe before you eat or share.",
];

const SAFETY: { title: string; body: string; source?: { href: string; label: string } }[] = [
  {
    title: "Mold",
    body: "Throw out any nut that is moldy, shriveled, discolored, or tastes bitter or stale. Some molds make aflatoxin, a poison you cannot cook out (U.S. Food and Drug Administration, Mycotoxins). Dry nuts fully before you store them. Oregon State University Extension (Olsen and Raab, FS 146, revised September 2002) says to begin drying walnuts and hazelnuts within 24 hours of harvest; dry them with good airflow at about 95 to 105°F, and do not go above 110°F. Walnuts are dry enough when the divider between the halves breaks with a snap, not a bend. Store cool and dry. OSU says the greatest storage losses come from rancidity, mold, and Indian meal moth; keep in-shell nuts in a closed container.",
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
    body: "Shelled nuts go rancid. OSU FS 146: if you cannot refrigerate or freeze hazelnuts and walnuts, store them in as cool a room as possible, 55°F or lower, and as dry as possible — they will not keep quality as long as refrigerated or frozen nuts. Chestnuts are different: they are a perishable, starchy food, more like an apple or potato than a dry tree nut. Clean and refrigerate them soon after harvest. OSU: fresh chestnuts in the shell last about 1 month in the refrigerator; frozen fresh chestnuts about 2 to 3 months at 32°F, or about 1 year at 0°F. Storing fresh chestnuts outside a fridge or freezer is not practical; they usually mold within 2 weeks.",
    source: {
      href: "https://ir.library.oregonstate.edu/downloads/q524jp452",
      label: "Olsen, J., and C. Raab. Harvesting, Handling, and Storing Nuts from the Home Orchard. FS 146. Oregon State University Extension. Revised September 2002.",
    },
  },
  {
    title: "Juglone",
    body: "Black walnut (Juglans nigra) produces juglone, which prevents many plants from growing under or near it. University of Wisconsin Extension (Joy, Hudelson, and Jull, UW Plant Disease Facts D0021, revised 28 Feb. 2024) says the effect of a mature tree can extend 50 to 80 feet from the trunk, with the greatest toxicity inside the dripline. Tomato, potato, eggplant, and pepper are particularly sensitive. Beans, beet, carrot, corn, onion, and squash are often listed as tolerant. The Wisconsin lists are based on observation, not formal testing, and sources sometimes disagree — the fact sheet says so. Related trees including butternut and shagbark hickory also produce juglone, in lower amounts. Do not use black walnut bark or wood as mulch. Finished, well-rotted compost is not the same as fresh husks or chips.",
    source: {
      href: "https://hort.extension.wisc.edu/articles/black-walnut-toxicity/",
      label: "Wisconsin Horticulture, Black walnut toxicity (D0021, revised 28 Feb. 2024)",
    },
  },
  {
    title: "Thousand cankers and walnut shipping",
    body: "Thousand cankers disease is a fungus (Geosmithia morbida) spread by the walnut twig beetle. It has killed large numbers of black walnuts, especially in the West. USDA APHIS (page last modified 1 Nov. 2025) says there is no federal regulation for the disease; several states have set up their own exterior quarantines on walnut plants, wood, and often hardwood firewood. Nuts, nut meats, and hulls are commonly exempt, but the rule in front of you is the one that counts. Check your state department of agriculture before you move walnut nursery stock, logs, or firewood across a state line. Official examples include Indiana’s exterior TCD quarantine and Missouri’s 2 CSR 70-11.060; lists of infested or regulated states change.",
    source: {
      href: "https://www.aphis.usda.gov/plant-pests-diseases/thousand-cankers",
      label: "USDA APHIS, Thousand Cankers Disease (last modified 1 Nov. 2025)",
    },
  },
  {
    title: "Plant patents",
    body: "Some named varieties are protected by plant patents or other restrictions. A missing patent label does not prove a plant is unprotected. Propagating a protected variety without permission may violate those rights, even for personal use. Check the variety’s status before grafting, layering, or sharing plants. The tag may say “PP” with a number, or “Propagation prohibited.”",
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
      "A chemical from walnut roots, leaves, and husks. It commonly injures tomato, potato, pepper, and eggplant. University of Wisconsin Extension: the effect of a mature black walnut can extend 50 to 80 feet from the trunk, greatest inside the dripline. Shagbark hickory also produces juglone, in lower amounts. It does not injure every garden plant.",
  },
  {
    term: "Eastern filbert blight",
    meaning:
      "A canker disease (Anisogramma anomala) that kills susceptible hazelnuts. Buy resistant cultivars. Oregon State University notes that some trees with the older (Gasaway) resistance gene can still be infected by newer strains.",
  },
  {
    term: "Thousand cankers",
    meaning:
      "A disease of walnut (fungus plus walnut twig beetle). APHIS: no federal quarantine; several states restrict moving walnut plants and wood. Check your state before you ship.",
  },
  { term: "Aflatoxin", meaning: "A poison made by some molds on nuts. You cannot cook it out." },
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
  {
    topic: "Nut tree years and spacing (Kentucky examples)",
    label: "Masabni, J. G., J. G. Strang, R. T. Jones, R. Bessin, and J. Hartman. Nut Tree Growing in Kentucky. ID-77. University of Kentucky Cooperative Extension. Copyright 2007. Search ID-77 at publications.ca.uky.edu.",
    href: "https://publications.ca.uky.edu",
  },
  {
    topic: "Harvesting, drying, and storing hazelnuts, walnuts, and chestnuts",
    label: "Olsen, J., and C. Raab. Harvesting, Handling, and Storing Nuts from the Home Orchard. FS 146. Oregon State University Extension. Revised September 2002.",
    href: "https://ir.library.oregonstate.edu/downloads/q524jp452",
  },
  {
    topic: "Hazelnut varieties and eastern filbert blight",
    label: "Oregon State University Extension. Growing Hazelnuts in the Pacific Northwest: Varieties. EM 9073. Also EC 1499, Detecting and Controlling Eastern Filbert Blight.",
    href: "https://catalog.extension.oregonstate.edu/em9073",
  },
  {
    topic: "Eastern filbert blight (fact sheet)",
    label: "Oregon State University Extension. Detecting and Controlling Eastern Filbert Blight. EC 1499.",
    href: "https://catalog.extension.oregonstate.edu/ec1499",
  },
  {
    topic: "Pecan Type I and Type II pollination",
    label: "Oklahoma State University Extension, Managing Pecans in the Home Landscape, and Texas A&M AgriLife pecan pollination charts. Confirm a current pair with your extension.",
    href: "https://extension.okstate.edu",
  },
  {
    topic: "Thousand cankers disease and walnut shipping",
    label: "USDA APHIS. Thousand Cankers Disease. No federal regulation; several states have exterior quarantines. Page last modified 1 Nov. 2025.",
    href: "https://www.aphis.usda.gov/plant-pests-diseases/thousand-cankers",
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
          Years to first crop and spacing for several temperate nuts follow University of
          Kentucky ID-77 as labeled Kentucky examples. Where a university or government
          source differs from an earlier draft, this edition follows the university or
          government source. Rules change; confirm before you plant or ship.
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
