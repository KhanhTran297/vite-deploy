import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from "../common/FormGroup";
import { IconEyeToggle } from "../icons";
import * as yup from "yup";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import useMyToast from "@/hook/useMyToast";

const schema = yup.object({
  email: yup.string().required("This field is required"),
  otp: yup.string().required("this field is required"),
});
const ForgotPassword = (props) => {
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { useSuccess, useError } = useMyToast();
  //variables
  //method
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  console.log("Before", props.status);
  const handleAuth = (value) => {
    if (value.otp == 123) {
      props.handleStatus;
      useSuccess("Auth success");
    } else {
      useError("Auth error");
    }
  };
  console.log("After", props.status);
  return (
    <div>
      <form
        className=" w-full "
        onSubmit={handleSubmit(() => {
          props.handleStatus;
        })}
      >
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Enter ur email"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="otp">Code otp</Label>
          <Input
            control={control}
            name="otp"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter otp"
            error={errors.otp?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className=" grid grid-cols-2 gap-4">
          <Button className="w-full bg-yellow-300" type="submit">
            Send otp
          </Button>
          <Button className="w-full bg-primary" type="submit">
            create new password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
