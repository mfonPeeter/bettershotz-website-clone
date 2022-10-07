import Icon from '../Icon/Icon';
import firstBox from '../../assets/boxes/box-1.png';
import secondBox from '../../assets/boxes/box-2.png';
import thirdBox from '../../assets/boxes/box-3.png';

const Features = () => {
  return (
    <section className="mb-14 md:mb-20">
      <div className="text-center">
        <h4 className="mb-3 text-zinc-400 text-sm font-benchnine font-bold tracking-[5.3px] uppercase sm:mb-7 sm:text-lg">
          - Learn More -
        </h4>
        <h2 className="mb-16 text-white text-2xl font-playfair sm:mb-28 sm:text-[2.5rem]">
          Check our best features
        </h2>
      </div>

      {/* Global Container */}
      <div className="container mx-auto max-w-[1230px] px-4 sm:px-7 md:px-5">
        {/* Grid Container */}
        <div className="grid gap-y-4 grid-cols-1 sm:gap-x-7 sm:grid-cols-2 md:gap-y-7 md:grid-cols-3">
          {/* Box 1 */}
          <div className="feature-box sm:row-span-2 lg:row-auto xl:row-span-2">
            {/* Image */}
            <div>
              <img src={firstBox} alt="First Box" className="w-full h-full" />
            </div>
            {/* Text Container */}
            <div className="p-8">
              <h3 className="mb-4 text-[1.375rem] font-playfair md:text-[1.75rem]">
                Perfectly responsive
              </h3>
              <p className="text-zinc-400">
                All our themes are perfectly responsive so your visitors can
                check your portfolio at any computer or mobile device
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="feature-box group md:col-span-2 lg:col-auto xl:col-span-2 xl:flex xl:flex-row-reverse xl:items-start">
            {/* Image */}
            <div className="hidden lg:block lg:pt-12 xl:w-1/2 xl:pt-0">
              <img src={secondBox} alt="Second Box" className="w-full h-full" />
            </div>

            {/* Text Container */}
            <div className="p-8 sm:pt-16 lg:pt-8 xl:pt-14 xl:w-5/6">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-10 xl:space-y-12">
                {/* Icon */}
                <div className="lg:hidden xl:block">
                  <Icon
                    icon="pie-chart"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Black & white looks
                </h3>
              </div>
              <p className="text-zinc-400">
                We offer black and white versions of the template, so you can
                choose what suits your portfolio best and also you have the
                opportunity to change the look at anytime
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="feature-box group md:col-span-2 lg:col-auto xl:col-span-2 xl:flex xl:items-start">
            {/* Image */}
            <div className="hidden lg:block lg:pt-24 xl:w-1/2 xl:pt-0">
              <img src={thirdBox} alt="Second Box" className="w-full h-full" />
            </div>

            {/* Text Container */}
            <div className="p-8 sm:pt-16 lg:pt-10 xl:pt-14 xl:w-1/2">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-10 xl:space-y-12">
                {/* Icon */}
                <div className="lg:hidden xl:block">
                  <Icon
                    icon="browser"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Unique design
                </h3>
              </div>
              <p className="text-zinc-400">
                Our platform is available only for world class artists and
                photographers, making it extremely unique
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="feature-box group">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="publish"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Your own blog
                </h3>
              </div>
              <p className="text-zinc-400">
                When you are ready to write some articles, the blog
                functionality is enabled for you to use at any time
              </p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="feature-box group">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="wallet"
                    size={40}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Gallery categories
                </h3>
              </div>
              <p className="text-zinc-400">
                Your portfolio will be clearly organized in galleries, so your
                visitors will never get lost; also you can choose one or two
                columns layout grid for each gallery
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="feature-box group">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="calendar"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Classes & workshops
                </h3>
              </div>
              <p className="text-zinc-400">
                We prepared a special type of article that allows you to
                optionally set a price, place or date so you can offer special
                services
              </p>
            </div>
          </div>

          {/* Box 7 */}
          <div className="feature-box group">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="flow-parallel"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Simple admin
                </h3>
              </div>
              <p className="text-zinc-400">
                The administration of our platform is extremly easy; we will
                help you with entire setup to allow you to build a beautiful
                website without any struggles
              </p>
            </div>
          </div>

          {/* Box 8 */}
          <div className="feature-box group">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="notification"
                    size={36}
                    className="text-[gray] duration-700 transition-all group-hover:text-white"
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Variable data storage
                </h3>
              </div>
              <p className="text-zinc-400">
                The number of pictures you can upload is basically unlimited,
                but if you host it with us we do not recommend to upload more
                than 5000 photos
              </p>
            </div>
          </div>

          {/* Box 9 */}
          <div className=" group text-white bg-darkGray border-b border-orangePink duration-700 transition-all hover:bg-darkGrayLight">
            {/* Text Container */}
            <div className="p-8 sm:py-24 md:py-14">
              {/* Icon & Header Container */}
              <div className="flex space-x-6 mb-5 sm:flex-col sm:space-x-0 sm:space-y-20 xl:space-y-16">
                {/* Icon */}
                <div>
                  <Icon
                    icon="folder"
                    size={36}
                    className="text-orangePink duration-700 transition-all "
                  />
                </div>
                {/* Header */}
                <h3 className="text-[1.375rem] font-playfair md:text-[1.75rem]">
                  Custom domain
                </h3>
              </div>
              <p className="text-zinc-400">
                You can run your website on a custom domain if you own one; if
                you do not need a custom domain we will provide you an address
                with your name on our platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
