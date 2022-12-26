import Icon from '../Icon/Icon';

const ShowDemoButton = () => {
  return (
    <div className="container mx-auto mb-14 text-center flex flex-col items-center justify-center space-y-2 text-white font-bold show-demo-btn sm:mb-32">
      <div className="flex items-center justify-center space-x-3 px-6 py-4 rounded hover:border hover:border-gray-500 cursor-pointer">
        <Icon icon="contrast" size={23} color="gray" />
        <a
          href="https://bettershotz-clone.netlify.app/"
          className="inline-block"
        >
          Show black demo
        </a>
      </div>
      <div className="flex items-center justify-center space-x-3 px-6 py-4 rounded hover:border hover:border-gray-500 cursor-pointer">
        <Icon icon="contrast" size={23} />
        <a
          href="https://bettershotz-clone.netlify.app/"
          className="inline-block"
        >
          Show white demo
        </a>
      </div>
    </div>
  );
};

export default ShowDemoButton;
