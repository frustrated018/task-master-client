import Banner from "../../Components/Banner/Banner";
import HomeNavBar from "../../Components/Navbar/HomeNavBar";

const homePage = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <HomeNavBar />
      </div>
      <Banner />
    </>
  );
};

export default homePage;
