import bannerImg from '../../assets/images/chair.png'
import bannerBg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute inset-0 z-0'>
                <img src={bannerBg} alt="banner background image" className='w-full h-full'/>
            </div>
            <div className="hero md:h-[400px] relative z-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-600 ">Your New Smile Starts Here</h1>
                        <p className='mt-2 ml-1 md:ml-2 mb-2 text-gray-600'>Your Smile Deserves the Best Care Book Painless Dental Treatments Today</p>
                        <button className="btn bg-cyan-400 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;