import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserOptions from "./UserOptions";
import useClickOutSide from "@/hook/useClickOutSide";
const Header = () => {
  //hooks
  const [checkAccount, setCheckAccount] = useState(false);
  const { isLoggedIn } = useCookie();
  const { getProfileAccount } = useAccount();
  const selector = useSelector((state) => state.account);
  const navigate = useNavigate();
  const {show,setShow,nodeRef} = useClickOutSide();
  //variable
  const userAccount = selector.account;
  
  useEffect(() => {
    //Neu co token trong cookie
    if (isLoggedIn()) {
      //Neu chua co tai khoan trong (client state) thi refetch de lay thong tin user
      if (!userAccount) {
        getProfileAccount();
      } else {
        setCheckAccount((checkAccount) => (checkAccount = true));
      }
    } else {
      setCheckAccount((checkAccount) => (checkAccount = false));
    }
  }, [userAccount, isLoggedIn]);
  return (
    <div
      id="header"
      className=" mt-0 mb-0  backdrop-blur-xl shadow-2xl relative z-10"
    >
      <div className="headerContainer grid grid-cols-2 pt-18 pb-18 pl-0 pr-0 w-full cursor-pointer ">
        <div className="navBox flex items-center">
          <div className="logo mr-5 ml-5">
            <div
              className="logoBox w-10 h-10 rounded-full mr-5"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="./img/logo.jpg"
                alt=""
                className="logoImg w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="Home mr-5">
            <Link
              to="/"
              className=" no-underline text-black text-18 cursor-pointer hover:text-userOptions font-semibold"
            >
              HOME
            </Link>
          </div>
          <div className="Forum mr-5">
            <Link
              to="/forum"
              className="no-underline text-black text-18 cursor-pointer hover:text-userOptions font-semibold"
            >
              FORUM
            </Link>
          </div>
          <div className="Contact mr-5">
            <Link
              to="/blog"
              className="no-underline text-black text-18 cursor-pointer hover:text-userOptions font-semibold"
            >
              BLOG
            </Link>
          </div>
        </div>
        <div className="toolBox flex flex-row items-center justify-end">
          <div className="searchContainer ml-36">
            <form action="" className="searchBox relative">
              <input
                type="text"
                className="search-text p-searchtext rounded-5 border-none"
                placeholder="Search Post..."
                required
              />
              <i className="fa-solid fa-magnifying-glass hover:text-red-600 cursor-pointer absolute right-0 bottom-0 translate-x-[-50%] translate-y-[-80%] text-[18px]"></i>
            </form>
          </div>
          <div className="iconChat ml-36">
            <i className="fa-sharp fa-regular fa-comments hover:text-red-600 cursor-pointer text-[18px]"></i>
          </div>
          <div className="iconNotification ml-36">
            <i className="fa-regular fa-bell hover:text-red-600 cursor-pointer text-[18px]"></i>
          </div>

          <div className="userBox ml-36 relative" ref={nodeRef}>
            <i
              className="fa-regular fa-user hover:text-red-600 cursor-pointer mr-6 text-[18px]"
              onClick={() => setShow(!show)}
            ></i>
            {show ? (
              <UserOptions
                fullname={userAccount?.userFullName}
                avatar={userAccount?.userAvatar}
                check={show}
                checkAccount={checkAccount}
              ></UserOptions>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
