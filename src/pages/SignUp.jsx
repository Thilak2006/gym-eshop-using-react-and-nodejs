import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = ({ onSignUp, error }) => {
  const [localError, setLocalError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 8) {
      setLocalError('Password must be at least 8 characters long.');
      return;
    }
    setLocalError('');
    onSignUp({ name, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
        {(error || localError) && <div className="mb-4 text-red-500">{localError || error}</div>}
        <div className="mb-4">
          <label className="block mb-1 text-white">Name</label>
          <input name="name" type="text" className="w-full border px-3 py-2 rounded" placeholder='Name' required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Email</label>
          <input name="email" type="email" className="w-full border px-3 py-2 rounded" placeholder='Email' required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-white">Password</label>
          <input name="password" type="password" className="w-full border px-3 py-2 rounded" placeholder='Password' required />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold">Sign Up</button>
        <div className="mt-4 text-center text-white">
          Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp; 