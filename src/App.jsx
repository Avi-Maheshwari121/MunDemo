// src/App.jsx
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Superfoods from "./components/Superfoods";
import Demo from "./components/Demo";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Superfoods />
    </>
  );
};

export default App;
