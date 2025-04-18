import bgImg from '../../assets/images/appointment.png'; // replace with your bg path

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-20 px-4 flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="p-8 md:p-12 rounded-xl w-full max-w-2xl text-white">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-cyan-300 text-lg">Contact Us</p>
          <h2 className="text-3xl md:text-4xl">Stay connected with us</h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-white text-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-white text-gray-400  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-white text-gray-400  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 transition text-white font-semibold py-3 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
