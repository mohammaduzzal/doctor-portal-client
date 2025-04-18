import zero from '../../assets/images/fluoride.png'
import one from '../../assets/images/cavity.png'
import two from '../../assets/images/whitening.png'
const Services = () => {
    return (
        <div className="my-10">
            <div className="flex flex-col justify-center text-center items-center my-1">
                <p className="text-xl text-cyan-300">OUR SERVICES</p>
                <h2 className="text-4xl text-gray-600">Services We Provide</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* zero */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={zero}
                            alt="zero"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-700">Fluoride Treatment</h2>
                        <p className='text-gray-600'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
                {/* one */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={one}
                            alt="one"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-700">Cavity Filling</h2>
                        <p className='text-gray-600'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
                {/* two */}
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={two}
                            alt="two"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-700">Teeth Whitening</h2>
                        <p className='text-gray-600'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;