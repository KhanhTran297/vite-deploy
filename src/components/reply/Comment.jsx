import React from "react";
import CmtField from "./CmtField";
import ShowReplies from "./ShowReplies";

const Comment = () => {
  return (
    <div>
      <ShowReplies></ShowReplies>
      <CmtField></CmtField>
    </div>
  );
};

export default Comment;
