import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./pages/destination/Moon";
import Titan from "./pages/destination/Titan";
import Europa from "./pages/destination/Europa";
import Mars from "./pages/destination/Mars";
import Commander from "./pages/crew/Commander";
import MissionSpecialist from "./pages/crew/MissionSpecialist";
import Pilot from "./pages/crew/Pilot";
import FlightEngineer from "./pages/crew/FlightEngineer";
import LaunchVehicle from "./pages/technology/LaunchVehicle";
import SpacePort from "./pages/technology/SpacePort";
import SpaceCapsule from "./pages/technology/SpaceCapsule";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<Commander />} />
            <Route path="mission" element={<MissionSpecialist />} />
            <Route path="pilot" element={<Pilot />} />
            <Route path="engineer" element={<FlightEngineer />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<LaunchVehicle />} />
            <Route path="spaceport" element={<SpacePort />} />
            <Route path="capsule" element={<SpaceCapsule />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
