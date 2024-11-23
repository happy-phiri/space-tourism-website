import { useState, useEffect } from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";

const Technology = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
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
        setData(data.technology);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Function to determine the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    console.log(isMobile);
    // Initial setup for resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (data.length > 0) {
      const path =
        location.pathname.split("/").pop() === "technology"
          ? "launch"
          : location.pathname.split("/").pop();
      const currentTech = data.find((tech) =>
        tech.name.toLowerCase().includes(path.toLowerCase())
      );
      console.log("Path", path);

      if (currentTech) {
        const selectedImage = isMobile
          ? currentTech.images.landscape
          : currentTech.images.portrait;
        setImage(selectedImage);
      } else {
        setImage(data[0].images.landscape); // Fallback for unexpected cases
      }
    }
  }, [data, location.pathname, isMobile]);

  return (
    <main className="bg-technology-mobile-image md:bg-technology-tablet-image lg:bg-technology-desktop-image bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 min-h-[100vh] grid place-content-center">
      <p className="small-screen-padding-2 text-mobile-preset-6 tracking-small mb-6 uppercase md:text-mobile-preset-5 lg:text-mobile-preset-3 text-[rgba(255,255,255,0.8)] md:text-left pt-10 md:pt-40 xl:pt-48">
        <span className="font-barlow-condensed-regular font-semibold tracking-medium text-[rgba(255,255,255,0.5)] mr-4">
          03
        </span>{" "}
        Space launch 101
      </p>
      <div className="max-w-screen-desktop mx-auto text-center font-bellefair-regular flex flex-col items-center lg:flex-row-reverse lg:justify-start gap-8 pt-10 lg:pb-32">
        <section className="md:w-full text-center lg:text-left xl:w-[50%]">
          {image ? (
            <img
              src={image}
              alt="Current technology"
              className="w-full mx-auto"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </section>

        <section className="small-screen-padding lg:flex lg:gap-4 xl:gap-5 xl:w-[50%]">
          {/* NAVIGATION */}
          <div
            className="text-blue-300 font-bellefair-regular text-mobile-preset-8 lg:text-desktop-preset-8 uppercase tracking-small flex flex-row justify-center lg:flex-col lg:justify-center gap-4 lg:justify-self-end
              ">
            {/* COMMANDER */}
            <NavLink
              to="."
              end
              aria-label="Navigate to launch vehicle page"
              className={({ isActive }) =>
                `h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full border border-[rgba(255,255,255,0.2)] hover:border-white text-mobile-preset-4 md:text-mobile-preset-3 grid place-content-center ${
                  isActive ? "bg-white text-blue-900" : "bg-transparent"
                }`
              }>
              1
            </NavLink>
            <NavLink
              to="spaceport"
              aria-label="Navigate to spaceport page"
              className={({ isActive }) =>
                `h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full border border-[rgba(255,255,255,0.2)] hover:border-white text-mobile-preset-4 md:text-mobile-preset-3 grid place-content-center ${
                  isActive ? "bg-white text-blue-900" : "bg-transparent"
                }`
              }>
              2
            </NavLink>
            <NavLink
              to="capsule"
              aria-label="Navigate to space capsule page"
              className={({ isActive }) =>
                `h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-full border border-[rgba(255,255,255,0.2)] hover:border-white text-mobile-preset-4 md:text-mobile-preset-3 grid place-content-center ${
                  isActive ? "bg-white text-blue-900" : "bg-transparent"
                }`
              }>
              3
            </NavLink>
          </div>
          {/* OUTLET */}
          <Outlet context={{ data }} />
        </section>
      </div>
    </main>
  );
};

export default Technology;
