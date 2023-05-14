import React from "react";
import QuestionBox from "./QuestionBox";

const Question = () => {
  return (
    <div id="question" className="grid grid-row-[auto_auto] mt-10">
      <div className="titleQuestions text-[#3a1097] text-[28px] leading-9 font-semibold mt-[20px] mb-[20px] mr-[11px] ml-[11px] before:contents[''] before:absolute before:w-[50px] before:border-solid before:border-border_title before:border-t-[3px]">
        Questions need your help
      </div>
      <div className="questionsContainer flex flex-col pl-3 pr-3">
        <QuestionBox url="./img/ava/user1.jfif"></QuestionBox>
        <QuestionBox url="./img/ava/user2.jfif"></QuestionBox>
        <QuestionBox url="./img/ava/user3.jfif"></QuestionBox>
      </div>
      <div className="readMoreBox flex justify-center items-center pt-7 pb-7">
        <button className="readMorebtn text-[24px] font-bold leading-[33px] text-black pt-[10px] pb-[10px] pl-5 pr-5 bg-white cursor-pointer hover:text-[#3a1097]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Question;
