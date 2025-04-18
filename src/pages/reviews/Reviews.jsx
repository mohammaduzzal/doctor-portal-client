import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/appointment.png'; 
const Reviews = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
     <div className=" p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-gray-300">
          <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">Leave a Review</h3>
          <form  className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            //   value={form.name}
             
              required
            />
            <textarea
              name="message"
              placeholder="Your Review"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            //   value={form.message}
            
              required
            />
            <select
              name="rating"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            //   value={form.rating}
            
              required
            >
              <option value="">Select Rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition"
            >
              Submit Review
            </button>
          </form>
        </div>
    </div>
  );
};

export default Reviews;
