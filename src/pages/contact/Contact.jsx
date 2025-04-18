import bgImg from '../../assets/images/appointment.png'; // Use a soft, professional background image

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-gray-200 max-w-3xl mx-auto p-8 rounded-xl shadow-lg backdrop-blur-md">
        <div className="text-center mb-8">
          <p className="text-teal-500 text-lg font-semibold uppercase">Contact Us</p>
          <h2 className="text-3xl font-bold text-gray-200">Stay Connected with SmileCare</h2>
          <p className="text-gray-600 mt-2">We’d love to hear from you. Fill out the form below!</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-200 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
