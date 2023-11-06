// import ReactTabs from "../Tabs/ReactTabs";

// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Jobs from "../LatestJobs/Jobs";

const HomePage = () => {

    // const jobs = useLoaderData();

    return (
        <div>
            {/* <ReactTabs></ReactTabs> */}
            
            <Banner></Banner>
            <Jobs></Jobs>
        </div>
    );
};

export default HomePage;