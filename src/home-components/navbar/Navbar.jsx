import Logo from '../../assets/lws-logo-en.svg';
const Navbar = () => {
  return (
    <div className="flex justify-between py-5 max-w-7xl mx-auto ">
      <div>
        <img className="" src={Logo} alt="logo" />
      </div>

      <button className="px-3 h-10 bg-slate-700 rounded-full text-white">
        Get Admission
      </button>
    </div>
  );
};

export default Navbar;
