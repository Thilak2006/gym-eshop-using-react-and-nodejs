import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import SignIn from './components/SignIn';
import { CartProvider } from './context/CartContext';
import { products, categories } from './data/products';
import { Product } from './types';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showSignIn, setShowSignIn] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setCartOpen(true)} onSearch={setSearchQuery} onSignInClick={() => setShowSignIn(true)} />
      <Hero />

      {/* Products Section */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="text-gray-600">
            Quality equipment to power your fitness journey
          </p>
        </div>

        {/* Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Sort & Results Count */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProducts.length}</span> products
            {searchQuery && (
              <span>
                {' '}
                for "<span className="font-semibold">{searchQuery}</span>"
              </span>
            )}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border-gray-200 bg-white px-4 py-2 text-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <SlidersHorizontal className="mb-4 h-16 w-16 text-gray-300" />
            <h3 className="mb-2 text-xl font-semibold text-gray-800">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        
      </section>

      {/* Featured Categories */}
     
<section id="categories" className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
              Shop by Category
            </h2>
            <p className="text-gray-400">
              Find exactly what you need for your workout
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Weights', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop', count: 8 },
              { name: 'Cardio', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop', count: 4 },
              { name: 'Machines', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop', count: 5 },
              { name: 'Accessories', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop', count: 7 },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#products"
                onClick={() => setSelectedCategory(cat.name.toLowerCase())}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                  <p className="text-gray-300">{cat.count} Products</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Reviews from fitness enthusiasts
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Mike Johnson', role: 'Personal Trainer', text: 'Best quality equipment I\'ve ever purchased. The dumbbells are solid and the customer service is excellent!' },
              { name: 'Sarah Williams', role: 'Home Gym Owner', text: 'Transformed my garage into a professional gym thanks to Repify. Great prices and fast shipping!' },
              { name: 'David Chen', role: 'Gym Owner', text: 'We\'ve equipped our entire gym with Repify products. Reliable, durable, and our members love them.' },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Cart Drawer */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      {/* Sign In Modal */}
      {showSignIn && (
        <SignIn 
          onClose={() => setShowSignIn(false)} 
          onSwitchToSignUp={() => {
            setShowSignIn(false);
            alert('Sign up page would open here!');
          }}
        />
      )}
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
