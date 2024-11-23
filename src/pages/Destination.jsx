import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Destination = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const location = useLocation();

  // FETCH DESTINATIONS FROM LOCAL JSON FILE
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.destinations);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Set image based on current destination
  useEffect(() => {
    if (data.length > 0) {
      const path = location.pathname.split("/").pop() || "moon";
      const currentDestination = data.find(
        (destination) => destination.name.toLowerCase() === path.toLowerCase()
      );
      if (currentDestination) {
        setImage(currentDestination.images.png);
      } else {
        setImage(data[0].images.png);
      }
    }
  }, [data, location.pathname]);

  return (
    <main className="bg-destination-mobile-image md:bg-destination-tablet-image lg:bg-destination-desktop-image bg-cover bg-center bg-no-repeat small-screen-padding absolute top-0 left-0 right-0 min-h-[100vh] grid place-content-center">
      <div className="max-w-screen-desktop mx-auto text-center font-bellefair-regular flex flex-col items-center lg:flex-row lg:justify-start gap-8 pt-20 md:pt-40 lg:pt-52 lg:pb-32">
        <section className="md:w-full text-center lg:text-left">
          <p className="text-mobile-preset-6 tracking-normal mb-6 uppercase md:text-mobile-preset-5 lg:text-mobile-preset-3 lg:mb-10 text-[rgba(255,255,255,0.8)] md:text-left">
            <span className="font-barlow-condensed-regular font-semibold tracking-medium text-[rgba(255,255,255,0.5)] mr-4">
              01
            </span>{" "}
            Pick your destination
          </p>
          {image ? (
            <img
              src={image}
              alt="Current Destination"
              className="w-[60%] mx-auto lg:w-[75%]"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </section>

        <section>
          <div
            className="text-blue-300 font-barlow-condensed-regular text-mobile-preset-8 lg:text-desktop-preset-8 uppercase tracking-small flex flex-row justify-center lg:justify-start gap-8 
              ">
            <NavLink
              to="."
              end
              className={({ isActive }) => {
                const baseStyles =
                  "min-h-full flex flex-row flex-nowrap md:justify-center items-center pb-2";
                const activeStyles = "border-b-2 border-white";
                const nonActiveStyles =
                  "border-b-2 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

                return `${baseStyles} ${
                  isActive ? activeStyles : nonActiveStyles
                }`;
              }}>
              Moon
            </NavLink>
            <NavLink
              to="mars"
              className={({ isActive }) => {
                const baseStyles =
                  "min-h-full flex flex-row flex-nowrap md:justify-center items-center pb-2";
                const activeStyles = "border-b-2 border-white";
                const nonActiveStyles =
                  "border-b-2 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

                return `${baseStyles} ${
                  isActive ? activeStyles : nonActiveStyles
                }`;
              }}>
              Mars
            </NavLink>
            <NavLink
              to="europa"
              className={({ isActive }) => {
                const baseStyles =
                  "min-h-full flex flex-row flex-nowrap md:justify-center items-center pb-2";
                const activeStyles = "border-b-2 border-white";
                const nonActiveStyles =
                  "border-b-2 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

                return `${baseStyles} ${
                  isActive ? activeStyles : nonActiveStyles
                }`;
              }}>
              Europa
            </NavLink>
            <NavLink
              to="titan"
              className={({ isActive }) => {
                const baseStyles =
                  "min-h-full flex flex-row flex-nowrap md:justify-center items-center pb-2";
                const activeStyles = "border-b-2 border-white";
                const nonActiveStyles =
                  "border-b-2 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

                return `${baseStyles} ${
                  isActive ? activeStyles : nonActiveStyles
                }`;
              }}>
              Titan
            </NavLink>
          </div>

          {/* OUTLET */}
          <Outlet context={{ data }} />
        </section>
      </div>
    </main>
  );
};

export default Destination;
