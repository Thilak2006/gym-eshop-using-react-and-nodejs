import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-110"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110",
              isWishlisted ? "bg-red-500 text-white" : "bg-white text-gray-800"
            )}
          >
            <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.badge && (
            <span className={cn(
              "rounded-full px-3 py-1 text-xs font-bold text-white",
              product.badge === 'Sale' ? 'bg-red-500' :
              product.badge === 'Best Seller' ? 'bg-orange-500' :
              'bg-blue-500'
            )}>
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="rounded-full bg-white px-4 py-2 font-bold text-gray-800">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-orange-500">
          {product.category}
        </p>
        <h3 className="mb-2 line-clamp-2 font-bold text-gray-800 transition-colors group-hover:text-orange-500">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-orange-400">
  ₹{product.price.toLocaleString()}
</span>
            {product.originalPrice && (
  <span className="text-sm text-gray-500 line-through">
    ₹{product.originalPrice.toLocaleString()}
  </span>
)}
          </div>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-all",
              product.inStock
                ? "bg-orange-500 text-white hover:bg-orange-600 hover:scale-110"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
