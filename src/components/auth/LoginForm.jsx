import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAccount from "@/hook/useAccount";
import FormGroup from "../common/FormGroup";
import { IconEyeToggle } from "../icons";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
const schema = yup.object({
  email: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});
const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  //hook
  const selector = useSelector((state) => state.account);
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAccount();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //variables
  const accountToken = selector.token;
  //method
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const loginAccount = (dataAccount) => {
    // console.log("responedata ne:", dataAccount);
    handleLogin(dataAccount);
    // dispatch(setPass(dataAccount.password));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginAccount)} className=" w-full relative ">
        <FormGroup>
          <Label htmlFor="username">Email</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Enter ur email"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter ur password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className=" mb-4 flex justify-end">
          <Link to="/forgotpassword" className="p-2 text-blue-500  underline">
            forgot password ?
          </Link>
        </div>

        <Button className="w-full bg-primary" type="submit">
          Login
        </Button>
      </form>
      <div
        className=" absolute top-4 right-4 w-[60px] h-[60px] cursor-pointer hover:w-[70px] hover:h-[70px]"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="./img/logo.jpg  " alt="" />
      </div>
      <div className="mt-2">
        <Link to="/signup" className="p-2 text-primary underline ">
          Go to Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
