import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-start min-h-[100vh] relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
