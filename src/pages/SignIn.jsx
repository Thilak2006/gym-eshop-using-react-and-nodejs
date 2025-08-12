import { Link } from 'react-router-dom';

const SignIn = ({ onSignIn, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    onSignIn({ email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign In</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 text-white">Email</label>
          <input name="email" type="email" className="w-full border px-3 py-2 rounded" placeholder='Email' required />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-white">Password</label>
          <input name="password" type="password" className="w-full border px-3 py-2 rounded" placeholder='Password' required />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold">Sign In</button>
        <div className="mt-4 text-center text-white">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn; 