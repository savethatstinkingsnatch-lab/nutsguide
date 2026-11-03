export type ClimateId =
  | "cold"
  | "temperate"
  | "mediterranean"
  | "humid"
  | "subtropical"
  | "tropical";

export type Affinity = "loves" | "ok" | "struggles" | "no";

export type Fit = "grow" | "stretch" | "skip";

export type ViewId =
  | "start"
  | "climate"
  | "guide"
  | "planting"
  | "seasons"
  | "safety"
  | "glossary"
  | "about"
  | "plan";

export type NutPlant = {
  id: string;
  name: string;
  latin: string;
  form: "Tree" | "Shrub" | "Annual";
  tagline: string;
  difficulty: "Beginner" | "Intermediate" | "Patient" | "Specialist";
  zoneMin: number;
  zoneMax: number;
  affinity: Record<ClimateId, Affinity>;
  climateWhy: Record<ClimateId, string>;
  years: string;
  size: string;
  spacing: string;
  sun: string;
  soil: string;
  water: string;
  chill: string;
  pollination: string;
  needsPartner: boolean;
  harvest: string;
  startHere: string;
  steps: string[];
  pitfalls: string[];
  buy: string;
};

export const ZONES: { zone: number; low: string; hint: string }[] = [
  { zone: 3, low: "Colder than −30°F", hint: "Brutal winters" },
  { zone: 4, low: "−30 to −20°F", hint: "Very cold" },
  { zone: 5, low: "−20 to −10°F", hint: "Hard freezes" },
  { zone: 6, low: "−10 to 0°F", hint: "Below zero at times" },
  { zone: 7, low: "0 to 10°F", hint: "Freezing winters" },
  { zone: 8, low: "10 to 20°F", hint: "Mild freezes" },
  { zone: 9, low: "20 to 30°F", hint: "Light frost" },
  { zone: 10, low: "30 to 40°F", hint: "Rare frost" },
  { zone: 11, low: "Warmer than 40°F", hint: "Almost never freezes" },
];

export const CLIMATES: {
  id: ClimateId;
  name: string;
  line: string;
  places: string;
}[] = [
  {
    id: "cold",
    name: "Cold continental",
    line: "Long winters and a short to moderate summer.",
    places: "Northern plains, upper Midwest, interior New England, high elevations.",
  },
  {
    id: "temperate",
    name: "Four-season temperate",
    line: "A real winter, a warm summer, and neither one endless.",
    places: "Lower Midwest, Mid-Atlantic, inland Northwest, middle Europe.",
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    line: "Mild, wet winters with some chill, then a hot dry summer.",
    places: "California valleys, the Mediterranean basin, central Chile, parts of southern Australia.",
  },
  {
    id: "humid",
    name: "Hot humid",
    line: "A winter that still freezes, then a long, sticky summer.",
    places: "The US Southeast and other humid places that are not truly tropical.",
  },
  {
    id: "subtropical",
    name: "Subtropical",
    line: "Light frost at most, little winter chill, and a long warm season.",
    places: "Florida, coastal Texas, warm coasts, and frost-light islands.",
  },
  {
    id: "tropical",
    name: "Tropical",
    line: "No frost. Heat is the year, not a season.",
    places: "Equatorial lowlands and true tropical coasts.",
  },
];

export const CLIMATE_RULES: { n: string; title: string; kicker: string; body: string }[] = [
  {
    n: "01",
    title: "Winter low",
    kicker: "Will the wood survive?",
    body: "A winter zone is the typical coldest night, not the worst night in fifty years. “Zone 7” on a tag means the wood usually lives through 0 to 10°F. A frost pocket, a brand-new planting, or the wrong cultivar can still die inside that zone.",
  },
  {
    n: "02",
    title: "Winter chill",
    kicker: "Will it wake and flower?",
    body: "Many temperate nuts need hundreds of hours between about 32°F and 45°F before they bloom evenly. A frost-free winter sounds kind. Almonds, pistachios, walnuts, and pecans often stall without that chill.",
  },
  {
    n: "03",
    title: "Summer heat",
    kicker: "Will the kernel fill?",
    body: "Living through winter is not the same as ripening a nut. Pecans, peanuts, pistachios, and macadamias need a long warm season. A short summer can leave you with shells and a shriveled kernel inside.",
  },
  {
    n: "04",
    title: "Bloom and harvest weather",
    kicker: "Will this year’s sky cooperate?",
    body: "Rain on almond flowers spreads brown rot. A late frost kills an early bloom. A wet autumn molds walnuts and pistachios while they should be drying. The same zone number can be ideal in a dry valley and frustrating in a humid summer.",
  },
];

