export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} KZG.gg — CS:GO Community Down Under</p>
          <div className="text-sm text-zinc-400">
            Built with love by the KZG community.
          </div>
        </div>
      </div>
    </footer>
  );
}
