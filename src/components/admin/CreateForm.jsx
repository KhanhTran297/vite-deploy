import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button, Form, Input } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import useAdmin from "@/hook/useAdmin";

const schema = yup.object({
  userDayOfBirth: yup.string().required("This field is required"),
  userEmail: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  userPassword: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
  userFullName: yup.string().required("This field is required"),
  userPhone: yup
    .string()
    .required("This field is required")
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Invalid phone format"),
});
const CreateForm = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { handleCreateExpertAccount, handleCreateAdminAccount } = useAdmin();
  const handleSignUp = (value) => {
    const data = {
      userAvatar: "./img/defaultAvatar2.jpg",
      ...value,
    };
    if (props.type == "Expert") {
      data.userDayOfBirth = data.userDayOfBirth + " 00:00:00";
      handleCreateExpertAccount.mutate(data);
    } else {
      handleCreateAdminAccount.mutate(data);
    }
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        minWidth: 800,
      }}
      onFinish={handleSignUp}
      className=" w-full "
    >
      <Form.Item
        label="userFullName"
        name="userFullName"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="userEmail"
        name="userEmail"
        help="Should be xxx@gmail.com"
        rules={[
          {
            required: true,
            message: "xxxx@gmail.com",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {props.type == "Expert" ? (
        <Form.Item
          label="userPhone"
          name="userPhone"
          rules={[
            {
              required: true,
              message: "xxx-xxx-xxx",
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        ""
      )}
      {props.type == "Expert" ? (
        <Form.Item
          label="userDayOfBirth"
          name="userDayOfBirth"
          rules={[
            {
              required: true,
              message: "dd-mm-yyyy",
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        ""
      )}
      <Form.Item
        label="userPassword"
        name="userPassword"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 16,
        }}
      >
        <Button type="primary" className=" bg-blue-700" htmlType="submit">
          {props.type == "Expert"
            ? "Create Expert Account"
            : "Create Admin Account"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
