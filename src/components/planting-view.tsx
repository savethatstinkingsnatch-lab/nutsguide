import { PLANTING_LESSONS } from "@/data/guide";

export function PlantingView() {
  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-moss">Planting primer</p>
        <h1 className="mt-2 font-display text-4xl text-ink">The same eight mistakes, every spring.</h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Species details live in the field guide. This is the part that stays true for
          almost every nut you will actually plant.
        </p>
      </header>
      <ol className="flex max-w-2xl flex-col gap-6">
        {PLANTING_LESSONS.map((lesson, i) => (
          <li key={lesson.title} className="border-t border-line pt-6">
            <p className="font-display text-sm text-amber">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-1 font-display text-2xl text-ink">{lesson.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{lesson.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
