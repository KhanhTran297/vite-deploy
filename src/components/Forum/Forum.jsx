import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import CreatePost from "./CreatePost";
import LeftSideForum from "./LeftSideForum";
import RightSideForum from "./RightSideForum";
import usePost from "@/hook/usePost";
import useAccount from "@/hook/useAccount";

const Forum = () => {
  //hooks
  const selectorAccount = useSelector((state) => state.account);
  const selectorPost = useSelector((state) => state.post);
  const { getListPost } = usePost();
  const { getProfileAccount } = useAccount();
  //variables
  const userAccount = selectorAccount.account;
  const listPost = selectorPost.listPost;
  console.log("list post",listPost.content);
  // console.log("getlist",getListPost)
  useEffect(() => {
    getListPost();
    getProfileAccount();
  }, [listPost,userAccount]);
  return (
    <div className="grid grid-cols-[20%_60%_20%]">
      <LeftSideForum className="fixed"></LeftSideForum>
      <div className="ml-2 mr-2  flex flex-col place-items-center justify-center">
        <div className="mr-11 ml-11 mb-3 mt-3 w-[700px] h-[72px] rounded-lg bg-slate-200 border border-3 border-solid border-blue-600">
          <div className="pt-6 pb-4 pl-6 pr-6 flex ">
            <span className="w-full text-xl font-medium text-center text-blueborder">
              Discuss
            </span>
          </div>
        </div>
        <CreatePost 
          avatar={userAccount?.userAvatar}
          fullname={userAccount?.userFullName}
        >
        </CreatePost>
        <div className="mt-3">
          {listPost?.content?.map((post) => (
            <Post
              id={post.post.id}
              title={post.titlePost}
              content={post.contentPost}
              usernameAccountPost={post.accountPost.fullName}
              avatarAccountPost={post.accountPost.avatarPath}
              emailAccountPost={post.accountPost.email}
              
            />
          ))}
        </div>
        
      </div>
      <RightSideForum></RightSideForum>
    </div>
  );
};

export default Forum;
