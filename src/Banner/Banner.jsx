
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="h-[400px] lg:h-[800px] bg-cover bg-[url('https://i.ibb.co/cLpKYK5/banner.jpg')]">
                <div className="hero-overlay opacity-50 ">
                <h2 className="text-2xl lg:text-7xl font-bold italic text-white pt-60 pl-16">Technology Development & <br />MarketPlaces</h2>
                <p className="text-xs lg:text-2xl font-bold italic w-[700px] pl-16 text-white">Currently the most popular freelancing job is Web Development. Come to the Online MarketPlace to buy this course. <br />In addition to freelancing courses, There are to many more course such as Digital Marketing, Graphics Design, Video Editing, SEO,<br /> Machine Learning, Blockchain Development etc. So come to the Online MarketPlace to buy this courses today in this time.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;