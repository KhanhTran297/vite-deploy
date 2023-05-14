import React from "react";

const FeaturePost = () => {
  return (
    <div className="itemFeature relative grid grid-rows-[20%_80%] h-[272px] bg-no-repeat m-[10px]  hover:opacity-[0.6] cursor-pointer">
      <img
        src="./img/cat.jfif"
        alt=""
        className=" absolute w-full h-full rounded-[10px] z-[-1] object-cover "
      />
      <div className="titleItem grid grid-cols-[40%_60%] mt-5 mr-[10px] ml-5">
        <div className="categoryItem flex items-center">
          <a className="contentCategory text-black bg-[#f8f9fa] pt-[2px] pb-[2px] pl-1 pr-1 rounded-[10px]">
            Kiến thức
          </a>
        </div>
        <div className="date_actor flex flex-row justify-evenly text-[#f8f9fa] tracking-[0.005em] text-[14px] leading-[18px] font-semibold items-center">
          <p className="date">Mac 23</p>
          <i className="fa-solid fa-circle text-[5px]"></i>
          <p className="actor"> Andiez Le</p>
        </div>
      </div>
      <div className="contentItem mt-[10px] mr-[10px] ml-[20px] text-white font-semibold text-[22px] leading-7">
        <p>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</p>
      </div>
    </div>
  );
};

export default FeaturePost;
