import React from "react";
import { Outlet } from "react-router-dom";

const AuthenLayout = () => {
  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};

export default AuthenLayout;
