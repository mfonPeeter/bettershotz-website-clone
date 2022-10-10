import React from 'react';

import firstIcon from '../../assets/icons/icon-1.png';
import secondIcon from '../../assets/icons/icon-2.png';

const Pricing = () => {
  return (
    <section>
      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-14 md:mb-20"></div>
      </div>

      {/* Header */}
      <div className="text-center">
        <h4 className="mb-3 text-zinc-400 text-sm font-benchnine font-bold tracking-[5.3px] uppercase sm:mb-7 sm:text-lg">
          - Bettershotz Plans -
        </h4>
        <h2 className="mb-16 text-white text-2xl font-playfair sm:mb-28 sm:text-[2.5rem]">
          Choose the best plan for you
        </h2>
      </div>

      {/* Global Container */}
      <div className="box-container mb-12">
        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0 md:gap-x-7">
          {/* Box 1 */}
          <div className="relative px-10 py-16 pb-14 bg-darkGrayLight">
            {/* Icon */}
            <img
              src={firstIcon}
              alt="Yellow Icon"
              className="w-24 h-24 absolute -top-12 left-2/4 -translate-x-2/4"
            />

            {/* Header Container */}
            <div className="leading-snug mb-7 text-center">
              <h3 className="text-[1.375rem] text-saffron font-playfair">
                Hosting & maintenance
              </h3>
              <p className="text-[2.5rem] text-white font-benchnine">
                $1290 one time
              </p>
              <p className="text-xl text-zinc-400 font-benchnine uppercase">
                +$90 monthly
              </p>
            </div>

            {/* List Container */}
            <ul className="first-box-margin flex flex-col space-y-4 mb-10 list-none ">
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-saffron" />
                </div>
                <p className="text-zinc-400">
                  Up to <span className="text-white">5000 photos</span>
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-saffron" />
                </div>
                <p className="text-zinc-400">
                  Secure hosting with backups included
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-saffron" />
                </div>
                <p className="text-zinc-400">
                  <span className="text-white">Automatic </span>system updates
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-saffron" />
                </div>
                <p className="text-zinc-400">
                  Website at custom domain like
                  <span className="text-white"> https://www.example.com</span>
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-saffron" />
                </div>
                <p className="text-zinc-400">
                  Optional help with all the
                  <span className="text-white"> setup for $990</span>
                </p>
              </li>
            </ul>

            {/* Link Button */}
            <a
              href="mailto:godimfon@gmail.com"
              className="inline-block px-7 py-4 w-full text-saffron text-center font-bold border border-saffronDark rounded hover:border-saffron"
            >
              Request today <span className="ml-2">&gt;</span>
            </a>
          </div>

          {/* Box 2 */}
          <div className="relative px-10 py-16 pb-14 bg-darkGrayLight">
            {/* Icon */}
            <img
              src={secondIcon}
              alt="Yellow Icon"
              className="w-24 h-24 absolute -top-12 left-2/4 -translate-x-2/4"
            />

            {/* Header Container */}
            <div className="leading-snug mb-7 text-center">
              <h3 className="text-[1.375rem] text-orangePink font-playfair">
                Host it by yourself
              </h3>
              <p className="text-[2.5rem] text-white font-benchnine">
                $1590 one time
              </p>
              <p className="text-xl text-zinc-400 font-benchnine uppercase">
                No other payments
              </p>
            </div>

            {/* List Container */}
            <ul className="flex flex-col space-y-4 mb-10 list-none md:mb-14">
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-orangePink" />
                </div>
                <p className="text-zinc-400">
                  Number of uploaded pictures limited only by your server
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-orangePink" />
                </div>
                <p className="text-zinc-400">
                  Host it on your server by yourself
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-orangePink" />
                </div>
                <p className="text-zinc-400">Manual system updates</p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-orangePink" />
                </div>
                <p className="text-zinc-400">
                  Website at custom domain like
                  <span className="text-white"> https://www.example.com</span>
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div>
                  <div className="tick bg-orangePink" />
                </div>
                <p className="text-zinc-400">
                  Optional help with all the
                  <span className="text-white"> setup for $990</span>
                </p>
              </li>
            </ul>

            {/* Link Button */}
            <a
              href="mailto:godimfon@gmail.com"
              className="inline-block px-7 py-4 w-full text-orangePink text-center font-bold border border-orangePinkDark rounded hover:border-orangePink"
            >
              Request today <span className="ml-2">&gt;</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mb-14 px-10 mx-auto text-zinc-400 text-center md:mb-28 md:text-xs md:max-w-3xl">
        Create your professional website quickly without any struggles. Just
        select one of our beautiful designs, change predefined texts, upload
        your photos and thats it. You are all set to show your portfolio to the
        world.
      </p>
    </section>
  );
};

export default Pricing;
