"use client";

import Homepage from "@/pages/Home";
import ExpandableCardDemo from "@/pages/Projects";
import TechnologiesSection from "@/pages/Technologies";
import ExperienceSection from "@/pages/Experiences";

const Home = () => {
  return (
    <>
      <div id="Home">
        <Homepage />
      </div>
      <div id="Projects">
        <ExpandableCardDemo />
      </div>
      <div id="Technologies">
        <TechnologiesSection />
      </div>
      <div className="" id="Experience">
        <ExperienceSection />
      </div>
      <div id="Projects">
        <ExpandableCardDemo />
      </div>
    </>
  );
};

export default Home;
