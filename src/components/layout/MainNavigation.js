import logoImage from '../../assets/logo.svg';

const MainNavigation = () => {
  return (
    // Navigation Container
    <div className="container mx-auto max-w-full px-6 py-9">
      {/* Menu/Logo Container */}
      <nav className="flex justify-between items-center font-extrabold">
        {/* Logo */}
        <img src={logoImage} alt="Bettershotz logo" />
        {/* Menu */}
        <ul className="hidden text-lg text-zinc-500 lg:flex lg:justify-between lg:space-x-12">
          <li>
            <a href="#themes" className="hover:text-white">
              Themes
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#price" className="hover:text-white">
              Price list
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-white">
              Faq
            </a>
          </li>
        </ul>
        <a
          href="mailto:goidmfon@gmail.com"
          className="hidden px-7 py-4 text-lg text-saffron border border-saffronDark rounded hover:border-saffron lg:flex"
        >
          Request today
        </a>
      </nav>
    </div>
  );
};

export default MainNavigation;
