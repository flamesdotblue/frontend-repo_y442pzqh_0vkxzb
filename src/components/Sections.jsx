import { Server, Users, Newspaper, Shield, Mail } from 'lucide-react';

function SectionHeader({ icon: Icon, title, subtitle, id }) {
  return (
    <div id={id} className="mb-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
          <Icon className="text-emerald-300" size={18} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
          {subtitle && (
            <p className="text-sm text-zinc-400">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative z-10">
      {/* Servers */}
      <section className="py-16 sm:py-20" id="servers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="servers"
            icon={Server}
            title="Servers"
            subtitle="Low-latency Australian servers with custom plugins and active moderation"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Retakes', desc: 'Instant action, plant/retake scenarios', players: '128-tick' },
              { name: 'Surf', desc: 'Smooth, skill-based movement maps', players: 'Beginner–Pro' },
              { name: '1v1', desc: 'Aim duels to sharpen mechanics', players: 'ELO ladders' },
              { name: 'AWP', desc: 'Sniper-only, reaction training', players: 'No scope? No problem.' },
            ].map((s) => (
              <div key={s.name} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{s.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/30 px-2 py-0.5 rounded">
                    {s.players}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200">
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 sm:py-20 border-t border-white/5" id="teams">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="teams"
            icon={Users}
            title="Teams"
            subtitle="Find players, build rosters, and compete in local leagues"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { tag: 'LFM', title: 'OCE Plat Roster', body: 'Looking for IGL and rifler. Scrims nightly 7pm AEST.' },
              { tag: 'LFT', title: 'AWPer (2k ELO)', body: 'Consistent schedule, demo ready, prefers Mirage/Overpass.' },
              { tag: 'ORG', title: 'Community Cup', body: 'Monthly bracket with prizes. All skill levels welcome.' },
            ].map((t) => (
              <div key={t.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-zinc-300 bg-white/5 px-2 py-0.5 rounded ring-1 ring-white/10">{t.tag}</span>
                  <h3 className="text-white font-medium">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{t.body}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200">
                  Reach out
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 sm:py-20 border-t border-white/5" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="blog"
            icon={Newspaper}
            title="Blog"
            subtitle="Updates, events, and patch notes from the KZG crew"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Surf Season Reset', date: 'Oct 2025', body: 'New map pool, fresh leaderboards, and anti-cheat upgrades.' },
              { title: 'LAN Meetup, Sydney', date: 'Sep 2025', body: 'Join us for a community night with prizes and showmatches.' },
              { title: 'Retakes Plugin v2', date: 'Aug 2025', body: 'Smarter spawns, utility presets, and improved economy.' },
            ].map((p) => (
              <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="text-xs text-zinc-400">{p.date}</div>
                <h3 className="mt-1 text-white font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.body}</p>
                <a href="#" className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:text-emerald-200">
                  Read more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 sm:py-20 border-t border-white/5" id="staff">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="staff"
            icon={Shield}
            title="Staff"
            subtitle="Moderators and admins keeping the servers smooth and fair"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Sav', role: 'Founder', color: 'from-emerald-500 to-cyan-500' },
              { name: 'Mia', role: 'Head Admin', color: 'from-fuchsia-500 to-rose-500' },
              { name: 'Jay', role: 'Moderator', color: 'from-amber-500 to-orange-500' },
              { name: 'Noah', role: 'DevOps', color: 'from-blue-500 to-indigo-500' },
            ].map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${s.color} ring-1 ring-white/20`} />
                <h3 className="mt-3 text-white font-medium">{s.name}</h3>
                <p className="text-sm text-zinc-400">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 border-t border-white/5" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="contact"
            icon={Mail}
            title="Contact"
            subtitle="Partnerships, support, or just say hi"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <form className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-zinc-300">Name</label>
                  <input className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jane@kzg.gg" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-zinc-300">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help?" />
              </div>
              <button type="button" className="mt-6 inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
                Send Message
              </button>
            </form>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h3 className="text-white font-medium">Community Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>Discord: discord.gg/kzg</li>
                <li>Steam Group: steamcommunity.com/groups/kzg</li>
                <li>Twitter/X: @kzggg</li>
                <li>Email: contact@kzg.gg</li>
              </ul>
              <p className="mt-6 text-sm text-zinc-400">Servers hosted in Sydney and Melbourne for the lowest ping across Australia and New Zealand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
