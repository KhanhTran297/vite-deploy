import useAccount from "@/hook/useAccount";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ref } from "yup";
import BasicList from "./BasicList";
import ChangePassword from "./ChangePassword";
import ProfileTab from "./ProfileTab";
import BasicTabs from "./TabPanel";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { createPortal } from "react-dom";
import UpdateAvatar from "./UpdateAvatar";

const Profile = () => {
  //hooks
  const selector = useSelector((state) => state.account);
  const userAccount = selector.account;
  const [modifyFullname, setModifyFullname] = useState(false);
  const [changePassword, setChangePassword] = useState(true);
  const [visible, setVisible] = useState(false);
  const profileRef = useRef(null);
  const changepassRef = useRef(null);
  //methods
  const handleModifyFullname = () => {
    setModifyFullname((prevstate) => prevstate);
  };
  const handledialog = () => {
    setVisible(true);
  };
  //variables
  useEffect(() => {
    if (changePassword == true) {
      profileRef.current.classList.add("bg-gray-200");
      profileRef.current.classList.add("text-red-400");
      profileRef.current.children[0].classList.add("fa-bounce");
      changepassRef.current.classList.remove("bg-gray-200");
      changepassRef.current.classList.remove("text-red-400");
      changepassRef.current.children[0].classList.remove("fa-bounce");
    } else {
      changepassRef.current.classList.add("bg-gray-200");
      changepassRef.current.classList.add("text-red-400");
      changepassRef.current.children[0].classList.add("fa-bounce");
      profileRef.current.classList.remove("bg-gray-200");
      profileRef.current.classList.remove("text-red-400");
      profileRef.current.children[0].classList.remove("fa-bounce");
    }
  }, [changePassword]);
  return (
    <div className="flex flex-row  h-full  mt-4 ml-2 mr-2 relative">
      {visible &&
        createPortal(
          <UpdateAvatar
            onClose={() => {
              setVisible(false);
            }}
          ></UpdateAvatar>,
          document.body
        )}
      <div className="left  grid grid-rows-[40%_60%] ">
        <div className="imgAvaContainer flex justify-center items-center flex-col border-solid ">
          <div className="imgBox h-[80%] w-[70%] rounded-full flex flex-col justify-center">
            <img
              src={userAccount?.userAvatar}
              alt=""
              className=" w-full h-full rounded-full shadow-2xl"
            />
          </div>
          <button
            className=" text-header font-semibold text-[18px] mt-2 hover:text-red-400"
            onClick={handledialog}
          >
            Change photo
          </button>
        </div>
        <div className="toolbox flex flex-col border-b-2 border-solid border-gray-300 mr-4 h-max">
          {/* <BasicList></BasicList> */}
          <div
            className=" pl-[30px] p-4 text-[18px] hover:bg-gray-200 cursor-pointer hover:text-red-400 "
            onClick={() => {
              setChangePassword(true);
            }}
            ref={profileRef}
          >
            <i class="fa-solid fa-user  text-[18px] mr-4"></i>
            Profile
          </div>
          <div
            className=" pl-[30px] p-4 text-[18px] hover:bg-gray-200 cursor-pointer hover:text-red-400"
            onClick={() => {
              setChangePassword(false);
            }}
            ref={changepassRef}
          >
            <i className="fa-solid fa-lock  text-[18px] mr-4"></i>
            Change password
          </div>
        </div>
      </div>
      {changePassword ? (
        <ProfileTab userAccount={userAccount}></ProfileTab>
      ) : (
        <ChangePassword></ChangePassword>
      )}
    </div>
  );
};

export default Profile;
