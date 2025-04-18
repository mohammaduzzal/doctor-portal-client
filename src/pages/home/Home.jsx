import Appointment from "./Appointment";
import Banner from "./Banner";
import Dental from "./Dental";
import Services from "./Services";
import ThreeCard from "./ThreeCard";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ThreeCard/>
            <Services/>
            <Dental/>
            <Appointment/>
        </div>
    );
};

export default Home;