'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CartProvider, useCart } from '../../providers/CartProvider';

function CartInner() {
  const { items, total, remove, setQty } = useCart();
  return (
    <div className="space-y-6">
      {items.length === 0 ? (
        <div className="card text-center">
          <p className="mb-4">Your cauldron is empty 🫙</p>
          <Link href="/" className="btn-primary inline-block">Shop candy</Link>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i.id} className="card flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{i.name}</p>
                  <p className="text-sm text-white/60">${(i.price * i.qty).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={i.qty}
                    onChange={(e) => setQty(i.id, Number(e.target.value || 1))}
                    className="w-16 rounded-lg bg-black/40 px-2 py-1 text-center"
                  />
                  <button className="px-3 py-1 rounded-lg border border-white/10" onClick={() => remove(i.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <p className="text-white/80">Total</p>
            <p className="text-2xl font-extrabold text-halloween-green">${total.toFixed(2)}</p>
          </div>
          <Link href="/checkout" className="btn-primary w-full text-center">Checkout</Link>
        </>
      )}
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <Navbar />
      <h1 className="mb-6 text-3xl font-extrabold">Your Cart</h1>
      <CartInner />
      <Footer />
    </CartProvider>
  );
}
