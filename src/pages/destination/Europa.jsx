import { useOutletContext } from "react-router-dom";
import useDocumentTitle from "../../Hooks/UseDocumentTitle";

const Europa = () => {
  const { data } = useOutletContext();
  const europaData =
    data.find((item) => item.name.toLowerCase() === "europa") || [];
  useDocumentTitle("Destination | Europa - Space Tourism Website");

  return (
    <section>
      <div className="font-bellefair-regular pb-6 md:w-[80%] md:mx-auto lg:text-left lg:w-full">
        <h1 className="text-mobile-preset-2 md:text-mobile-preset-1 lg:text-desktop-preset-2 text-white uppercase">
          {europaData.name}
        </h1>
        <p className="text-blue-300 text-mobile-preset-9 md:text-mobile-preset-4 tracking-wide leading-7 lg:w-[70%]">
          {europaData.description}
        </p>
      </div>

      <div className="border border-[rgba(255,255,255,0.15)] w-[90%] mx-auto lg:ml-0"></div>

      <div className="pt-6 lg:pt-10 flex flex-col gap-4 md:flex-row md:justify-center md:gap-28 md:w-[80%] md:mx-auto lg:justify-start lg:w-full">
        <div className="uppercase lg:text-left">
          <p className="text-blue-300 text-desktop-preset-7 font-barlow-condensed-regular tracking-small md:leading-8">
            Avg. Distance
          </p>
          <p className="text-white text-desktop-preset-6 font-bellefair-regular tracking-small">
            {europaData.distance}
          </p>
        </div>

        <div className="uppercase lg:text-left">
          <p className="text-blue-300 text-desktop-preset-7 font-barlow-condensed-regular tracking-small md:leading-8">
            Est. Travel Time
          </p>
          <p className="text-white text-desktop-preset-6 font-bellefair-regular tracking-small">
            {europaData.travel}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Europa;
