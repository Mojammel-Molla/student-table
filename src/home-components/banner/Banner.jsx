import BannerImage from '../../assets/hero-graphics.svg';
const Banner = () => {
  return (
    <div className="md:flex justify-between md:h-[60vh] w-full max-w-7xl mx-auto gap-10 px-5">
      <div className="md:w-1/2 my-16">
        <h1 className="text-5xl font-bold text-white ">
          The Future of Learning starts with students at the center
        </h1>
        <button className="text-white rounded-full bg-green-600 px-2 py-1 mt-5">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={BannerImage} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