export const PLANTS: NutPlant[] = [
  {
    id: "hazelnut",
    name: "Hazelnut",
    latin: "Corylus avellana and hybrids",
    form: "Shrub",
    tagline: "The backyard nut. Small, early, and almost never happy alone.",
    difficulty: "Beginner",
    zoneMin: 4,
    zoneMax: 8,
    affinity: {
      cold: "loves",
      temperate: "loves",
      mediterranean: "ok",
      humid: "struggles",
      subtropical: "no",
      tropical: "no",
    },
    climateWhy: {
      cold: "Hardy hybrids take real winters. Buy a cold-tested plant, not a snack-bag filbert.",
      temperate: "Enough chill, and a shrub that fits a backyard. This is the easy climate for hazelnuts.",
      mediterranean: "They can crop if winter chill is real. Dry summers are fine with a deep watering now and then.",
      humid: "Eastern filbert blight likes humid springs. Only blight-resistant cultivars are worth trying, and it is still a stretch.",
      subtropical: "Winters are too mild. Hazelnuts need a proper chilling winter.",
      tropical: "No frost and no chill means no reliable crop.",
    },
    years: "3–5 years from a nursery plant",
    size: "10–15 ft, often multi-stem",
    spacing: "12–18 ft between bushes",
    sun: "Full sun, at least 6 hours.",
    soil: "Well-drained loam, pH about 6 to 7. Standing water kills them faster than cold.",
    water: "A deep soak once a week in the first two dry summers. After that they tolerate short dry spells.",
    chill: "Roughly 800–1,200 hours. A frost-free winter is not enough.",
    pollination:
      "Wind carries the pollen. Plant at least two different compatible cultivars. One bush almost never pollinates itself.",
    needsPartner: true,
    harvest:
      "Late summer into early fall, when the nut loosens in the husk. Dry them before you store them or they mold.",
    startHere:
      "The best first nut if you want something smaller than a shade tree and can give it a partner.",
    steps: [
      "Plant two compatible cultivars in full sun, where a test hole drains within a day.",
      "Mulch a wide ring, but keep the mulch off the stems so voles cannot nest against the bark.",
      "Water deeply the first two summers. Skip the daily sprinkle.",
      "Open the center of the bush so light and air reach the catkins. The first real crop comes in a few years, not the first fall.",
    ],
    pitfalls: [
      "One lonely bush. Hazelnuts need a different cultivar nearby.",
      "Eastern filbert blight in humid country. Buy resistant varieties or pick another nut.",
      "Squirrels. They harvest on their schedule, not yours.",
    ],
    buy: "A named blight-resistant pair. Ask the nursery which pollinizer matches the cultivar you want.",
  },
  {
    id: "chestnut",
    name: "Chinese chestnut",
    latin: "Castanea mollissima",
    form: "Tree",
    tagline: "The first real nut tree for much of the temperate East — if the soil drains.",
    difficulty: "Beginner",
    zoneMin: 5,
    zoneMax: 8,
    affinity: {
      cold: "ok",
      temperate: "loves",
      mediterranean: "ok",
      humid: "loves",
      subtropical: "struggles",
      tropical: "no",
    },
    climateWhy: {
      cold: "Possible near zone 5 if the season is long enough to ripen the burrs. Colder than that, the wood or the crop fails.",
      temperate: "A strong match: winter chill, summer warmth, and room for a medium tree.",
      mediterranean: "They prefer more summer moisture than a dry valley gives on its own. Irrigate, and do not let the soil bake.",
      humid: "Humid summers are fine. Wet roots are not. Root rot kills more young chestnuts than winter does.",
      subtropical: "Too little winter chill, and nuts set poorly.",
      tropical: "This is not a tropical tree.",
    },
    years: "3–6 years",
    size: "30–40 ft",
    spacing: "30–40 ft",
    sun: "Full sun.",
    soil: "Acid to neutral, about pH 5.5–6.5, and sharply drained. Heavy wet clay is the usual killer.",
    water: "Water weekly the first two summers. Established trees want moisture while burrs fill, not a swamp.",
    chill: "A real winter, not an arctic one and not a tropical one.",
    pollination:
      "Not self-fertile. Plant two different Chinese cultivars within about 100 feet. One tree is shade, not an orchard.",
    needsPartner: true,
    harvest:
      "Fall, when the spiny burrs split. Wear gloves. Good nuts feel heavy. Chestnuts are fresh food, not dry nuts. Store them in the refrigerator (about 32 to 40°F) in a bag with a few holes, and use them within a few weeks, or freeze them. Throw out any that are moldy inside.",
    startHere:
      "The classic beginner tree where winters are real and you can give it a partner and a dry root run.",
    steps: [
      "Test drainage before you buy. Fill a hole with water. If it is still there the next day, choose another spot.",
      "Plant two named cultivars, not one, and not an American chestnut seedling.",
      "Keep grass away from the trunk for the first years and mulch the root zone.",
      "Protect the bark from deer and the crop from wildlife. Burrs are armored; squirrels still show up.",
    ],
    pitfalls: [
      "A single tree. Chestnuts do not pollinate themselves.",
      "A soggy planting hole.",
      "Horse chestnut and buckeye are POISONOUS look-alikes. Edible chestnuts grow in a husk covered with sharp, dense spines like a hedgehog, usually 2 to 3 nuts per husk, and each nut is flat on one side with a pointed tip and a little tassel. Buckeye and horse chestnut husks are leathery with a few blunt bumps or none, usually hold one round, glossy nut with no point, and have leaves shaped like a hand (5 to 7 leaflets from one point). If you are not sure, do not eat it.",
    ],
    buy: "Two named Chinese cultivars, or blight-resistant hybrids sold as such. American chestnuts still die of blight unless you are in a restoration program.",
  },
  {
    id: "black-walnut",
    name: "Black walnut",
    latin: "Juglans nigra",
    form: "Tree",
    tagline: "A native giant. Wonderful at the back of a large lot, hostile to the vegetable garden.",
    difficulty: "Intermediate",
    zoneMin: 4,
    zoneMax: 9,
    affinity: {
      cold: "loves",
      temperate: "loves",
      mediterranean: "ok",
      humid: "loves",
      subtropical: "struggles",
      tropical: "no",
    },
    climateWhy: {
      cold: "The wood is hardy. Give it deep soil and decades, not a small city yard.",
      temperate: "A natural fit, and a tree that will outgrow a typical suburban lot.",
      mediterranean: "It can grow with deep soil and irrigation. English walnut usually makes more sense in a dry-summer climate.",
      humid: "Native through much of the humid East. Heat and humidity are not the problem. Size and juglone are.",
      subtropical: "The warm edge of the range. Little chill and sticky air make a better-matched nut the wiser choice.",
      tropical: "No. This tree wants a winter.",
    },
    years: "6–10 years grafted; seedlings take longer",
    size: "50–75 ft, with a wide crown",
    spacing: "40–50 ft from other trees, and far from the garden",
    sun: "Full sun.",
    soil: "Deep, fertile, moist but drained. They want room for a long root.",
    water: "Deep water while young. Established trees handle ordinary summers.",
    chill: "Any climate with a real winter supplies it.",
    pollination: "Wind-pollinated. One tree can set some nuts. A second nearby improves the crop.",
    needsPartner: false,
    harvest:
      "Fall. The green husk stains skin and clothes a dark brown. Hull them with gloves, then cure the nuts for several weeks.",
    startHere:
      "Plant it only if you have acreage to spare and you like the idea of a tree that will still be huge when you are not.",
    steps: [
      "Site it well away from vegetables, apples, berries, and pines. The roots release juglone, which stunts them.",
      "Plant a grafted named tree if you want nuts sooner and shells a bit kinder.",
      "Water deeply the first summers and keep mowers off the bark.",
      "Plan the harvest mess: husks stain driveways, hands, and clothes.",
    ],
    pitfalls: [
      "Juglone. Tomatoes, apples, blueberries, and many ornamentals sulk or die inside the root zone.",
      "Planting it ten feet from the house. It will not stay ten feet.",
      "Expecting a quick crop from a seedling.",
      "Pets and horses: Keep dogs away from fallen and moldy walnuts and hulls. Mold on them can cause shaking and seizures. Never use black walnut wood shavings for horse bedding. They can cause laminitis (painful hoof inflammation).",
    ],
    buy: "A grafted cultivar for earlier nuts and a known shell. A seedling is fine for wildlife if you can wait.",
  },
  {
    id: "english-walnut",
    name: "English walnut",
    latin: "Juglans regia",
    form: "Tree",
    tagline: "The grocery-store walnut. Happy in dry-summer country, fussy about spring frost.",
    difficulty: "Intermediate",
    zoneMin: 5,
    zoneMax: 9,
    affinity: {
      cold: "ok",
      temperate: "loves",
      mediterranean: "loves",
      humid: "struggles",
      subtropical: "struggles",
      tropical: "no",
    },
    climateWhy: {
      cold: "Only late-leafing, cold-hardy strains (often sold as Carpathian), and only down to about zone 5. Spring frost on new growth is the usual failure.",
      temperate: "A strong match if the cultivar leafs out late, so a warm week in March does not wake it into a frost.",
      mediterranean: "The walnut of dry-summer valleys: winter chill, heat to fill the kernel, and dry weather to finish the harvest.",
      humid: "Wet springs spread walnut blight on catkins and nuts. A resistant tree on a breezy slope is still a stretch.",
      subtropical: "Not enough chill, and often too much humidity. The tree may live and still refuse to fruit well.",
      tropical: "No chill, no crop.",
    },
    years: "5–8 years grafted",
    size: "40–60 ft",
    spacing: "35–45 ft",
    sun: "Full sun, out of a frost pocket if you can help it.",
    soil: "Deep and drained. They decline in shallow or waterlogged ground.",
    water: "Regular deep water for the first years, and while nuts fill if the summer is dry.",
    chill: "Several hundred hours, plus a late-leafing habit if your spring is treacherous.",
    pollination:
      "Walnut trees usually release pollen and have ready female flowers at different times, so one tree often pollinates itself poorly. Many cultivars set a partial crop alone. A second cultivar that sheds pollen when the first one's female flowers are ready gives more nuts. Ask the nursery which pair overlaps.",
    needsPartner: false,
    harvest: "Hulls split in fall. Remove them promptly and dry the nuts until the kernel snaps, not bends.",
    startHere:
      "A good home walnut where springs are not a frost trap and summers are not a steam bath.",
    steps: [
      "Choose a late-leafing cultivar if late frost is normal where you live.",
      "Plant in deep soil on a slope or high spot, not in a hollow where cold air sits.",
      "Keep the first two summers watered, and the trunk protected from sunscald and mowers.",
      "Dry the harvest thoroughly. A damp walnut molds in the shell.",
    ],
    pitfalls: [
      "An early-leafing tree in a frost pocket. The wood lives; the crop dies in spring.",
      "Wet, heavy soil.",
      "Some juglone, milder than black walnut, but still unfriendly to tomatoes under the canopy.",
    ],
    buy: "A named cultivar matched to your chill and frost timing. A nut from a snack bag will not come true, and it may not suit your spring.",
  },
  {
    id: "pecan",
    name: "Pecan",
    latin: "Carya illinoinensis",
    form: "Tree",
    tagline: "A heat crop that becomes a giant. The summer, not the zone sticker, fills the nut.",
    difficulty: "Intermediate",
    zoneMin: 6,
    zoneMax: 9,
    affinity: {
      cold: "no",
      temperate: "ok",
      mediterranean: "ok",
      humid: "loves",
      subtropical: "ok",
      tropical: "no",
    },
    climateWhy: {
      cold: "Winters are too hard and summers are too short to fill the kernel.",
      temperate: "Only northern, short-season cultivars, and only if frost-free days are long enough. In zone 6 this is often a stretch.",
      mediterranean: "Grown in hot irrigated valleys. You need a long hot summer plus water. A cool coast will not fill the nuts.",
      humid: "The classic pecan climate: heat, humidity, and a long season. Give it room and a partner of the other pollen type.",
      subtropical: "Works where a little winter chill remains and summers stay hot. A frost-free year with no chill is a different climate.",
      tropical: "Most pecans want some winter chill. This is the wrong sky.",
    },
    years: "6–10 years",
    size: "70 ft or more",
    spacing: "40–60 ft",
    sun: "Full sun, with no plans to garden underneath later.",
    soil: "Deep, fertile, drained but moisture-holding. pH around 6 to 7.",
    water: "Thirsty while nuts fill in mid to late summer. Drought then means empty nuts even on a healthy tree.",
    chill: "Moderate. Southern paper-shell types also need a longer, hotter season than northern cultivars.",
    pollination:
      "Pecans are split by timing. Type I sheds pollen first. Type II has receptive flowers first. Plant one of each or the crop disappoints.",
    needsPartner: true,
    harvest: "Fall, when the husks split. Dry the nuts before you bag them.",
    startHere:
      "Worth it if you have heat, space, and patience. The wrong pecan for your summer is the most common beginner disappointment.",
    steps: [
      "Ask for a northern or southern cultivar that matches your season length, not the one a friend grows three zones south.",
      "Plant a Type I and a Type II so pollen and flowers overlap.",
      "Water deeply in late summer while kernels fill.",
      "Keep the first years mulched and the trunk safe from mowers and deer.",
    ],
    pitfalls: [
      "A southern paper-shell in a short summer: a handsome tree, hollow nuts.",
      "One tree and no pollinizer.",
      "Letting the soil go dry in late summer, then blaming the variety.",
    ],
    buy: "A matched pair rated for your frost-free season. Names you will see on northern lists include Kanza and Pawnee; southern paper-shells want more heat.",
  },
  {
    id: "almond",
    name: "Almond",
    latin: "Prunus dulcis",
    form: "Tree",
    tagline: "A peach that made a nut. Glorious in a dry valley, a disease magnet in humidity.",
    difficulty: "Specialist",
    zoneMin: 7,
    zoneMax: 9,
    affinity: {
      cold: "no",
      temperate: "struggles",
      mediterranean: "loves",
      humid: "no",
      subtropical: "struggles",
      tropical: "no",
    },
    climateWhy: {
      cold: "The flowers open too early and freeze, and the wood is not hardy in a hard winter.",
      temperate: "They bloom very early, often into frost, and wet weather at bloom brings brown rot. A four-season spring is usually the wrong sky.",
      mediterranean: "The climate they were shaped for: winter chill, a dry bloom, and a dry harvest. Even here, a frost pocket can wipe out the flowers.",
      humid: "Rain at bloom and humidity all summer bring disease that home spraying rarely stays ahead of. Grow pecans or chestnuts instead.",
      subtropical: "A few low-chill almonds exist for mild, dry winters. If the mild winter is also rainy, skip them.",
      tropical: "No chill, and no dry-down. This is not an almond climate.",
    },
    years: "3–5 years",
    size: "15–25 ft",
    spacing: "16–22 ft",
    sun: "Full sun, on ground that sheds cold air.",
    soil: "Well drained, pH near neutral. They are stone fruits and dislike wet roots.",
    water: "Steady water while the kernel fills, then drier weather so the hull can split.",
    chill: "Often 400–700 hours, depending on the cultivar. Low-chill types still want a dry season.",
    pollination:
      "Most need a second variety. A few home trees are sold as self-fertile. A partner still helps if you have the room.",
    needsPartner: true,
    harvest:
      "Late summer, when hulls split and the shell shows. Knock them onto a tarp, dry them completely, then store.",
    startHere:
      "A wonderful home tree only in dry-summer climates. Everywhere else, admire them and plant something else.",
    steps: [
      "Confirm your bloom-time weather is usually dry, and that late frost is uncommon on that exact spot.",
      "Plant a pollination pair suited to your chill hours.",
      "Keep roots drained and water consistent through early summer.",
      "Dry the crop until the kernel is brittle. Damp almonds mold quickly.",
    ],
    pitfalls: [
      "Trusting a zone number in a humid climate. The zone can match and the sky still will not.",
      "A low spot that frosts in spring. Almonds bloom with the peaches, sometimes earlier.",
      "Leaving hulls in a wet pile.",
      "Bitter almonds (and apricot and peach kernels) contain chemicals that make cyanide. Eat only sweet almonds sold as food. Never eat a nut from an almond tree whose nuts taste bitter.",
    ],
    buy: "A pair chosen for your chill hours, from a nursery that knows your valley. “All-in-One” and similar self-fertile trees are the exception, not the rule.",
  },
  {
    id: "pistachio",
    name: "Pistachio",
    latin: "Pistacia vera",
    form: "Tree",
    tagline: "A desert-edge tree. It wants a cold winter and a hot, dry finish — both, not one.",
    difficulty: "Specialist",
    zoneMin: 8,
    zoneMax: 10,
    affinity: {
      cold: "no",
      temperate: "no",
      mediterranean: "loves",
      humid: "no",
      subtropical: "struggles",
      tropical: "no",
    },
    climateWhy: {
      cold: "Not hardy enough, and the summer is not hot enough.",
      temperate: "Not enough summer heat, and usually too much humidity at harvest.",
      mediterranean: "The real pistachio climate: winter chill, brutal summer heat, and dry air when the crop finishes.",
      humid: "Humidity and rain at harvest ruin the crop. There is no cultivar that fixes a wet autumn.",
      subtropical: "Only if the site is actually dry and still gets real winter chill. A humid, frost-light coast is the wrong subtropical.",
      tropical: "No winter chill, so bloom is uneven or absent.",
    },
    years: "5–8 years, then often a heavy year and a light year",
    size: "20–30 ft",
    spacing: "18–25 ft",
    sun: "Full sun and moving air.",
    soil: "Deep, dryish, perfectly drained. This is a desert-edge tree.",
    water: "Some irrigation is fine. Soggy soil is not. Dry air at harvest matters more than heavy feeding.",
    chill: "A substantial winter chill, then a very hot summer. You need both.",
    pollination:
      "Male and female flowers grow on separate trees. You need one male and at least one female. The male makes no nuts.",
    needsPartner: true,
    harvest:
      "Late summer to fall, when the hull loosens and many shells split. Dry the nuts immediately. Rain on the harvest is a serious problem.",
    startHere:
      "Do not attempt pistachios unless the climate is hot, dry, and still cold enough in winter.",
    steps: [
      "Buy a named female and the male that blooms with her. Two females are not a pair.",
      "Plant in soil that never stays wet.",
      "Expect alternate bearing: a heavy crop, then a lighter one. That is normal.",
      "Harvest promptly and dry at once.",
    ],
    pitfalls: [
      "A male that blooms at the wrong time, or no male at all.",
      "A humid or rainy autumn.",
      "A big-box tree with no companion and no cultivar name.",
    ],
    buy: "Where chill is high, Kerman is the classic female and Peters the matching male. Low-chill females need their own males. Do not mix them at random.",
  },
  {
    id: "hickory",
    name: "Shagbark hickory",
    latin: "Carya ovata",
    form: "Tree",
    tagline: "A native for the long view. Plant it for a later decade, and something faster beside it.",
    difficulty: "Patient",
    zoneMin: 4,
    zoneMax: 8,
    affinity: {
      cold: "loves",
      temperate: "loves",
      mediterranean: "struggles",
      humid: "ok",
      subtropical: "no",
      tropical: "no",
    },
    climateWhy: {
      cold: "The wood is at home in cold winters. The crop is simply slow.",
      temperate: "A natural match, if you can wait.",
      mediterranean: "They prefer more summer rain than a dry valley offers. Without irrigation this is a poor bet.",
      humid: "Eastern humidity is tolerable, though the sweet spot sits north of the Gulf.",
      subtropical: "Not enough winter, and not the right tree.",
      tropical: "No.",
    },
    years: "8–15 years grafted, longer from seed",
    size: "60–80 ft",
    spacing: "About 40 ft",
    sun: "Full sun to light shade when young; full sun to crop well.",
    soil: "Deep, drained, slightly acidic to neutral. They grow slowly in poor ground and may still get there.",
    water: "Ordinary rainfall in the East is enough once established. Water the first summers.",
    chill: "A cold or temperate winter supplies it.",
    pollination:
      "Wind-pollinated. A second hickory nearby improves the set. A wild tree in the hedge sometimes serves.",
    needsPartner: false,
    harvest:
      "Fall. Shells are thick. A real nutcracker is part of the kit, and wildlife will contest every nut.",
    startHere:
      "Plant it if you love native trees and can wait. If you want nuts while you still live in the house, also plant a hazelnut or chestnut.",
    steps: [
      "Give it a lifetime spot with deep soil, far from pavement.",
      "Buy a grafted tree if you can find one. A seedling is a gift to someone else.",
      "Mulch and water the early years, then mostly leave it alone.",
      "Learn to share the crop. Hickories feed the woods as well as the kitchen.",
    ],
    pitfalls: [
      "Impatience. This is not a first-crop project.",
      "Expecting paper-shell pecans. They are cousins, not the same nut.",
      "A bone-dry mediterranean summer without water.",
    ],
    buy: "A nursery-grown shagbark, grafted if possible. Do not dig a wild sapling; they transplant badly because of the taproot.",
  },
  {
    id: "macadamia",
    name: "Macadamia",
    latin: "Macadamia integrifolia",
    form: "Tree",
    tagline: "The beginner tree of frost-free climates. One hard freeze ends the story.",
    difficulty: "Intermediate",
    zoneMin: 9,
    zoneMax: 11,
    affinity: {
      cold: "no",
      temperate: "no",
      mediterranean: "struggles",
      humid: "no",
      subtropical: "loves",
      tropical: "loves",
    },
    climateWhy: {
      cold: "Frost will kill it. This is not a close call.",
      temperate: "Winters are far too cold.",
      mediterranean: "Only the mildest, almost frost-free pockets, with irrigation. A normal mediterranean frost burns a young tree.",
      humid: "A freezing or even a regularly frosty humid winter is too cold. If you almost never frost, you are in the subtropical column instead.",
      subtropical: "The home climate: rare light frost at most, and steady warmth. Cover young trees if a cold snap is forecast.",
      tropical: "Happy where frost never comes, with wind protection and drained soil.",
    },
    years: "4–7 years",
    size: "30–40 ft, often kept smaller",
    spacing: "20–25 ft",
    sun: "Sun, with shelter from the worst wind.",
    soil: "Well drained and slightly acidic. They resent salt and wet clay.",
    water: "Regular water. They are not desert trees.",
    chill: "None. Frost is the enemy. Mature trees are damaged around the mid-20s °F.",
    pollination: "Many crop better with a second cultivar nearby. Some fruit alone.",
    needsPartner: false,
    harvest:
      "Nuts drop when ripe, often over many months. Gather often, husk, and dry until the kernel is crisp. Undried macadamias do not store.",
    startHere: "The straightforward nut where frost is a rumor, as long as you can water and drain the roots.",
    steps: [
      "Plant a grafted named tree after any chance of frost has passed.",
      "Keep a wide mulch ring and water through dry spells.",
      "Have frost cloth ready for the first winters if your zone still flirts with the high 20s.",
      "Dry the harvest until the kernel snaps. This step is not optional.",
    ],
    pitfalls: [
      "A single hard frost on a young tree.",
      "Bagging nuts that still feel rubbery inside.",
      "Treating it like a walnut you can try “a zone cooler.” You cannot.",
    ],
    buy: "A grafted cultivar. Seedlings take longer and the nuts may be poor. Rough-shell types (M. tetraphylla) take slightly more cold than smooth-shell.",
  },
  {
    id: "peanut",
    name: "Peanut",
    latin: "Arachis hypogaea",
    form: "Annual",
    tagline: "Not a tree. A summer legume that buries its own crop — and you can eat it the same year.",
    difficulty: "Beginner",
    zoneMin: 6,
    zoneMax: 11,
    affinity: {
      cold: "no",
      temperate: "ok",
      mediterranean: "ok",
      humid: "loves",
      subtropical: "loves",
      tropical: "ok",
    },
    climateWhy: {
      cold: "The frost-free season is too short. Peanuts die with frost, and they still need a long warm summer.",
      temperate: "Early Spanish or Valencia types can work with about 120 frost-free days and sandy soil. A cool summer is a stretch.",
      mediterranean: "Fine if the soil is loose and you irrigate. They are not a dry-farm tree crop, because they are not a tree.",
      humid: "The usual beginner peanut climate: warm, and willing, as long as the soil is sandy.",
      subtropical: "Easy warmth. Wait until the soil is genuinely warm before you sow.",
      tropical: "Possible. You still need loose soil and a harvest before the nuts sprout in the ground.",
    },
    years: "100–150 days, one summer",
    size: "A low bush, 1–2 ft tall",
    spacing: "Rows 2–3 ft apart, plants 6–8 inches",
    sun: "Full sun.",
    soil: "Sandy or loose loam, slightly acidic. If you cannot push a hand in, do not plant peanuts there.",
    water: "Even moisture while pegs are forming, then ease off so you can lift the plants.",
    chill: "None. They are an annual. Sow after the last frost, when soil is about 65°F.",
    pollination:
      "Self-pollinating. After the yellow flower fades, a peg grows down into the soil and the pod forms underground.",
    needsPartner: false,
    harvest:
      "When leaves yellow, loosen the soil and lift the whole plant. Hang or rack the plants until the pods are fully dry, then store. Fresh undried peanuts spoil.",
    startHere:
      "The one nut a beginner can sow and eat in the same year — if the summer is long and the soil is loose.",
    steps: [
      "Loosen a sandy bed after the soil has warmed. Cold, wet seed rots.",
      "Sow raw planting seed, not roasted grocery peanuts.",
      "When flowers fade, keep the soil loose so the pegs can bury themselves. You can hill a little soil around the stems.",
      "Lift the whole plant at yellowing and dry it for weeks before you roast or store.",
    ],
    pitfalls: [
      "Heavy clay. The pegs never bury, and you cannot lift the crop.",
      "Planting too early.",
      "Roasting or sealing the pods before they are dry.",
    ],
    buy: "Raw seed peanuts sold for planting. Choose an early variety if your summer is only moderate.",
  },
  {
    id: "cashew",
    name: "Cashew",
    latin: "Anacardium occidentale",
    form: "Tree",
    tagline: "A tropical tree with a caustic shell. Climate is only the first warning.",
    difficulty: "Specialist",
    zoneMin: 10,
    zoneMax: 11,
    affinity: {
      cold: "no",
      temperate: "no",
      mediterranean: "no",
      humid: "no",
      subtropical: "struggles",
      tropical: "loves",
    },
    climateWhy: {
      cold: "Impossible. Cashews are fully tropical.",
      temperate: "Impossible.",
      mediterranean: "Winter frost and the wrong rainfall pattern. No.",
      humid: "If your humid climate still freezes, the tree dies. Frost-free humidity belongs under subtropical or tropical.",
      subtropical: "Only the frost-free edge, and even then the shell is a handling hazard. Most subtropical yards should skip it.",
      tropical: "The tree can grow. The raw shell still contains a caustic oil in the poison-ivy family. This is not a casual snack tree.",
    },
    years: "2–4 years in the tropics, from a grafted tree",
    size: "20–40 ft",
    spacing: "About 25 ft",
    sun: "Full sun.",
    soil: "Drained sandy ground. They dislike waterlogging.",
    water: "A dry spell toward harvest helps. They do not want constantly wet roots.",
    chill: "None. Any real frost is fatal.",
    pollination: "Usually fruitful alone. Insects help.",
    needsPartner: false,
    harvest:
      "The nut hangs under a fleshy cashew apple. The raw shell oil blisters skin and is dangerous near eyes. Roast and process so the oil is driven off before a shell is cracked. Do not handle raw shells casually, and do not assume a home oven makes it safe.",
    startHere:
      "Only in a truly frost-free climate, and only if you will treat the shell as a hazardous material, not as a walnut.",
    steps: [
      "Confirm frost never reaches the planting spot. “Almost never” is not enough.",
      "Plant a grafted tree in drained soil, with room and wind in mind.",
      "Read a local extension guide on processing before the first crop. The pretty apple is not the dangerous part; the shell is.",
      "Keep children and pets away from fresh nuts in the shell.",
    ],
    pitfalls: [
      "Treating the shell like any other nut shell. The oil blisters.",
      "Any real frost.",
      "Assuming a mild coastal winter is close enough because the zone number looks neighboring.",
    ],
    buy: "A grafted tree from a tropical nursery, and a processing method you have actually learned — not a guess on harvest day.",
  },
];

