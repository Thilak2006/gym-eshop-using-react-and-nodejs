import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = ({ onAddToCart }) => (
  <div className="p-6 bg-slate-600">
    <h1 className="text-3xl font-bold mb-4 text-white">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

export default Products; 