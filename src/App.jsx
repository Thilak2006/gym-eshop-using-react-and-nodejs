import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [authError, setAuthError] = useState('');
  const [showOrderAccepted, setShowOrderAccepted] = useState(false);
  const [showAddedPopup, setShowAddedPopup] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      setShowSignInPopup(true);
      return;
    }
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowAddedPopup(true);
    setTimeout(() => setShowAddedPopup(false), 1000);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleBuyNow = () => {
    setCart([]);
    setShowOrderAccepted(true);
  };

  const handleSignIn = async ({ email, password }) => {
    try {
      const res = await axios.post('http://localhost:5050/api/users/login', { email, password });
      setIsAuthenticated(true);
      setUser(res.data.user);
      setAuthError('');
      navigate('/');
    } catch (err) {
      setAuthError(err.response?.data?.error || 'Login failed');
    }
  };

  const handleSignUp = async ({ name, email, password }) => {
    try {
      const res = await axios.post('http://localhost:5050/api/users/register', {
        username: name,
        email,
        password,
      });
      setAuthError('');
      navigate('/signin'); 
    } catch (err) {
      setAuthError(err.response?.data?.error || 'Registration failed');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCart([]);
    navigate('/');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onSignOut={handleSignOut}
        onSignInClick={handleSignInClick}
      />
      {showAddedPopup && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 bg-opacity-40 text-white px-6 py-2 my-5 rounded shadow-lg z-50 transition-opacity duration-300">
          Added
        </div>
      )}
      {showSignInPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-4 text-lg font-semibold">Sign in required</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowSignInPopup(false);
                navigate('/signin');
              }}
            >
              Go to Sign In
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} onBuyNow={handleBuyNow} />} />
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} error={authError} />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} error={authError} />} />
      </Routes>
      {showOrderAccepted && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-4 text-lg font-semibold">Order Accepted!</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setShowOrderAccepted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