export const CHECKLIST: { id: string; label: string }[] = [
  {
    id: "zone",
    label: "Each plant matches my winter low, chill, summer heat, and harvest weather.",
  },
  {
    id: "drainage",
    label: "I dug a hole, filled it with water, and it drained within a day.",
  },
  {
    id: "sun",
    label: "The spot gets at least six hours of sun, clear of the house and lines.",
  },
  {
    id: "partner",
    label: "Every nut that needs a partner has a second, compatible cultivar on the list.",
  },
  {
    id: "source",
    label: "I am buying named nursery plants, or real seed peanuts — not grocery nuts.",
  },
  {
    id: "water",
    label: "I can water deeply through the first two summers.",
  },
  {
    id: "guard",
    label: "I have a plan for deer, rabbits, voles, and squirrels.",
  },
  {
    id: "patience",
    label: "I know the first real harvest is measured in years, except for peanuts.",
  },
];

export type SeasonId = "dormant" | "bloom" | "growing" | "harvest";

export const SEASONS: {
  id: SeasonId;
  title: string;
  when: string;
  tasks: { text: string; note?: string }[];
}[] = [
  {
    id: "dormant",
    title: "Dormant season",
    when: "The trees are leafless. Winter in the north; the cool months elsewhere.",
    tasks: [
      {
        text: "Order bare-root trees now, while nurseries still have the cultivar you matched to your climate.",
        note: "Write down the pollinizer before you check out. “A walnut” is not an order.",
      },
      {
        text: "Plant bare-root stock while it is fully dormant and the soil is workable, not frozen or soupy.",
        note: "In a cold climate, heel plants into damp sawdust until the ground gives. In a mild climate this is often the best planting window.",
      },
      {
        text: "Prune hazelnuts, almonds, and young walnuts on a dry day. Open the center. Do not paint the wounds.",
      },
      {
        text: "In the southern hemisphere, this is not January. Follow leaf drop, not the page on the calendar.",
      },
    ],
  },
  {
    id: "bloom",
    title: "Bloom and planting season",
    when: "Soil can be worked, and early flowers are the first thing frost can steal.",
    tasks: [
      {
        text: "Plant container trees as soon as the soil crumbles in your hand. Do not plant into mud.",
      },
      {
        text: "Mulch a wide ring and pull it back two inches from the trunk.",
      },
      {
        text: "If almonds or walnuts are flowering, look at the forecast. A frost pocket you chose in winter is the problem you cannot cover on a 40-foot tree.",
        note: "Site was the defense. Cloth is only realistic on a young, short tree.",
      },
      {
        text: "Sow peanuts only after the soil is warm, about 65°F. Earlier seed just rots.",
      },
      {
        text: "Do not pile fertilizer on a newly planted tree. Water and weed competition matter more this year.",
      },
    ],
  },
  {
    id: "growing",
    title: "Growing season",
    when: "Leaves are fully out and nuts are sizing.",
    tasks: [
      {
        text: "Water deeply about once a week in year one and two whenever rain does not. A light daily sprinkle trains shallow roots.",
      },
      {
        text: "For pecans, pistachios, and walnuts, do not let the soil go dust-dry while kernels are filling.",
      },
      {
        text: "Keep the peanut bed loose after flowering so the pegs can push into the ground.",
      },
      {
        text: "Identify pests before you spray. Walnut husk maggots, borers, and aphids are different problems. Your local extension page beats a guess.",
      },
      {
        text: "Weed the ring. Grass against the trunk steals water and hides gnawing animals.",
      },
    ],
  },
  {
    id: "harvest",
    title: "Harvest season",
    when: "Hulls split, burrs open, or peanuts yellow. Dry weather is a gift.",
    tasks: [
      {
        text: "Harvest promptly. Squirrels, jays, and mold are all on a shorter clock than you are.",
      },
      {
        text: "Dry nuts until the kernel snaps. Macadamias, peanuts, and walnuts stored damp will mold or go rancid.",
      },
      {
        text: "Wear gloves for black walnut husks and chestnut burrs. Walnut husk stain does not forgive.",
      },
      {
        text: "Do not compost black walnut husks into the vegetable garden. Juglone rides along.",
      },
      {
        text: "Write down what cropped, what froze, and what the squirrels took. Next year’s order depends on that note.",
      },
      {
        text: "In mild climates this is also a planting season for container trees, while the soil is still warm and the top has not yet frozen.",
      },
    ],
  },
];

