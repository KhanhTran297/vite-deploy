import React from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const HeaderPersonal = () => {
  //hooks
  const selector = useSelector((state) => state.account);
  //variables
  const userAccount = selector.account;
  const navigate = useNavigate();

  return (
    <div className="w-[110%] h-[300px] bg-slate-200 mb-3">
      <div className="flex flex-col justify-center items-center w-full p-5">
        <div className="imgBox h-[150px] w-[150px] rounded-lg flex flex-col justify-center">
          <img
            src={userAccount?.userAvatar}
            alt=""
            className=" w-full h-full rounded-full shadow-2xl"
          />
        </div>
        <span className="text-4xl  pt-3 pb-3 font-semibold">
          {userAccount?.userFullName}
        </span>
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          variant="outlined"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default HeaderPersonal;
