import CreateNewPassword from "@/components/forgotPassword/CreateNewPassword";
import React from "react";

const CreateNewPasswordPage = () => {
  return (
    <div className="bg-slate-500 h-screen flex place-items-center justify-center">
      <div className=" p-4 w-[500px] bg-white rounded-[10px]">
        {/* Outlet dùng tương tự children nhưng dùng cho routes và layout */}
        {/* https://reactrouter.com/en/main/components/outlet */}
        {/* <Outlet></Outlet> */}
        <div>
          <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
            Create new password
          </h1>
          <CreateNewPassword />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPasswordPage;
