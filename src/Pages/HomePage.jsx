// import ReactTabs from "../Tabs/ReactTabs";

// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Companies from "../Companies/Companies";
import Contact from "../Contact/Contact";
import Jobs from "../LatestJobs/Jobs";
// import ReactTabs from "../Tabs/ReactTabs";

const HomePage = () => {

    // const jobs = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto">
            {/* <ReactTabs></ReactTabs> */}
            
            <Banner></Banner>
            <Jobs></Jobs>
            <Contact></Contact>
            <Companies></Companies>
        </div>
    );
};

export default HomePage;