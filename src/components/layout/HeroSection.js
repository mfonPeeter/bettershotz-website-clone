import Icon from '../icon/Icon';

const HeroSection = () => {
  return (
    <header className="bg-hero-background bg-cover bg-no-repeat bg-left">
      <div className="container mx-auto max-w-xl pt-16 pb-32 text-center sm:max-w-2xl sm:pt-32 lg:max-w-5xl">
        <h1 className="font-playfair text-4xl mb-6 leading-snug sm:mb-10 sm:text-[3.25rem] sm:leading-tight lg:mb-12 lg:text-[5.625rem] lg:leading-none">
          <span className="text-gray-500">Make your portfolio</span>
          <br />
          <span className="text-white">more beautiful</span>
          <br />
          <span className="text-saffron sm:hidden">with no struggles</span>
          <span className="hidden text-saffron sm:inline">
            without any struggles
          </span>
        </h1>

        <p className="font-benchnine font-bold text-sm text-gray-400 mb-8 uppercase tracking-[0.16em] sm:mb-10 sm:text-xl lg:mb-11">
          Just select black or white design and upload your photos
        </p>

        <div className="flex space-x-6 justify-center">
          <a
            href="mailto:godimfon@gmail.com"
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

export default HeroSection;
