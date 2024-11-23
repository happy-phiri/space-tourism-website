import { useOutletContext } from "react-router-dom";
import useDocumentTitle from "../../Hooks/UseDocumentTitle";

const MissionSpecialist = () => {
  const { data } = useOutletContext();
  const missionData =
    data.find((item) => item.role.toLowerCase().includes("mission")) || [];
  useDocumentTitle("Crew | Mission Specialist - Space Tourism Website");

  return (
    <div className="font-bellefair-regular pb-6 md:w-[80%] md:mx-auto lg:text-left lg:w-full">
      <p className="text-mobile-preset-4 md:text-mobile-preset-3 text-[rgba(255,255,255,0.5)] uppercase tracking-small">
        {missionData.role}
      </p>
      <h1 className="text-mobile-preset-3 md:text-mobile-preset-2 lg:text-[48px] text-white uppercase mt-0 mb-3">
        {missionData.name}
      </h1>
      <p className="text-blue-300 text-mobile-preset-6 md:text-mobile-preset-4 tracking-wide leading-7 lg:w-[70%]">
        {missionData.bio}
      </p>
    </div>
  );
};

export default MissionSpecialist;
