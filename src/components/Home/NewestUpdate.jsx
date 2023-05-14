import React from "react";
import NewestUpdateMainPost from "./NewestUpdateMainPost";
import NewestUpdatePost from "./NewestUpdatePost";
const NewestUpdate = () => {
  return (
    <div id="newestUpdate" className="grid grid-rows-[10%_90%] min-h-[1000px]">
      <div className="titleNewestUpdate text-[#3a1097] text-[28px] leading-9 font-semibold mt-[20px] mb-[20px] mr-[11px] ml-[11px] before:contents[''] before:absolute before:w-[50px] before:border-solid before:border-border_title before:border-t-[3px] ">
        Newest Update
      </div>
      <div className="postWrap grid grid-rows-[60%_40%]">
        <div className="topBoxContainer grid grid-cols-[auto_auto] ">
          <NewestUpdateMainPost url="./img/newest/top/left/post1.jpg"></NewestUpdateMainPost>
          <div className="rightContainer flex flex-col overflow-y-scroll bg-rightBox rounded-[10px] pl-[10px] pr-[10px] h-[500px] ">
            <NewestUpdatePost
              url="./img/duck.jpg"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/cat.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/oldcomputer.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/newest/top/right/post3.jpg"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/Internet Computer Technology.jfif"
              position="right"
            ></NewestUpdatePost>
            <NewestUpdatePost
              url="./img/Keyboard Computer Office Business Background.jfif"
              position="right"
            ></NewestUpdatePost>
          </div>
        </div>
        <div className="bottomboxContainer flex flex-row justify-between ">
          <NewestUpdatePost url="./img/newest/bottom/post1.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post2.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post3.jpg"></NewestUpdatePost>
          <NewestUpdatePost url="./img/newest/bottom/post4.jpg"></NewestUpdatePost>
        </div>
      </div>
    </div>
  );
};

export default NewestUpdate;
