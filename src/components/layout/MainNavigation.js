import logoImage from '../../assets/logo.svg';

const MainNavigation = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-6 pt-7 pb-4 md:pt-9 lg:pt-8 ">
      <nav className="flex justify-between items-center font-extrabold">
        <img src={logoImage} alt="Bettershotz logo" />
        <ul className="hidden text-zinc-500 md:flex md:justify-between md:space-x-10">
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
          href="mailto:godimfon@gmail.com"
          className="hidden px-7 py-4 text-saffron border border-saffronDark rounded hover:border-saffron md:flex"
        >
          Request today
        </a>
      </nav>
    </div>
  );
};

export default MainNavigation;
