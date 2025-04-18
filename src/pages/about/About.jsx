import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/login.png'; // Use a dentist or clinic-related image

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Dentist"
            className="rounded-xl shadow-2xl w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-teal-500 uppercase font-semibold text-lg mb-2">About Our Clinic</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Exceptional Dental Care <span className="text-teal-600">for All Ages</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-teal-500">SmileCare Dental</span>, we are
            committed to providing gentle, personalized dental services using the latest
            technologies. Whether it's routine cleanings, cosmetic dentistry, or advanced procedures
            — your smile is in expert hands.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our experienced and compassionate team ensures a calm, welcoming atmosphere for every
            patient. We believe in making your visit as stress-free and comfortable as possible.
          </p>
          <Link to='/team'><button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 transition text-white font-semibold rounded-md">
            Meet the Team
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
