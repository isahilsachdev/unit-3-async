import React from "react";
import { Linkpage } from "./Routes/Linkpage";
import { Routes } from "./Routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Linkpage />
      <Routes />
    </div>
  );
}
