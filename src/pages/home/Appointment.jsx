import small from '../../assets/images/doctor-small.png'
import bgImg from '../../assets/images/appointment.png';
const AppointmentBanner = () => {
    return (<div className='relative'>
        <div className='absolute inset-0 z-0'>
            <img src={bgImg} alt="bg img" className='w-full h-full object-cover opacity-90' />
        </div>
      <div className='flex flex-col lg:flex-row justify-center items-center px-4 py-10 lg:px-20 lg:py-24 gap-10 relative z-10'>
        <div className='lg:w-1/2'>
            <img src={small} alt="small doctor" />
        </div>
        <div className='lg:w-1/2 text-center lg:text-left'>
            <p className='text-teal-500 text-xl font-semibold'>Appointment</p>
            <h1 className='text-3xl lg:text-4xl font-bold text-white'>Make an appointment Today</h1>
            <p className='text-gray-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <button className='bg-teal-400 text-white font-semibold px-6 py-2 rounded hover:bg-teal-500 transition'>Start Now</button>
        </div>
      </div>
      </div>);
  };
  
  export default AppointmentBanner;
  