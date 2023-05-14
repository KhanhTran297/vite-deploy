import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      {/* <Header></Header> */}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
