import { useOutletContext } from "react-router-dom";
import useDocumentTitle from "../../Hooks/UseDocumentTitle";

const Pilot = () => {
  const { data } = useOutletContext();
  const pilotData =
    data.find((item) => item.role.toLowerCase().includes("pilot")) || [];
  useDocumentTitle("Crew | Pilot - Space Tourism Website");

  return (
    <div className="font-bellefair-regular pb-6 md:w-[80%] md:mx-auto lg:text-left lg:w-full">
      <p className="text-mobile-preset-4 md:text-mobile-preset-3 text-[rgba(255,255,255,0.5)] uppercase tracking-small">
        {pilotData.role}
      </p>
      <h1 className="text-mobile-preset-3 md:text-mobile-preset-2 lg:text-desktop-preset-3 text-white uppercase mt-0 mb-3">
        {pilotData.name}
      </h1>
      <p className="text-blue-300 text-mobile-preset-6 md:text-mobile-preset-4 tracking-wide leading-7 lg:w-[70%]">
        {pilotData.bio}
      </p>
    </div>
  );
};

export default Pilot;
