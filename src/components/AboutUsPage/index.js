import React from "react";
import Facilities from "./Facilities";
import Ig from "./InnovationGarage";
import Collabs from "./PastCollaborations";
import Role from "./RoleOfCII";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Mainabout from "./IntroAboutUs";
import Mission from "./OurMission";
import Objectives from "./OurObjectives";

export default function Index() {
  return (
    <>
      <Navbar />
      <Mainabout />
      <Mission />
      <Objectives />
      <Facilities />
      <Ig />
      <Collabs />
      <Role />
      <Footer />
    </>
  );
}
