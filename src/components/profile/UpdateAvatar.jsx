import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Avatar from "react-avatar-edit";
import useAccount from "@/hook/useAccount";
import { useSelector } from "react-redux";

const UpdateAvatar = ({ onClose }) => {
  //hooks
  const [imgCrop, setImgCrop] = useState(false);
  const selector = useSelector((state) => state.account);
  const userAccount = selector.account;
  const { editProfile } = useAccount();
  //method
  const onCroped = (view) => {
    const byteCharacters = atob(view.split(",")[1]); // giải mã chuỗi Base64
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpg" }); // tạo đối tượng Blob từ dữ liệu ảnh
    const url = window.URL.createObjectURL(blob); // tạo URL từ đối tượng Blob
    console.log(url.slice(5));
    setImgCrop(url.slice(5));
  };
  const onClosed = () => {
    setImgCrop(null);
  };
  const handleEditAvatar = () => {
    // console.log(JSON.stringify(imgCrop));
    // var dataAccount = { ...userAccount };
    // console.log("data Account moi ne:", dataAccount);
    // const AWS = require("aws-sdk");
    // const lambda = new AWS.Lambda({ region: "us-east-1" });

    // const params = {
    //   FunctionName: "MyLambdaFunction",
    //   Payload: JSON.stringify({
    //     body: "aHR0cHM6Ly93d3cueW91dHViZS5jb20=",
    //   }),
    // };

    // lambda.invoke(params, (err, data) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     const decodedUrl = JSON.parse(data.Payload).url;
    //     console.log(decodedUrl);
    //     // Output: "https://www.youtube.com"
    //   }
    // });
  };
  return (
    <div className=" w-[600px] h-[600px] flex flex-col absolute justify-center items-center top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] bg-white shadow-xl">
      <Avatar
        width={400}
        height={400}
        onCrop={onCroped}
        onClose={onClosed}
      ></Avatar>
      <div className=" flex flex-row mt-3">
        <button
          onClick={onClose}
          className="bg-red-400 mr-3 pt-[12px] pb-[12px] pr-[24px] pl-[24px] text-center rounded-[10px]"
        >
          Close
        </button>
        <button
          className="bg-green-400 pt-[12px] pb-[12px] pr-[24px] pl-[24px] text-center rounded-[10px]"
          onClick={handleEditAvatar}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateAvatar;
