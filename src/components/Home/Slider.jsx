import React from "react";
const Slider = () => {
  return (
    <div
      id="slider"
      className=" grid grid-cols-[60%_40%] p-slider bg-slider rounded-[10px]"
    >
      <div className="sliderContent pr-5">
        <div className="titleContent text-white text-[48px] font-bold leading-[59px] pt-[18px] pb-[18px]">
          Baby love
        </div>
        <div className="subtitleContent text-white text-[14px] font-normal leading-[28px] pt-[10px] pb-[10px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          commodi quae in aut nam temporibus eveniet consequatur omnis dolorum
          repellat repudiandae, quibusdam eaque et voluptatum possimus excepturi
          fugiat corporis dolor?
        </div>
        <button className="btnSlider pt-[16px] pb-[16px] pr-[43px] pl-[43px] gap-[10px] border-none mt-[30px] cursor-pointer bg-white rounded-[30px] hover:bg-userOptions hover:text-white">
          Get Started
        </button>
      </div>
      <div className="sliderImg">
        <div className="imgBox">
          <img
            src="./img/slider.jpg"
            className=" w-full h-full rounded-[20px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
