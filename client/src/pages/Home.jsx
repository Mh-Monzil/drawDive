import Banner from "../component/Banner";
import CategoriesSection from "../component/CategoriesSection";
import CraftItemsSection from "../component/CraftItemsSection";
import Contact from '../component/Contact';
import Testimonial from "../component/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <CraftItemsSection />
            <CategoriesSection />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;