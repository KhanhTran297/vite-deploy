import React from "react";

const NewestUpdateMainPost = (props) => {
  return (
    <div className="leftContainer pr-[10px] grid grid-rows-[70%_30%]">
      <div className="imgBox relative w-full h-full">
        <img
          src={props.url}
          alt=""
          className="imgPost w-full h-full absolute rounded-[10px]"
        />
      </div>
      <div className="postContentContainer grid grid-rows-[20%_80%]">
        <div className="categoryPost">
          <p className=" w-fit pt-1 pb-1 pl-[10px] pr-[10px] rounded-[10px] bg-[#f3edff] gap-[10px] ml-2">
            Kiến thức
          </p>
        </div>
        <div className="postContent grid flex-col p-[10px] ">
          <div className="content">
            <p className=" font-semibold text-[22px] leading-5 text-[#232323]">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </p>
          </div>
          <div className="date_actor flex flex-row items-center mt-[10px]">
            <p className=" pr-[10px] size-[14px] font-semibold leading-[18px] text-[#6b6b6b]">
              Mac 23
            </p>
            <i className="fa-solid fa-circle text-[5px] font-semibold leading-[18px] text-[#6b6b6b] pr-[10px]"></i>
            <p className=" pr-[10px] size-[14px] font-semibold leading-[18px] text-[#6b6b6b]">
              Andiez Le
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestUpdateMainPost;
