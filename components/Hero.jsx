import Badge from './Badge';

export default function Hero() {
  return (
    <section className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-md">
      <div className="flex flex-col items-center text-center">
        <Badge color="green">Limited Drop</Badge>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
          <span className="glitch animate-glow" data-text="BOO CANDY">BOO CANDY</span>
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Gen Z Halloween candy with neon-core vibes. Zero cringe. Maximum treat.
        </p>
      </div>
    </section>
  );
}