export const PLANTING_LESSONS: { title: string; body: string }[] = [
  {
    title: "Match the sky before you match the catalog",
    body: "The climate guide is the whole method. Winter low keeps the wood alive. Chill wakes the flowers. Summer heat fills the kernel. Bloom and harvest weather decides whether that year succeeds. A plant can pass one test and fail the other three.",
  },
  {
    title: "Buy a name, not a grocery nut",
    body: "A walnut from a bag is a seedling of unknown parentage. It may not resemble the nut you ate, it may be the wrong chill type, and it will be slow. Order a named cultivar. For peanuts, buy raw seed sold for planting — roasting kills it.",
  },
  {
    title: "Assume you need two, until the entry says otherwise",
    body: "Hazelnuts, chestnuts, pecans, almonds, and pistachios want a partner. The partner is a different cultivar, or in pistachios a male tree, not a second copy of the same plant. Wind does the carrying, so they do not need to touch, but they need to be in the same yard, not the next town.",
  },
  {
    title: "Run the drainage test",
    body: "Dig a hole about a foot deep and fill it with water. Let it drain, fill it again, and see if it is gone within a day. Chestnuts, almonds, walnuts, and macadamias all fail in a bathtub of clay. Raising the planting spot a few inches helps a marginal site. It does not fix a swamp.",
  },
  {
    title: "Plant at the size it will be",
    body: "The cute gallon pot becomes a pecan that shades the roof. Measure the mature spacing in the entry and walk it off before you dig. Keep black walnuts far from the vegetable garden because of juglone.",
  },
  {
    title: "Planting day is quiet work",
    body: "Set the tree at the same depth it grew in the nursery. Do not bury the graft union, and do not leave roots sitting proud of the soil. Water it in so the soil settles against the roots. Stake only if the site is truly windy, and remove the stake after a year. A tree that cannot move does not grow a strong trunk. See also Volume 11: Fruit Trees for chill hours, planting, and pollination partners.",
  },
  {
    title: "The first three years are about roots",
    body: "Water deeply, keep grass back, and protect bark from mowers, rabbits, and deer. A little mulch beats a lot of fertilizer. You are not behind if there are no nuts yet. Hazelnuts and almonds are the early ones. Hickories are a different kind of promise.",
  },
  {
    title: "Someone else wants the crop",
    body: "Squirrels are the other grower in the yard. Net small trees, harvest the day hulls split, or plant enough to share. A trunk guard in winter stops voles from girdling the bark under the mulch. Deer browse young shoots in a single night.",
  },
];

