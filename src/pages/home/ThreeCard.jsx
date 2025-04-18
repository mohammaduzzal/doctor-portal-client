import clock from '../../assets/images/alarm-clock_16435423.png';
import location from '../../assets/images/pin_5591303.png';
import contact from '../../assets/images/contact-mail_3095583.png';
const ThreeCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 text-white w-11/12 mx-auto'>
           {/* zero */}
           <div className='flex flex-col md:flex-row justify-center items-center gap-5 border border-white shadow-lg rounded-md md:w-[400px] md:h-[180px] bg-cyan-400 hover:bg-gray-700'>
            <div>
                <img src={clock} alt="clock"  className='w-10 md:w-20 h-10 md:h-20'/>
            </div>
            <div>
                <h2 className='text-xl font-bold'>Opening Hours</h2>
                <p>we are open 24/7</p>
            </div>
           </div>
           {/* one */}
           <div className='flex flex-col md:flex-row justify-center items-center gap-5 border border-white shadow-lg rounded-md bg-cyan-400  md:w-[400px] md:h-[180px] hover:bg-gray-700'>
            <div>
                <img src={location} alt="location"  className='w-10 md:w-20 h-10 md:h-20'/>
            </div>
            <div>
                <h2 className='text-xl font-bold'> Visit our location</h2>
                <p>Brooklyn,United States</p>
            </div>
           </div>
           {/*two */}
           <div className='flex flex-col md:flex-row justify-center items-center gap-5 border border-white shadow-lg rounded-md  md:w-[400px] md:h-[180px] bg-cyan-400 hover:bg-gray-700'>
            <div>
                <img src={contact} alt="contact"  className='w-10 md:w-20 h-10 md:h-20'/>
            </div>
            <div>
                <h2 className='text-xl font-bold'>Contact us now</h2>
                <p>+000 123 456789</p>
            </div>
           </div>

        </div>
    );
};

export default ThreeCard;