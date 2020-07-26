import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/01 header";
import Landing from "./components/02 landing";
import Offers from "./components/03 offers";
import Upcoming from "./components/04 upcoming";
import Footer from "./components/05 footer";

import "./styles/app.scss";

function App() {
  useEffect(() => {
    // prevent flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    // prevent flashing

    gsap.registerPlugin(ScrollTrigger);

    let hamburger = document.querySelector(".hamburger");
    let navlinks = document.querySelector(".nav-links");
    // for animation
    let links = document.querySelector(".nav-links li");

    hamburger.addEventListener("click", () => {
      navlinks.classList.toggle("open");
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Landing />
      <Offers />
      <Upcoming />
      <Footer />
    </div>
  );
}

export default App;
