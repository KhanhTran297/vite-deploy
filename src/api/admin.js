import useCallApi from "@/hook/useCallApi";
import useCookie from "@/hook/useCookie";
import { instance } from "./instance";

const { getCookie } = useCookie();
const { useGet, usePost, useEdit, useDelete } = useCallApi();
// Create expert account
export const createExpertAccountAPI = (params) => {
  const url = "/v1/user/create-expert";
  return usePost({ url, requiredToken: true, params });
};
export const createAdminAccountAPI = (params) => {
  const url = "/v1/account/create-admin";
  return usePost({ url, requiredToken: true, params });
};
export const getListAccountAPI = (params) => {
  const url = `v1/account/list?${params.toString()}`;
  return useGet({ url, requiredToken: true });
};
export const deleteAccountAPI = (id) => {
  console.log("id ne", id);
  const url = `v1/account/delete/${id}`;
  return useDelete({ url, requiredToken: true });
};
