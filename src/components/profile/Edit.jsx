import { Input } from "../input";
import React from "react";
import { Label } from "../label";
import FormGroup from "../common/FormGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../button";
import { useSelector } from "react-redux";
import useAccount from "@/hook/useAccount";
import { Field, Form, Formik } from "formik";

const Edit = (props) => {
  const schema = yup.object({
    phone: yup.string().required("Number only"),
  });
  //hooks
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const selector = useSelector((state) => state.account);
  const pass = selector.pass;
  const { editProfile } = useAccount();
  //methods
  const handleSave = (values) => {
    var data={...values}
    data.userDayOfBirth=data.userDayOfBirth+" 00:00:00"
    const editData={userAvatar: userAccount.userAvatar,...data}
    editProfile(editData);
  };
  //variables

  const userAccount = selector.account;
  return (
    <Formik
      initialValues={{
        userFullName: userAccount?.userFullName,
        userEmail: userAccount?.userEmail,
        userPhone: userAccount?.userPhone,
        userDayOfBirth: userAccount?.userDayOfBirth?.slice(0,10)
      }}
      onSubmit={(values) => {
        handleSave(values);
      }}
      className="w-full"
    >
      <Form className="flex flex-col">
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            Fullname:{""}
          </p>
          <Field
            name="userFullName"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            Email:{""}
          </p>
          <Field
            name="userEmail"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            phone:{""}
          </p>
          <Field
            name="userPhone"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <div className="pt-[20px] pb-[20px] relative  border-solid border-b-[1px] ml-4 mr-4 grid grid-cols-[15%_85%] items-center">
          <p className=" text-[20px] font-semibold  text-header">
            Date of Birth:{""}
          </p>
          <Field
            name="userDayOfBirth"
            className=" w-full border-1 p-[10px] rounded-[10px] opacity-60 border-opacity-60 "
          ></Field>
        </div>
        <Button className="w-full bg-primary mt-5" type="submit">
          Save
        </Button>
      </Form>
    </Formik>
  );
};

export default Edit;
