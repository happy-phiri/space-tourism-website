import { useOutletContext } from "react-router-dom";
import useDocumentTitle from "../../Hooks/UseDocumentTitle";

const SpacePort = () => {
  const { data } = useOutletContext();
  const spacePortData =
    data.find((item) => item.name.toLowerCase().includes("spaceport")) || [];
  useDocumentTitle("Technology | Spaceport - Space Tourism Website");

  return (
    <div className="font-bellefair-regular pb-6 mt-6 md:w-[80%] md:mx-auto lg:text-left lg:w-full">
      <p className="text-mobile-preset-4 md:text-mobile-preset-3 text-[rgba(255,255,255,0.5)] uppercase tracking-small">
        The Terminology . . .
      </p>
      <h1 className="text-mobile-preset-3 md:text-mobile-preset-2 lg:text-desktop-preset-4 xl:text-desktop-preset-3 text-white tracking-medium uppercase mt-2 mb-3 xl:my-5">
        {spacePortData.name}
      </h1>
      <p className="text-blue-300 text-mobile-preset-6 md:text-mobile-preset-4 tracking-wide leading-7 lg:w-[70%]">
        {spacePortData.description}
      </p>
    </div>
  );
};

export default SpacePort;
