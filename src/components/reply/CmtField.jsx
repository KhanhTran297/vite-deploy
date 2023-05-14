import React from "react";

const CmtField = () => {
  return (
    <form>
      <div className=" mt-3 relative ">
        <input
          type="text"
          name="username"
          placeholder="Bạn nghĩ gì về chủ đề này"
          className="w-[100%] p-4  h-20 border-gray-400 border-2 border-solid font-xs rounded-lg bg-gray-100"
        />
      </div>
    </form>
  );
};

export default CmtField;
