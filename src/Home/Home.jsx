import Footer from '../home-components/footer/Footer';
import Navbar from '../home-components/navbar/Navbar';
import StudentTable from '../home-components/student-table/StudentTable';
import Banner from './../home-components/banner/Banner';

const Home = () => {
  return (
    <>
      <div className="bg-[#127958] ">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div className="bg-[#172227]">
        <StudentTable></StudentTable>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
