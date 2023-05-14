import React from "react";

const NewestUpdatePost = (props) => {
  return (
    <div className="">
      {props.position == "right" ? (
        <div className="postContainer grid grid-cols-[30%_70%] border-b-2 border-solid border-[#ccc] p-[10px] hover:opacity-60 cursor-pointer">
          <div className="imgBox relative w-full h-full  ">
            <img
              src={props.url}
              alt=""
              className="imgPost w-full h-full absolute rounded-[10px] object-cover"
            />
          </div>
          <div className="postContentContainer grid grid-rows-[10%_90%] pl-[10px]">
            <div className="categoryPost">
              <p className=" text-[14px] font-semibold leading-[18px] tracking-[0.005em] text-[#6b6b6b] ml-[10px]">
                Kiến thức
              </p>
            </div>
            <div className="postContent grid grid-rows-[80%_20%] p-[10px]">
              <div className="content font-semibold text-[18px] leading-6 text-[#232323]">
                Hướng dẫn setup cho phòng cực chill dành cho người mới toàn tập
              </div>
              <div className="date_actor flex flex-row items-center">
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
      ) : (
        <div className="postContainer grid grid-rows-[70%_30%] h-full hover:opacity-60 cursor-pointer">
          <div className="imgBox relative w-full h-full ">
            <img
              src={props.url}
              alt=""
              className="imgPost w-full h-full absolute rounded-[10px]"
            />
          </div>
          <div className="postContentContainer grid grid-rows-[20%_80%] pl-[10px]">
            <div className="categoryPost pb-[5px]">
              <p className=" w-fit pt-1 pb-1 pl-[10px] pr-[10px] bg-[#f3edff] gap-[10px]">
                Kiến thức
              </p>
            </div>
            <div className="postContent flex flex-col p-[10px] mt-[5px]">
              <div className="content font-semibold text-[18px] leading-6 text-[#232323]">
                Hướng dẫn setup cho phòng cực chill dành cho người mới toàn tập
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
      )}
    </div>
  );
};

export default NewestUpdatePost;
