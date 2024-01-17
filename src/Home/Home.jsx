import Footer from '../home-components/footer/Footer';
import Navbar from '../home-components/navbar/Navbar';
import Banner from './../home-components/banner/Banner';

const Home = () => {
  return (
    <>
      <div className="bg-[#127958] ">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className="bg-[#172227]">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
