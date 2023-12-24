import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import HomeNavBar from "../../Components/Navbar/HomeNavBar";

const homePage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <HomeNavBar />
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default homePage;
