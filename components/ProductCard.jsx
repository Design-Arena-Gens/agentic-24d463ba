'use client';
import { useCart } from '../providers/CartProvider';

export default function ProductCard({ product }) {
  const { add } = useCart();
  return (
    <div className="card group flex flex-col gap-3">
      <div className={`relative flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${product.color}`}>
        <span className="text-5xl drop-shadow-xl animate-floaty">{product.emoji}</span>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-xs text-white/60">{product.tagline}</p>
        </div>
        <span className="text-halloween-green font-bold">${product.price.toFixed(2)}</span>
      </div>
      <button
        className="btn-primary w-full"
        onClick={() => add({ id: product.id, name: product.name, price: product.price, qty: 1 })}
      >
        Add to cart
      </button>
    </div>
  );
}
