import React from "react";
import Comment from "../reply/Comment";
import ReadMoreReadLess from "./ReadMoreReadLess";


const BodyPost = (props) => {
  
  return (
    <div className="pt-7 pb-7 w-full">
      <div className="text-2xl font-semibold">{props.title}</div>
      <ReadMoreReadLess limit={200}>{props.content}</ReadMoreReadLess>
      <Comment></Comment>
    </div>
  );
};

export default BodyPost;
