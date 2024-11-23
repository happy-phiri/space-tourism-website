import { useState, useEffect } from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";

const Crew = () => {
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
        setData(data.crew);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Set image based on current destination
  useEffect(() => {
    if (data.length > 0) {
      const path = location.pathname.split("/").pop() || "commander";

      const currentCrew = data.find((crew) =>
        crew.role.toLowerCase().includes(path.toLowerCase())
      );

      if (currentCrew) {
        setImage(currentCrew.images.png);
      } else {
        setImage(data[0].images.png);
      }
    }
  }, [data, location.pathname]);

  return (
    <main className="bg-crew-mobile-image md:bg-crew-tablet-image lg:bg-crew-desktop-image bg-cover bg-center bg-no-repeat small-screen-padding absolute top-0 left-0 right-0 min-h-[100vh] grid place-content-center">
      <div className="max-w-screen-desktop mx-auto text-center font-bellefair-regular flex flex-col items-center lg:flex-row lg:justify-start gap-8 pt-20 md:pt-40 lg:pt-52 lg:pb-10 lg:h-full">
        <section className="md:w-full lg:w-[50%] text-center lg:text-left">
          <p className="text-mobile-preset-6 tracking-small mb-6 uppercase md:text-mobile-preset-5 lg:text-mobile-preset-3 lg:mb-10 text-[rgba(255,255,255,0.8)] md:text-left">
            <span className="font-barlow-condensed-regular font-semibold tracking-medium text-[rgba(255,255,255,0.5)] mr-4">
              02
            </span>{" "}
            Meet your Crew
          </p>

          <section className="flex flex-col justify-start h-[100%]">
            {/* OUTLET */}
            <Outlet context={{ data }} />

            {/* NAVIGATION */}
            <div
              className="text-blue-300 font-barlow-condensed-regular text-mobile-preset-8 lg:text-desktop-preset-8 uppercase tracking-small my-5 flex flex-row justify-center lg:justify-start gap-4 lg:justify-self-end
              ">
              {/* COMMANDER */}
              <NavLink
                to="."
                end
                aria-label="Navigate to crew commander page"
                className={({ isActive }) =>
                  `h-[10px] w-[10px] rounded-full hover:bg-[rgba(255,255,255,0.5)] ${
                    isActive ? "bg-white" : "bg-[rgba(255,255,255,0.2)]"
                  }`
                }></NavLink>
              <NavLink
                to="mission"
                aria-label="Navigate to mission specialist page"
                className={({ isActive }) =>
                  `h-[10px] w-[10px] rounded-full hover:bg-[rgba(255,255,255,0.5)] ${
                    isActive ? "bg-white" : "bg-[rgba(255,255,255,0.2)]"
                  }`
                }></NavLink>
              <NavLink
                to="pilot"
                aria-label="Navigate to pilot page"
                className={({ isActive }) =>
                  `h-[10px] w-[10px] rounded-full hover:bg-[rgba(255,255,255,0.5)] ${
                    isActive ? "bg-white" : "bg-[rgba(255,255,255,0.2)]"
                  }`
                }></NavLink>
              <NavLink
                to="engineer"
                aria-label="Navigate to mission engineer page"
                className={({ isActive }) =>
                  `h-[10px] w-[10px] rounded-full hover:bg-[rgba(255,255,255,0.5)] ${
                    isActive ? "bg-white" : "bg-[rgba(255,255,255,0.2)]"
                  }`
                }></NavLink>
            </div>
          </section>
        </section>

        <section className="lg:w-[50%]">
          {image ? (
            <img
              src={image}
              alt="Crew Member"
              className="w-[60%] mx-auto lg:ml-0 lg:w-[70%] object-contain"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Crew;
