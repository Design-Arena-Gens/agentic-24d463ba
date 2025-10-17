'use client';
import Link from 'next/link';
import { useCart } from '../providers/CartProvider';

export default function Navbar() {
  const { count } = useCart();
  return (
    <nav className="sticky top-4 z-50 mb-6 flex items-center justify-between rounded-full border border-white/10 bg-zinc-900/60 px-4 py-3 backdrop-blur-md shadow-neon">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold tracking-tight glitch animate-glow" data-text="BOO CANDY">BOO CANDY</span>
        <span className="text-halloween-green text-xl">👻🍬</span>
      </Link>
      <div className="flex items-center gap-3">
        <Link href="/cart" className="btn-primary flex items-center gap-2">
          <span>Cart</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-halloween-orange font-bold">{count}</span>
        </Link>
      </div>
    </nav>
  );
}
