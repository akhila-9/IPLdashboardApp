import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import TeamDetails from "./Components/TeamDetails/TeamDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/team-matches/:id" element={<TeamDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
