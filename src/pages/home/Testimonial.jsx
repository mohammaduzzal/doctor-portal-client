import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import bg from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div className='w-11/12 mx-auto my-10 relative'>
              <div className="flex justify-between">
               <div className='flex flex-col  text-start  my-1'>
               <p className="text-xl text-cyan-300">Testimonials</p>
               <h2 className="text-2xl md:text-4xl text-gray-600">What Our Patients Says</h2>
               </div>
               <div>
               <img src={bg} alt="" className='w-10 h-10 md:w-[192px] md:h-[156px]'/>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 text-gray-600">
                <div className='flex flex-col justify-center border-white shadow-lg rounded-md p-4 '>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal dist to using Content here, content</p>
                    <div className='flex items-center mt-5'>
                        <img src={people1} alt="people1" className='w-[60px] h-[60px] border-teal-500 border rounded-full
                        ' />
                        <p className='ml-2'>Nick Joy <br />USA</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center border-white shadow-lg rounded-md p-4'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal dist to using Content here, content</p>
                    <div className='flex items-center mt-5'>
                        <img src={people2} alt="people1" className='w-[60px] h-[60px] border-teal-500 border rounded-full
                        ' />
                        <p className='ml-2'>fizz <br />USA</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center border-white shadow-lg rounded-md p-4'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal dist to using Content here, content</p>
                    <div className='flex items-center mt-5'>
                        <img src={people3} alt="people3" className='w-[60px] h-[60px] border-teal-500 border rounded-full
                        ' />
                        <p className='ml-2'>Luke <br />USA</p>
                    </div>
                </div>
            </div>
            
        </div>
         );
};

export default Testimonial;