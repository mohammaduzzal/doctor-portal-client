import Appointment from "./Appointment";
import Banner from "./Banner";
import Contact from "./Contact";
import Dental from "./Dental";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ThreeCard from "./ThreeCard";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ThreeCard/>
            <Services/>
            <Dental/>
            <Appointment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;