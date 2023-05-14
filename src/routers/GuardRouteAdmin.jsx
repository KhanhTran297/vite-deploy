import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";

const GuardRouteAdmin = ({ children }) => {
  //hooks
  const { isLoggedIn } = useCookie();
  const { loadingPage } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    //Neu co token trong cookie
    if (isLoggedIn()) {
      return;
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <div className="">
      {loadingPage ? <div>Loading</div> : <div>{children}</div>}
    </div>
  );
};

export default GuardRouteAdmin;
