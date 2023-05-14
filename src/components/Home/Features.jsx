import React from "react";
import FeaturePost from "./FeaturePost";
const Features = () => {
  return (
    <div id="features" className=" grid grid-rows-[auto_auto]">
      <div className="titleFeatures text-userOptions text-[28px] leading-9 font-semibold mt-5 mr-[11px] mb-5 ml-[11px] before:content-[''] before:border-t-[3px] before:absolute before:w-[50px] before:border-solid before:border-border_title">
        Feature
      </div>
      <div className="boxItems grid grid-cols-[auto_auto_auto]">
        <FeaturePost></FeaturePost>
        <FeaturePost></FeaturePost>
        <FeaturePost></FeaturePost>
      </div>
    </div>
  );
};

export default Features;
