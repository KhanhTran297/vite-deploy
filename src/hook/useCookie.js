import Cookies from "js-cookie";
function useCookie() {
  const acc_cookie = import.meta.env.VITE_TOKEN_COOKIE;
  const dataAcc_cookie = import.meta.env.VITE_ACC_COOKIE;
  const setCookie = (tokenAccount) => {
    Cookies.set(acc_cookie, tokenAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const setPassCookie = (dataAccount) => {
    Cookies.set(dataAcc_cookie, dataAccount, {
      expires: 1, //1 day
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  };
  const getPassCookie = () => {
    return Cookies.get(dataAcc_cookie);
  };
  const removePassCookie = () => {
    return Cookies.remove(dataAcc_cookie);
  };
  const getCookie = () => {
    return Cookies.get(acc_cookie);
  };
  const removeCookie = () => {
    return Cookies.remove(acc_cookie);
  };
  const isLoggedIn = () => !!getCookie();
  return {
    setCookie,
    getCookie,
    removeCookie,
    isLoggedIn,
    setPassCookie,
    getPassCookie,
    removePassCookie,
  };
}

export default useCookie;
