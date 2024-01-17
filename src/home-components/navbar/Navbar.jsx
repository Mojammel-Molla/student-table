import Logo from '../../assets/lws-logo-en.svg';
const Navbar = () => {
  return (
    <div className="flex justify-between py-5 max-w-7xl mx-auto ">
      <img src={Logo} alt="logo" />

      <button className="px-3 h-10 bg-slate-700 rounded-full text-white">
        Get Admission
      </button>
    </div>
  );
};

export default Navbar;
