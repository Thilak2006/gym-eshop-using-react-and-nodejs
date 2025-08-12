import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, user, onSignOut, onSignInClick }) => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
    <div className="font-bold text-xl">
      <Link to="/">Gym E-Shop</Link>
    </div>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/products" className="hover:text-yellow-400">Products</Link>
      <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
      {isAuthenticated ? (
        <>
          <span className="ml-2">{user?.name}</span>
          <button onClick={onSignOut} className="ml-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Sign Out</button>
        </>
      ) : (
        <button onClick={onSignInClick} className="ml-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">Sign In / Sign Up</button>
      )}
    </div>
  </nav>
);

export default Navbar; 