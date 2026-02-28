import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Dumbbell, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';

interface HeaderProps {
  onCartClick: () => void;
  onSearch: (query: string) => void;
  onSignInClick?: () => void;
}
export function Header({ onCartClick, onSearch, onSignInClick }: HeaderProps) {
  const { cartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
<div className="flex flex-col leading-tight cursor-pointer">
  <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
    REPIFY
  </h1>
  <span className="text-[11px] uppercase tracking-widest text-gray-400">
    Everything your strength needs
  </span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">Home</a>
            <a href="#products" className="text-sm font-medium hover:text-orange-400 transition-colors">Products</a>
            <a href="#categories" className="text-sm font-medium hover:text-orange-400 transition-colors">Categories</a>
            <a href="#about" className="text-sm font-medium hover:text-orange-400 transition-colors">About</a>
          </nav>

          {/* Search, Cart, Account */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onSearch(e.target.value);
                }}
                className="w-64 rounded-full bg-gray-700/50 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </form>

            <button 
              onClick={onSignInClick}
              className="hidden sm:flex items-center gap-2 rounded-full bg-gray-700/50 px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>

            <button
              onClick={onCartClick}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full rounded-lg bg-gray-700/50 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </form>

          <nav className="flex flex-col gap-2">
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors">Home</a>
            <a href="#products" className="rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors">Products</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors">Categories</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors">Deals</a>
          </nav>
        </div>
      </div>
    </header>
  );
}