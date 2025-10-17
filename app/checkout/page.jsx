'use client';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CartProvider, useCart } from '../../providers/CartProvider';
import { useState } from 'react';

function CheckoutInner() {
  const { items, total, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  const placeOrder = () => {
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <div className="card text-center">
        <h2 className="mb-2 text-2xl font-extrabold text-halloween-green">Order placed ✅</h2>
        <p className="mb-4 text-white/70">We slid into your DMs (jk, email) with the receipt.</p>
        <Link href="/" className="btn-primary inline-block">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="mb-3 text-xl font-bold">Order Summary</h2>
        <ul className="space-y-2">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between text-sm">
              <span>{i.qty}× {i.name}</span>
              <span>${(i.qty * i.price).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-white/10 pt-3">
          <span>Total</span>
          <span className="font-extrabold text-halloween-green">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-3 text-xl font-bold">Payment</h2>
        <p className="mb-4 text-sm text-white/70">No real payments here. It\'s Halloween roleplay 🎭</p>
        <button onClick={placeOrder} className="btn-primary w-full">Place order</button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <CartProvider>
      <Navbar />
      <h1 className="mb-6 text-3xl font-extrabold">Checkout</h1>
      <CheckoutInner />
      <Footer />
    </CartProvider>
  );
}
