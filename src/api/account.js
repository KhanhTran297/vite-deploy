import useCallApi from "@/hook/useCallApi";
import useCookie from "@/hook/useCookie";
import { instance } from "./instance";

const { getCookie } = useCookie();
const { useGet, usePost, useEdit, useDelete } = useCallApi();
export const authLoginApi = (params) => {
  const url = "/api/token";
  return usePost({ url, params });
};
export const getAccountProfileApi = () => {
  const url = "/v1/user/profile";
  return useGet({ url, requiredToken: true });
};
export const SignUpApi = (params) => {
  const url = "/v1/user/register";
  return usePost({ url, params });
};
//logout
export const authLogoutApi = () => {
  const url = "/account/logout";
  return useGet({ url, requiredToken: true });
};
//edit
export const editProfileApi = (params) => {
  const url = "/v1/user/update";
  return useEdit({ url, requiredToken: true, params });
};
//changePassword
export const changePasswordApi = (params) => {
  const url = "/v1/account/change-password";
  return useEdit({ url, requiredToken: true, params });
};
