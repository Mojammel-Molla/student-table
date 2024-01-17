import Logo from '../../assets/lws-logo-en.svg';
const Navbar = () => {
  return (
    <div className="flex justify-between py-5 max-w-7xl mx-auto ">
      <img src={Logo} alt="logo" />

      <button className="px-2 py-2 bg-slate-700 rounded-lg text-white">
        Get Admission
      </button>
    </div>
  );
};

export default Navbar;
