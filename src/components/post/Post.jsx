import React, { useState } from "react";
import BodyPost from "./BodyPost";
import HeaderPost from "./HeaderPost";
import usePost from "@/hook/usePost";
import { useSelector } from "react-redux";

const Post = (props) => {
  const selectorPost = useSelector((state) => state.post);
  const { deletePost } = usePost();
  const idPost = props.id;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDeletePost = (id) => {
    deletePost(id)
    
    
  }
  console.log("props id",props.id)
  return (
    <div className="bg-slate-200 w-[700px] h-auto m-11 mt-0 rounded-lg">
      <div>
        <div className="p-5">
          <HeaderPost
            avatar={props.avatarAccountPost}
            username={props.usernameAccountPost}
            emailAccountPost={props.emailAccountPost}
            id={props.id}
            onDelete={() => handleDeletePost(props.id)}
          ></HeaderPost>
          <BodyPost 
              id={props.id}
              title={props.title}
              content={props.content}></BodyPost>
        </div>
      </div>
    </div>
  );
};

export default Post;
