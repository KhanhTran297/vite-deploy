import React from "react";
import BasicTabs from "./TabPanel";

const ProfileTab = (props) => {
  return (
    <div className="right flex flex-col flex-1">
      <div className="top flex flex-col  relative">
        <div className="username flex flex-row items-center">
          <p className="text-[38px] font-semibold pl-[10px]">
            {props.userAccount?.userFullName}
          </p>
          <i className="fa-solid fa-location-dot ml-[12px] text-[12px] opacity-60">
          </i>
        </div>
      </div>
      <div className="bottom mt-5 ">
        <BasicTabs dataUserAccount={props.userAccount} />
      </div>
    </div>
  );
};

export default ProfileTab;
