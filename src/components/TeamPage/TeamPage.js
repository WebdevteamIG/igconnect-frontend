import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TechTeam from "./TechTeam";
import PRTeam from "./PRTeam";
import DesignTeam from "./Design";
import ECCTeam from "./ECCTeam";
import AIRteam from "./AIRTeam";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TechTeam />
      <PRTeam />
      <DesignTeam />
      <ECCTeam />
      <AIRteam />
      <Footer />
    </>
  );
}
