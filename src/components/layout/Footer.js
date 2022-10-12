import React from 'react';

import logo from '../../assets/logo-vertical.svg';

const Footer = () => {
  return (
    <footer className="pb-16 sm:pb-24">
      {/* Footer Navigation */}
      <ul className="flex space-x-5 justify-center mb-5 text-zinc-500 text-sm font-semibold sm:space-x-11 sm:mb-8 sm:text-base">
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

      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-5 sm:mb-8"></div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col items-center space-y-12 sm:space-y-16">
        {/* Text */}
        <div className="mx-auto px-4 text-[0.6875rem] text-zinc-400 text-center sm:text-[0.8125rem]">
          <p>
            Webdesign by{' '}
            <span className="text-zinc-300">Kennymax Visual Designer</span>
            <span className="dot mx-3"></span>
            Developed by <span className="text-zinc-300">PragueCoding.cz </span>
            <span className="dot mx-3"></span>
            Copyright &copy; 2022
          </p>
        </div>

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Bettershotz logo vertical"
            className="ficon w-30 h-30"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
