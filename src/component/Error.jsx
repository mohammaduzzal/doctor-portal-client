import { Link } from 'react-router-dom';
import error from '../assets/images/dribbble_1.gif';

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center">
      <img src={error} alt="404 Error" className="w-96 max-w-full mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-6 max-w-xl">
        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 transition text-white font-semibold rounded-md shadow-md">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
