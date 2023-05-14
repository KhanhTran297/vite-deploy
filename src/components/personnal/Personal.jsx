import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../Forum/CreatePost";
import Post from "../post/Post";
import HeaderPersonal from "./HeaderPersonal";
import usePost from "@/hook/usePost";
import useAccount from "@/hook/useAccount";

const Personal = () => {
  //hooks
  const selectorAccount = useSelector((state) => state.account);
  const selectorPost = useSelector((state) => state.post);
  const { getListPost } = usePost();
  const { getProfileAccount } = useAccount();
  //variables
  const userAccount = selectorAccount.account;
  const listPost = selectorPost.listPost;
  
  useEffect(() => {
    getListPost();
    getProfileAccount();
  }, [listPost,userAccount]);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="ml-2 mr-2  flex flex-col place-items-center justify-center w-full">
        <HeaderPersonal></HeaderPersonal>
        <CreatePost 
          avatar={userAccount?.userAvatar}
          fullname={userAccount?.userFullName}
        ></CreatePost>
        <div className="mt-3">
        {listPost?.content?.map((post) => {
          // Nếu accountId của bài đăng trùng với id của tài khoản đang đăng nhập
          if (post.accountPost.email === userAccount.userEmail) {
            return (
              <Post
                key={post.post.id}
                title={post.titlePost}
                content={post.contentPost}
                usernameAccountPost={post.accountPost.fullName}
                avatarAccountPost={post.accountPost.avatarPath}
              />
            )
          }
        })}
        </div>
      </div>
    </div>
  );
};

export default Personal;
