import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs tracking-wide">
            Est. 2015 • AU/NZ CS:GO Community
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            KZG.gg
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            The premier CS:GO hub Down Under. Play on our custom servers — Retakes, Surf, 1v1, AWP — and connect with teams, staff, and community events.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servers" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">
              Browse Servers
            </a>
            <a href="#teams" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Find a Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
