import BannerImage from '../../assets/hero-graphics.svg';

const Banner = () => {
  return (
    // <div classNameName="md:flex justify-between md:h-[60vh] w-full max-w-7xl mx-auto gap-10 px-5">
    //   <div classNameName="md:w-1/2 my-16">
    //     <h1 classNameName="text-5xl font-bold text-white ">
    //       The Future of Learning starts with students at the center
    //     </h1>
    //     <button classNameName="text-white rounded-full bg-green-600 px-2 py-1 mt-5">
    //       Learn More
    //     </button>
    //   </div>
    //   <div classNameName="md:w-1/2">
    //     <img
    //       classNameName="transform motion-safe:transition-transform motion-safe:hover:translate-y-[20px] motion-safe:duration-300"
    //       src={BannerImage}
    //       alt="Banner Image"
    //     />
    //   </div>
    // </div>
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src={BannerImage}
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="text-4xl text-white lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a
              className="text-white px-5 py-2.5 bg-[#038C61] rounded-[44px]"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
