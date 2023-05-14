import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import {
  createAdminAccountAPI,
  createExpertAccountAPI,
  deleteAccountAPI,
  getListAccountAPI,
} from "@/api/admin";
import { setListAccount } from "@/redux/slice/account";
import useMyToast from "./useMyToast";
const querySearchParams = atom({
  key: "searchParams", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
function useAdmin() {
  const dispatch = useDispatch();
  const [params, setParams] = useRecoilState(querySearchParams);
  const { useSuccess, useError } = useMyToast();
  // Create Expert Account
  const handleCreateExpertAccount = useMutation({
    mutationFn: createExpertAccountAPI,
    onSuccess: () => {
      useSuccess("Create Success");
      handleGetListAccount();
    },
    onError: () => {
      useError("Create Fail");
    },
  });
  // Create Admin Account
  const handleCreateAdminAccount = useMutation({
    mutationFn: createAdminAccountAPI,
    onSuccess: (data) => {
      if (data.code == "ERROR-ACCOUNT-0001") {
        useError("Email have already!!!!");
      } else {
        useSuccess("Create Success");
        handleGetListAccount();
      }
    },
    onError: () => {
      useError("Create Fail");
    },
  });
  const { refetch: handleGetListAccount, data: listAccount } = useQuery({
    queryKey: { SearchQuery: params },
    queryFn: () => getListAccountAPI(params),
    retry: 0,
    enabled: false,
    onSuccess: (respone) => {
      dispatch(setListAccount(respone.data));
    },
  });
  // delete Account
  const handleDeleteAccount = useMutation({
    mutationFn: deleteAccountAPI,
    onSuccess: (data) => {
      useSuccess("Delete Success");
      handleGetListAccount();
    },
    onError: () => {
      useError("Delete Fail");
    },
  });
  useEffect(() => {
    handleGetListAccount();
  }, [params]);
  return {
    handleCreateAdminAccount,
    handleCreateExpertAccount,
    handleGetListAccount,
    listAccount,
    handleDeleteAccount,
    setParams,
    params,
  };
}
export default useAdmin;
