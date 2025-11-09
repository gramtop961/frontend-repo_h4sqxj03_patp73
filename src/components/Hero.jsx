import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4n1o3p2yG9zQ7b5x/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Now Showing: Rituals of Yadnya
            </span>
            <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">Preserving the Spirit of Yadnya</h1>
            <p className="mt-4 text-lg text-black/70">
              A living museum dedicated to the sacred Balinese ceremonies, art, and community.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#exhibits" className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-white hover:bg-black/90">
                Explore Exhibits <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-md bg-white/80 px-5 py-3 ring-1 ring-black/10 backdrop-blur hover:bg-white">
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
