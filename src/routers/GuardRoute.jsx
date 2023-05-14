import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAccount from "@/hook/useAccount";
import useCookie from "@/hook/useCookie";


const GuardRoute = ({ children }) => {
  //hooks
  const { isLoggedIn } = useCookie();
  const { profileAccount, getProfileAccount, loadingPage } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    //Neu co token trong cookie
    if (isLoggedIn()) {
      if (!profileAccount?.data) {
        getProfileAccount();
      } else {
        return;
      }
    } else {
      navigate("/login");
    }
  }, [profileAccount?.data, isLoggedIn]);
  return (
    <div className="">
      {loadingPage ? <div>Loading</div> : <div>{children}</div>}
    </div>
  );
};

export default GuardRoute;
