import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Menubar />
        <Home />
      </div>
    </div>
  );
};

export default App;
