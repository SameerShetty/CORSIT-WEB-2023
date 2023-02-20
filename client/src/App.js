import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Recruitment from "./pages/Recruitment";
import Team from "./pages/Team";
import Timeline from "./pages/Timeline";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/aboutUs" exact element={<About />} />
          <Route path="/achievements" exact element={<Achievement />} />
          <Route path="/ourAlumni" exact element={<Alumni />} />
          <Route path="/ourTeam" exact element={<Team />} />
          <Route path="/contactUs" exact element={<Contact />} />
          <Route path="/events" exact element={<Event />} />
          <Route path="/memberLogin" exact element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/recruitment" exact element={<Recruitment />} />
          <Route path="/timeline" exact element={<Timeline />} />
          <Route path="/upcomingEvents" exact element={<Upcoming />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
