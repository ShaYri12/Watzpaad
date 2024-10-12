import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Routers from "./router/Routers";

function App() {
  return (
    <div className="App bg-[#09121D]">
      <Routers />
    </div>
  );
}

export default App;
