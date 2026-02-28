import { X, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { cn } from '../utils/cn';
import { useState } from 'react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 z-50 flex items-center justify-center sm:inset-8">
        <div className="relative max-h-full w-full max-w-4xl overflow-auto rounded-2xl bg-white shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className={cn(
                  "absolute left-4 top-4 rounded-full px-4 py-1.5 text-sm font-bold text-white",
                  product.badge === 'Sale' ? 'bg-red-500' :
                  product.badge === 'Best Seller' ? 'bg-orange-500' :
                  'bg-blue-500'
                )}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 sm:p-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-orange-500">
                {product.category}
              </p>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.name}
              </h2>
              {/* Rating */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-orange-500">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-600">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-gray-600">{product.description}</p>

              {/* Quantity */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mb-6 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-2 rounded-full py-4 font-semibold transition-all",
                    product.inStock
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02]"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  )}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all",
                    isWishlisted
                      ? "border-red-500 bg-red-50 text-red-500"
                      : "border-gray-200 text-gray-400 hover:border-red-500 hover:text-red-500"
                  )}
                >
                  <Heart className={cn("h-6 w-6", isWishlisted && "fill-current")} />
                </button>
              </div>

              {/* Features */}
              <div className="mt-auto space-y-3 border-t pt-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-green-500" />
                  <span>Free shipping on orders over ₹3000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>2-year manufacturer warranty</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 text-orange-500" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
