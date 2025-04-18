import treatment from '../../assets/images/treatment.png'
const Dental = () => {
    return (
        <div className='my-10 w-10/12 mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={treatment}
                        className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6 text-gray-600">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <button className="btn bg-cyan-400 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dental;