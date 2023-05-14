import React from "react";
import Features from "./Features";
import Header from "./Header";
import NewestUpdate from "./NewestUpdate";
import Question from "./Question";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="m-8 ml-2 mr-2">
      <Slider></Slider>
      <Features></Features>
      <NewestUpdate></NewestUpdate>
      <Question></Question>
    </div>
  );
};

export default Home;
