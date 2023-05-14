import React from "react";
import { useState } from "react";
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
  newpassword: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  confirmpassword: yup
    .string()
    .required("this field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const CreateNewPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  //hook
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { useSuccess, useError } = useMyToast();
  //variables
  //method
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCreatePass = (value) => {
    if (value.newpassword == value.confirmpassword) {
      useSuccess("Recovery Success");
    } else {
      useError("Recovery fail");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreatePass)} className=" w-full ">
        <FormGroup>
          <Label htmlFor="email">New password</Label>
          <Input
            control={control}
            name="newpassword"
            type="newpassword"
            placeholder="Enter ur new password"
            error={errors.newpassword?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="otp">Confirm password</Label>
          <Input
            control={control}
            name="confirmpassword"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Confirm ur new password"
            error={errors.confirmpassword?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          create
        </Button>
      </form>
    </div>
  );
};

export default CreateNewPassword;
