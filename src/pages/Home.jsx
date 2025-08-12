import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => (
  <div className="relative min-h-screen p-6 bg-slate-600 text-white ">
    {/* Featured Products */}
    <h1 className="text-3xl font-bold mb-4 ">Welcome to Gym E-Shop!</h1>
    <p className="mb-6">Your one-stop shop for gym equipment and accessories.</p>
    <h2 className="text-2xl font-semibold mb-2">Featured Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.slice(0, 3).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    {/* About Section */}
    <div className="mb-8 mt-10 p-4 bg-white bg-opacity-10 rounded">
      <h2 className="text-xl font-bold mb-2">About Gym E-Shop</h2>
      <p>
        At Gym E-Shop, we are passionate about helping you achieve your fitness goals. We offer a curated selection of high-quality gym equipment and accessories, perfect for both beginners and seasoned athletes. Shop with confidence and take your workouts to the next level!
      </p>
    </div>

    {/* Shop by Category */}
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2">Shop by Category</h2>
      <div className="flex gap-6 justify-center">
        <div className="flex flex-col items-center">
          <span role="img" aria-label="Dumbbells" className="text-3xl">🏋️‍♂️</span>
          <span>Dumbbells</span>
        </div>
        <div className="flex flex-col items-center">
          <span role="img" aria-label="Yoga" className="text-3xl">🧘‍♀️</span>
          <span>Yoga</span>
        </div>
        <div className="flex flex-col items-center">
          <span role="img" aria-label="Cardio" className="text-3xl">🏃‍♂️</span>
          <span>Cardio</span>
        </div>
        <div className="flex flex-col items-center">
          <span role="img" aria-label="Accessories" className="text-3xl">🎒</span>
          <span>Accessories</span>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="my-8">
      <h2 className="text-xl font-bold mb-2">What Our Customers Say</h2>
      <div className="space-y-2">
        <blockquote className="italic">"Great quality products and fast delivery!"</blockquote>
        <blockquote className="italic">"The adjustable dumbbells are perfect for my home gym."</blockquote>
        <blockquote className="italic">"Excellent customer service and support."</blockquote>
      </div>
    </div>

    <footer className="absolute left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 text-gray-300 text-center py-3 w-full">
      &copy; {new Date().getFullYear()} Gym E-Shop. All rights reserved.
    </footer>
  </div>
);

export default Home; 