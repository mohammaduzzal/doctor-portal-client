import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/appointment.png'; 
const Signup = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Type Here"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 transition text-white font-semibold py-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-200">
          Already have an account? <Link to='/auth/login'><span  className="text-teal-300 hover:underline cursor-pointer">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
