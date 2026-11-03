import { SEASONS } from "@/data/guide";

export function SeasonsView() {
  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-moss">Through the year</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Follow the tree, not the month.</h1>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Seasons flip in the southern hemisphere. A Mediterranean winter is often planting
          time. A cold-continental spring still has frozen ground. Do the task when the
          plant is in that stage.
        </p>
      </header>
      <div className="flex max-w-2xl flex-col gap-8">
        {SEASONS.map((season) => (
          <section key={season.id} className="rounded-card border border-line bg-paper p-5">
            <h2 className="font-display text-2xl text-ink">{season.title}</h2>
            <p className="mt-1 text-sm text-moss">{season.when}</p>
            <ul className="mt-4 flex flex-col gap-4">
              {season.tasks.map((task) => (
                <li key={task.text} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <p className="text-sm leading-relaxed text-ink">{task.text}</p>
                  {task.note ? (
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{task.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
