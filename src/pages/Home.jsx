import { Link } from "react-router-dom";
import useDocumentTitle from "../Hooks/UseDocumentTitle";

const Home = () => {
  useDocumentTitle("Home | Space Tourism Website");
  return (
    <main className="bg-home-mobile-image md:bg-home-tablet-image lg:bg-home-desktop-image bg-cover bg-center bg-no-repeat small-screen-padding absolute top-0 left-0 right-0 min-h-[100vh] grid place-content-center">
      <div className="max-w-screen-desktop mx-auto text-center font-bellefair-regular flex flex-col items-center lg:flex-row lg:justify-start gap-28 lg:gap-8 md:pt-40 lg:pt-40">
        <section className="md:w-[55%] text-center lg:text-left">
          <p className="text-mobile-preset-6 text-blue-300 tracking-normal uppercase md:text-desktop-preset-5">
            So, you want to travel to
          </p>
          <h1 className="text-mobile-preset-1 md:text-desktop-preset-1 text-white uppercase md:leading-tight">
            Space
          </h1>
          <p className="text-mobile-preset-6 md:text-mobile-preset-4 lg:text-desktop-preset-9 text-blue-300 leading-[180%] lg:w-[55%]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <Link
          to="/destination"
          className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] md:text-desktop-preset-4 rounded-full bg-white uppercase text-mobile-preset-4 text-blue-900 grid place-content-center">
          Explore
        </Link>
      </div>
    </main>
  );
};

export default Home;
