import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";
import Footer from "./core/components/layouts/Footer";
import RootRouter from "./RootRouter";

function App() {
  const appName = { name: "Abhi", name2: "Advik" };
  const details = { age: 22, college: "ABC College" };
  // app component is a root component for our react application.
  // we are able to work with props in parent to child components only.
  // to work with props we need to pass props from parent to child component. i.e. ==> sharing is possible in related components only(parent to child).
  return (
    <div>
      
      <Header appName={appName} appDetails={details} />
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
