import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import EditorText from "../common/EditorText";
import { useSelector } from "react-redux";
import useCookie from "@/hook/useCookie";
import useAccount from "@/hook/useAccount";
// import { useNavigate } from "react-router-dom";
import usePost from "@/hook/usePost";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import { Label } from "../label";
import RichTextField from "../common/RichTextField";

const CreatePostDetail = ({
  fullname,
  avatar,
  open = false,
  handleClose = () => {},
}) => {
  const [auth, setAuth] = useState(true);
  const [content, setContent] = useState("");
  const schema = yup.object({
    titlePost: yup
      .string()
      .required("This field is required")
      .max(50, "Post title should not exceed 100 characters"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  
  const { createPost } = usePost();
  const { user } = useAccount();
  const [contentError, setContentError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePost = (value) => {
    if (content.trim() === "") {
      setContentError(true);
      return;
    }
    setContentError(false);
    const data = { ...value, contentPost: content };
    createPost(data)
    
  };

  const handleChangeContent = (html) => {
    setContent(html);
    setContentError("");
  };
  
  

  if (typeof document === "undefined")
    return <div className="createpostdetal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 createpostdetal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-full bg-white mb-5 modal-content max-w-[650px] h-[720px]">
        <div className=" w-[650px] h-[50px]  bg-slate-200 border border-3 border-solid border-gray-400">
          <div>
            <div className="pt-3  pl-6 pr-6 flex ">
              <span className="w-full text-lg font-medium  text-blue-500">
                Create a post to share
              </span>
              <span
                className="absolute top-8 right-8 flex items-center justify-center w-10 h-10 p-1  cursor-pointer -translate-y-2/4 translate-x-2/4
                "
                onClick={handleClose}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                    fill="#84878B"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full  flex relative mt-10 ml-2 z-0">
            <a
              href=""
              className="w-8 h-8 border-[1px] ml-3 mr-3 border-solid border-blueborder rounded-full"
            >
              <span className="overflow-hidden relative block">
                <span className="pb-[100%] rounded-full"></span>
                <img src={avatar} alt="" className="rounded-full" />
              </span>
            </a>

            <span className="text-base font-semibold">{fullname}</span>
          </div>
          <form onSubmit={handleSubmit(handleCreatePost)}>
            <div className="block ml-[5%]">
              <p className=" w-[100%] mt-[5%]  inline-block self-start text-sm font-medium cursor-pointer text-text2 dark:text-text3">Title Post*</p>
              <Input
                control={control}
                name="titlePost"
                type="text"
                placeholder="Title post"
                error={errors.titlePost?.message}
                className="h-[45px] mr-5  mb-3 w-[90%] border-2  p-2 overflow-scroll font-semibold"
              ></Input>
            </div>
            <div className="block w-[90%] mt-6 mb-16 ml-[5%] h-[320px]">
              <p className="inline-block self-start text-sm font-medium cursor-pointer text-text2 dark:text-text3">Content Post*</p>
              <RichTextField
                name="contentPost"
                value={content}
                onChange={handleChangeContent}
              ></RichTextField>
              
            </div>
            {contentError && (
                <span className="absolute text-sm font-medium pointer-events-none text-error  bottom-6/4 left-1 error-input w-full ml-[5%] mt-4 ">This field is required</span>
              )}
            <Button
              className="w-[90%] ml-[5%] text-white mt-10 bg-blueborder"
              htmlType="submit"
              loading={isLoading}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default CreatePostDetail;