export function climateById(id: ClimateId) {
  return CLIMATES.find((c) => c.id === id) ?? CLIMATES[1];
}

export function plantById(id: string) {
  return PLANTS.find((p) => p.id === id);
}

export function fitFor(plant: NutPlant, zone: number, climate: ClimateId): Fit {
  const aff = plant.affinity[climate];
  const inZone = zone >= plant.zoneMin && zone <= plant.zoneMax;
  const edge = zone >= plant.zoneMin - 1 && zone <= plant.zoneMax + 1;
  if (aff === "no") return "skip";
  if (!inZone && !edge) return "skip";
  if (aff === "struggles") return inZone ? "stretch" : "skip";
  if (!inZone) return "stretch";
  if (aff === "ok") return "stretch";
  return "grow";
}

export function zoneSentence(plant: NutPlant, zone: number): string {
  if (zone < plant.zoneMin) {
    return `Zone ${zone} runs colder than the usual ${plant.zoneMin}–${plant.zoneMax} range.`;
  }
  if (zone > plant.zoneMax) {
    return `Zone ${zone} is milder in winter than the usual ${plant.zoneMin}–${plant.zoneMax} range.`;
  }
  return `Zone ${zone} sits inside the usual ${plant.zoneMin}–${plant.zoneMax} range.`;
}

export function fitLabel(fit: Fit): string {
  if (fit === "grow") return "Grow here";
  if (fit === "stretch") return "A stretch";
  return "Skip for now";
}
