import ForgotPassword from "@/components/forgotPassword/ForgotPassword";
import AuthenLayout from "@/layout/AuthenLayout";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/main/HomePage";
import { element } from "prop-types";
import GuardRoute from "./GuardRoute";
import GuardRouteLoginSignUp from "./GuardRouteLoginSignUp";
import CreateNewPasswordPage from "@/pages/auth/CreateNewPasswordPage";

// Xem cấu trúc routes ở https://reactrouter.com/en/main/routers/create-browser-router#routes
export default function init(routes) {
  const route = {
    path: "/",

    element: <AuthenLayout />,
    // Element là AuthenLayout, các children muốn hiển thị được trong AuthenLayout thì trong Layout phải có outlet mới hiển thị được
    // outlet đóng vai trò tương tự children
    // Xem thêm ở https://reactrouter.com/en/main/components/outlet
    children: [
      {
        path: "login",
        element: (
          <GuardRouteLoginSignUp>
            <LoginPage />
          </GuardRouteLoginSignUp>
        ),
      },
      {
        path: "signup",
        element: (
          <GuardRouteLoginSignUp>
            <SignUpPage />
          </GuardRouteLoginSignUp>
        ),
      },
      {
        path: "forgotpassword",
        element: <ForgotPasswordPage />,
      },
      {
        path: "createnewpassword",
        element: <CreateNewPasswordPage />,
      },
    ],
  };
  // push route
  routes.push(route);
}
