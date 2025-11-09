import { Clock, MapPin, Phone, Ticket } from 'lucide-react';

export default function VisitInfo() {
  return (
    <section id="visit" className="py-16 sm:py-24 bg-gradient-to-b from-white to-black/[0.02]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Plan Your Visit</h2>
          <p className="mt-2 text-black/70">Experience the traditions of Yadnya through immersive galleries, live demonstrations, and guided stories.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Hours</h3>
            <p className="mt-2 text-sm text-black/70">Mon–Sun: 9:00–18:00<br />Last entry at 17:30</p>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Location</h3>
            <p className="mt-2 text-sm text-black/70">Jl. Dharma, Bali, Indonesia<br />Parking and bike racks available</p>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
              <Ticket className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Tickets</h3>
            <p className="mt-2 text-sm text-black/70">Adults: IDR 75k<br />Students/Seniors: IDR 50k<br />Children under 12: Free</p>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-black text-white">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-black/70">+62 361 000 000<br />hello@yadnyamuseum.org</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 sm:p-10">
          <h3 className="text-xl font-semibold tracking-tight">About Yadnya Museum</h3>
          <p className="mt-3 text-black/70">We are dedicated to safeguarding and sharing the living heritage of Yadnya—ceremonies that weave together devotion, art, and community. Through curated collections, storytelling, and educational programs, we aim to foster understanding and respect for these sacred traditions.</p>
        </div>
      </div>
    </section>
  );
}
