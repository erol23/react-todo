import { Routes, Route } from "react-router-dom";
import AllMeetups from "../pages/AllMeetups";
import NewMeetups from "../pages/NewMeetups";
import FavoriteMeetups from "../pages/FavoriteMeetups";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<AllMeetups/>} />
        <Route path="/new-meetups" element={<NewMeetups />}/>
        <Route path="/favorite-meetups" element={<FavoriteMeetups />}/>
      </Routes>
    </>
  );
};

export default AppRouter;
