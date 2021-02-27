import React from "react";
import "./styles.css";
import { LinkPage } from "./Pages/LinkPage";
import { Routes } from "./Pages/Routes";

export default function App() {
  return (
    <div className="App">
      <LinkPage />
      <Routes />
    </div>
  );
}
