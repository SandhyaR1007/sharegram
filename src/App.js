import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Login />
      {/* <Navbar />
      <div className="flex">
        <Menubar />
        <Home />
      </div> */}
    </div>
  );
};

export default App;
