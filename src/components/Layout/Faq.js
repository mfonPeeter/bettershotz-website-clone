import React from 'react';

const Faq = () => {
  return (
    <section>
      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-5 sm:mb-8"></div>
      </div>

      {/* Header */}
      <h3 className="mb-5 font-playfair text-white text-center sm:mb-8 sm:text-xl">
        Frequently asked questions
      </h3>

      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-7 sm:mb-14"></div>
      </div>

      {/* Box 1 */}
      <div className="box-container flex flex-col space-y-5 mb-7 sm:mb-14 md:flex-row md:space-y-0 md:items-start">
        <h4 className="font-playfair text-white sm:text-xl md:w-1/2">
          1. Is it easy to build a website?
        </h4>
        <p className="text-zinc-400 md:w-1/2">
          Well normally it requires lots of experience, which is why we build
          this platform for you. All we need is a few sentences, your logo and a
          set of photos you want to upload. After that we will prepare the whole
          website for you and explain the administration for further management.
        </p>
      </div>

      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-7 sm:mb-14"></div>
      </div>

      {/* Box 2 */}
      <div className="box-container flex flex-col space-y-5 mb-7 sm:mb-14 md:flex-row md:space-y-0 md:items-start">
        <h4 className="font-playfair text-white sm:text-xl md:w-1/2">
          2. How to setup a custom domain?
        </h4>
        <p className="text-zinc-400 md:w-1/2">
          You must be the owner of the domain you want to use. After that we
          will send you a simple guide on how to finish the setup. If your are
          not the owner of the domain we can also help you to buy it.
        </p>
      </div>

      {/* Border line */}
      <div className="box-container">
        <div className="line-through mb-7 sm:mb-14"></div>
      </div>

      {/* Box 3 */}
      <div className="box-container flex flex-col space-y-5 mb-7 sm:mb-14 md:flex-row md:space-y-0 md:items-start">
        <h4 className="font-playfair text-white sm:text-xl md:w-1/2">
          3. What about licenses, cookies and other policies?
        </h4>
        <p className="text-zinc-400 md:w-1/2">
          We are not responsible for any issues regarding licensing, privacy and
          other policy. Our product is available world wide so be aware of your
          country's policy. We are here to give you advice, but we are not able
          to be aware of all the rules around the world. Also be careful about
          licensing, basically anybody can download your pictures from the
          website, so we recommend putting your watermark on every picture
          before uploading.
        </p>
      </div>
    </section>
  );
};

export default Faq;
