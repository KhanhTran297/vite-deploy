import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Home/Header";
import Home from "@/components/Home/Home";
import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";


const HomePage = () => {
  //hooks
  const { getProfileAccount } = useAccount();
  const navigate = useNavigate();
  const { isLoggedIn } = useCookie();
  const selector = useSelector((state) => state.account);
  //variables
  const useraccount = selector.account;
  useEffect(() => {
    if (isLoggedIn()) {
      getProfileAccount();
    }
  }, [useraccount]);

  return (
    <div className="">
      <Header></Header>
      <Home></Home>
    </div>
  );
};

export default HomePage;
