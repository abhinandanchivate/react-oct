import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./RootRouter";
function App() {
  // app component is a root component for our react application.
  return (
    <div>
      <Header />
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
