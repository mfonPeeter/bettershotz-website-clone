import React from 'react';
import Icon from '../Icon/Icon';

const Cta = () => {
  return (
    <header className="mb-14 bg-hero-background bg-cover bg-no-repeat bg-left">
      <div className="container mx-auto max-w-xl pt-28 pb-14 text-center sm:max-w-2xl sm:pt-96 sm:pb-72 lg:max-w-5xl">
        <p className="font-benchnine font-bold text-sm text-saffron mb-5 uppercase tracking-[0.3em] sm:mb-8 sm:text-lg">
          Do you like our template?
        </p>

        <h3 className="font-playfair text-2xl mb-7 leading-snug sm:mb-16 sm:text-[3.25rem] sm:leading-tight lg:mb-20 lg:text-7xl lg:leading-none">
          <span className="inline-block text-white lg:mb-4">
            Build your portfolio today
          </span>
          <br />
          <span className="text-saffron">and get online in a while</span>
        </h3>

        <div className="flex space-x-6 justify-center">
          <a
            href="https://bettershotz-clone.netlify.app/"
            className="hidden px-7 py-4 text-white font-bold border border-gray-500 rounded hover:border-white sm:flex sm:items-center sm:space-x-2"
          >
            <Icon icon="controller-play" size={22} />
            <p>Check the demo</p>
          </a>
          <a
            href="mailto:godimfon@gmail.com"
            className="px-7 py-4 text-saffron font-bold border border-saffronDark rounded hover:border-saffron"
          >
            Request today <span className="ml-2">&gt;</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Cta;
