import Icon from '../Icon/Icon';

const ShowDemoButton = () => {
  return (
    <div className="container mx-auto text-center flex items-center justify-center space-x-2  mb-2 text-white font-bold">
      <div className="flex items-center justify-center space-x-3 px-6 py-4 rounded hover:border hover:border-gray-500 cursor-pointer">
        <Icon icon="contrast" size={23} color="gray" />
        <a href="#black" className="inline-block">
          Show black demo
        </a>
      </div>
      <div className="flex items-center justify-center space-x-3 px-6 py-4 rounded hover:border hover:border-gray-500 cursor-pointer">
        <Icon icon="contrast" size={23} />
        <a href="#white" className="inline-block">
          Show white demo
        </a>
      </div>
    </div>
  );
};

export default ShowDemoButton;
