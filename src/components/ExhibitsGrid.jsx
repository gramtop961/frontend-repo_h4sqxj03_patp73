import { ScrollText, Feather, Landmark } from 'lucide-react';

const exhibits = [
  {
    title: 'Upacara Yadnya',
    desc: 'Ceremonial cycles from birth to community rites, with artifacts and attire.',
    icon: Landmark,
    tag: 'Rituals'
  },
  {
    title: 'Lontar & Literature',
    desc: 'Ancient palm-leaf manuscripts and the stories they preserve.',
    icon: ScrollText,
    tag: 'Archive'
  },
  {
    title: 'Craft of Offerings',
    desc: 'The artistry behind canang sari, penjor, and ceremonial craft.',
    icon: Feather,
    tag: 'Studio'
  },
];

export default function ExhibitsGrid() {
  return (
    <section id="exhibits" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Exhibits</h2>
            <p className="mt-2 text-black/70">Exploring devotion, community, and craft in Balinese culture.</p>
          </div>
          <a href="#visit" className="hidden sm:inline-flex rounded-md bg-black px-4 py-2 text-white hover:bg-black/90">Get Tickets</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit) => (
            <article key={exhibit.title} className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
                  <exhibit.icon className="h-5 w-5" />
                </div>
                <span className="text-xs rounded-full bg-black/5 px-2 py-1">{exhibit.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{exhibit.title}</h3>
              <p className="mt-2 text-sm text-black/70">{exhibit.desc}</p>
              <a href="#" className="mt-4 inline-flex text-sm text-black/80 hover:text-black">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
