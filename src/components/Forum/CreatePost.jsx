import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreatePostDetail from "../Modal/CreatePostDetail";

const CreatePost = (props) => {
  //hooks
  const [showCreatePost, setShowCreatePost] = useState(false);
  const selector = useSelector((state) => state.account);
  const { isLoggedIn } = useCookie();
  const { getProfileAccount } = useAccount();
  const navigate = useNavigate();
  //variables
  const userAccount = selector.account;
  //methods
  const checkAccount = () => {
    if (isLoggedIn()) {
      if (!userAccount) {
        getProfileAccount();
      } else {
        setShowCreatePost(true);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <Fragment>
      <div className="relative z-0">
        <CreatePostDetail
          avatar={props.avatar}
          fullname={props.fullname}
          open={showCreatePost}
          handleClose={() => setShowCreatePost(false)}
        ></CreatePostDetail>
      </div>
      <div className="m-11 mt-3 mb-3 w-[700px] h-[72px] rounded-lg bg-slate-200">
        <div className="pt-4 pb-4 pl-6 pr-6">
          <div className="flex">
            <a
              href=""
              className="w-10 h-10 border-[1px] ml-3 border-solid border-blueborder relative rounded-full"
            >
              <span className="overflow-hidden  block">
                <span className="pb-[100%] rounded-full"></span>

                <img
                  src={props.avatar}
                  alt=""
                  className="rounded-full absolute w-full h-full "
                />
              </span>
            </a>
            <button
              className="ml-5 mr-5 w-[480px] bg-blueborder rounded-full text-white text-base"
              onClick={checkAccount}
            >
              + Create post
            </button>
            <button className="mr-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.333"
                  y="5.333"
                  width="21.333"
                  height="20.148"
                  rx="4"
                  stroke="#101828"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.519 11.937c0 1.191-.996 2.158-2.223 2.158-1.226 0-2.222-.967-2.222-2.158 0-1.192.996-2.159 2.222-2.159 1.227 0 2.223.967 2.223 2.159z"
                  stroke="#101828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M26.667 17.778c-1.266-1.018-1.182-1.04-2.633-1.849-1.453-.808-3.015-.31-4.024.897-.973 1.166-1.582 2.735-3.052 3.47-1.812.907-2.876-.555-4.387-1.141-1.687-.654-2.967.52-3.952 1.65-.987 1.129-1.097 1.188-2.1 2.306"
                  stroke="#101828"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button className="mr-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.54 20.181l1.516-1.534c-1.17-.099-2.012-.485-2.617-1.089-1.675-1.672-1.675-4.038-.01-5.69l3.29-3.297c1.676-1.663 4.034-1.673 5.71 0 1.684 1.683 1.665 4.038.01 5.701l-1.686 1.673c.318.732.427 1.623.248 2.395l2.835-2.82c2.438-2.426 2.448-5.89-.01-8.344-2.468-2.465-5.917-2.445-8.355-.01l-3.45 3.444c-2.437 2.435-2.447 5.89.01 8.344.576.584 1.368 1.02 2.508 1.227zm.921-8.363l-1.516 1.534c1.17.109 2.012.485 2.616 1.088 1.685 1.673 1.675 4.039.01 5.702l-3.29 3.286c-1.675 1.672-4.034 1.672-5.7 0-1.684-1.683-1.674-4.029-.01-5.692l1.676-1.682a4.043 4.043 0 0 1-.248-2.395l-2.834 2.83c-2.439 2.425-2.448 5.88.01 8.334 2.467 2.465 5.916 2.445 8.354.02l3.45-3.454c2.438-2.435 2.447-5.89-.01-8.344-.575-.574-1.358-1.01-2.508-1.227z"
                  fill="#101828"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatePost;
