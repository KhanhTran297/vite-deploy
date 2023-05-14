import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-screen ">
        <img
          src="https://images.unsplash.com/photo-1677577434049-6db567d8d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt=""
          className="object-fit "
        />
      </div>
      <div className="mx-auto mt-10 p-2 w-[50%]">
        {/* Outlet dùng tương tự children nhưng dùng cho routes và layout */}
        {/* https://reactrouter.com/en/main/components/outlet */}
        {/* <Outlet></Outlet> */}
        <div>
          <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
            Login
          </h1>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
