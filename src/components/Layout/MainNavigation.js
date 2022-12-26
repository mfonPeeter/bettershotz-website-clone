import { useState } from 'react';

import logoImage from '../../assets/logo.svg';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overflowY = 'overflow-y-hidden';

  const navToggleHandler = () => {
    setIsOpen(prevState => !prevState);
    document.body.classList.toggle(overflowY);
  };

  return (
    <div className="box-container pt-7 pb-4 md:pt-9 lg:pt-8">
      <nav className="flex justify-between items-center font-extrabold">
        <a href="https://bettershotz-clone.netlify.app/">
          <img src={logoImage} alt="Bettershotz logo" />
        </a>
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

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            className={`z-20 fixed hamburger block focus:outline-none md:hidden ${
              isOpen ? 'open' : ''
            }`}
            onClick={navToggleHandler}
          >
            <div className="hamburger-top"></div>
            <div className="hamburger-middle"></div>
            <div className="hamburger-bottom"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`z-10 fixed top-0 right-0 flex flex-col space-y-8 h-screen w-0 pl-10 py-20 text-2xl text-zinc-500 font-playfair font-bold bg-blackGray  opacity-0 duration-500 transition-all ease-[cubic-bezier(0.5,1,0.89,1] md:hidden ${
          isOpen ? 'w-[98%] opacity-100' : ''
        }`}
      >
        <a href="#themes" className="hover:text-white">
          Themes
        </a>
        <a href="#features" className="hover:text-white">
          Features
        </a>
        <a href="#price" className="hover:text-white">
          Price list
        </a>
        <a href="#faq" className="hover:text-white">
          Faq
        </a>
        <div>
          <a
            href="mailto:godimfon@gmail.com"
            className="inline-block px-6 py-3 text-base text-saffron border border-saffronDark rounded hover:border-saffron"
          >
            Request today
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
