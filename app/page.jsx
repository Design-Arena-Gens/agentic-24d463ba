import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import { products } from '../lib/products';
import { CartProvider } from '../providers/CartProvider';

export default function HomePage() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Hero />
        <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
