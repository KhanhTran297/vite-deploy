import React, { Fragment, useEffect, useState } from "react";
import useClickOutSide from "@/hook/useClickOutSide";
import Report from "../Modal/Report";
import { useSelector } from "react-redux";
import useAccount from "@/hook/useAccount";
import usePost from "@/hook/usePost";
import { Modal } from 'antd';

const HeaderPost = (props) => {
  const selectorAccount = useSelector((state) => state.account);
  const { getProfileAccount } = useAccount();
  const userAccount = selectorAccount.account;
  const selectorPost = useSelector((state) => state.post);
  
  useEffect(() => {
    getProfileAccount();
  }, [userAccount]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const {show,setShow,nodeRef} = useClickOutSide();
  const [showReport, setShowReport] = useState(false);
  return (
    <Fragment>
      <div className="relative z-0">
        <Report
          open={showReport}
          handleClose={() => setShowReport(false)}
        ></Report>
      </div>
      <div className="w-full  flex  h-8 ">
        <div className=" w-[90%] flex gap-4">
          <a
            href=""
            className="w-8 h-8 border-[1px] mt-2  border-solid border-blueborder relative rounded-full"
          >
            <span className="overflow-hidden h-[100%] w-[100%] block">
              <span className="pb-[100%] rounded-full"></span>
              <img
                src={props.avatar}
                alt=""
                className="rounded-full absolute w-full h-full"
              />
            </span>
          </a>

          <div className="flex flex-col">
            <span className="text-base font-semibold  ">{props.username}</span>
            <span className="text-base font-normal text-slate-400  h-[100%]">
            25/06/2023
            </span>
          </div>
        </div>
        
        <div className="items-center w-[10%] " ref={nodeRef}>
          <div className="">
            <button onClick={() => setShow(!show)}>
              <svg
                fill="#000000"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g data-name="Layer 2">
                    {" "}
                    <g data-name="more-vertical">
                      {" "}
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(-90 12 12)"
                        opacity="0"
                      ></rect>{" "}
                      <circle cx="12" cy="12" r="2"></circle>{" "}
                      <circle cx="12" cy="5" r="2"></circle>{" "}
                      <circle cx="12" cy="19" r="2"></circle>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>

            {show && (userAccount.userEmail !== props.emailAccountPost) &&  (
              <div className="absolute w-25 h-22 z-10 translate-x-0 translate-y-2 bg-white border   shadow-lg ">
                <button
                  className="w-full h-8 block border  border-solid cursor-pointer text-left pl-1 pr-1"
                  onClick={() => setShowReport(true)}
                >
                  Report
                </button>
                <button className="w-full h-8  border border-t-1 border-solid cursor-pointer text-left pl-1 pr-1 flex ">
                  <span className="pt-1">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M17.75 20.75C17.5974 20.747 17.4487 20.702 17.32 20.62L12 16.91L6.68 20.62C6.56249 20.6915 6.42757 20.7294 6.29 20.7294C6.15243 20.7294 6.01751 20.6915 5.9 20.62C5.78491 20.5607 5.68741 20.4722 5.61722 20.3634C5.54703 20.2546 5.50661 20.1293 5.5 20V6C5.5 5.27065 5.78973 4.57118 6.30546 4.05546C6.82118 3.53973 7.52065 3.25 8.25 3.25H15.75C16.4793 3.25 17.1788 3.53973 17.6945 4.05546C18.2103 4.57118 18.5 5.27065 18.5 6V20C18.5005 20.1362 18.4634 20.2698 18.3929 20.3863C18.3223 20.5027 18.2209 20.5974 18.1 20.66C17.9927 20.7189 17.8724 20.7498 17.75 20.75ZM12 15.25C12.1532 15.2484 12.3033 15.2938 12.43 15.38L17 18.56V6C17 5.66848 16.8683 5.35054 16.6339 5.11612C16.3995 4.8817 16.0815 4.75 15.75 4.75H8.25C7.91848 4.75 7.60054 4.8817 7.36612 5.11612C7.1317 5.35054 7 5.66848 7 6V18.56L11.57 15.38C11.6967 15.2938 11.8468 15.2484 12 15.25Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                  <span>Bookmark</span>
                </button>
              </div>
            )}
            {show && (userAccount.userEmail === props.emailAccountPost) &&  (
              <div className="absolute w-25 h-22 z-10 translate-x-0 translate-y-2 bg-white border   shadow-lg ">
                <button
                  className="w-full h-8 block border  border-solid cursor-pointer text-left pl-1 pr-1"
                  // onClick={() => handleDeletePost()}
                >
                  Edit
                </button>
                <button className="w-full h-8  border border-t-1 border-solid cursor-pointer text-left pl-1 pr-1 flex " onClick={props.onDelete} >
                  Delete
                </button>
                {/* <Modal
                  title="Xác nhận xóa"
                  visible={isModalVisible}
                  onOk={handleDeletePost}
                  onCancel={handleCancel}
                >
                  <p>Bạn có chắc chắn muốn xóa bài đăng này?</p>
                </Modal> */}
              </div>
            )}
            {!show &&  (
              ""
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderPost;
