import React from "react";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Middlecomponent from "./Middlecomponent";
import Testimonials from "./Testimonials";
import { Row } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar />
      <Contactus />

      <Middlecomponent />

      <Testimonials />
    </div>
  );
}

export default Home;
