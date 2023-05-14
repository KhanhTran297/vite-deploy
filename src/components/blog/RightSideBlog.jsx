import React from "react";

const RightSideBlog = () => {
  return (
    <div className=" h-auto mt-6 mr-5 flex place-items-center flex-col">
      <div>
        <div className="h-[96px] w-full bg-slate-200 rounded-lg flex flex-col justify-center items-center  border border-solid border-blueborder mb-4">
          <p className="text-base font-semibold text-black">Useful for</p>
          <p className="text-4xl font-bold text-blueborder">PARENTS</p>
        </div>
        <a href="" className="cursor-pointer">
          <div className="h-[150px] bg-slate-200 rounded-lg flex flex-row justify-center items-center  border border-solid border-blueborder mb-4">
            <div className="w-[60%] h-[100px]">
              <img
                src="https://www.bobby.com.vn/content/dam/sites/www_bobby_com_vn/images/products/ta-quan-m-76-mieng.png"
                alt=""
              />
            </div>
            <div className="p-2">
              <p className="text-xl">
                Tã quần Bobby Vừa Vặn Ngăn Tràn, tha hồ lẫy lật-Bobby
              </p>
              <p>www.bobby.com.vn</p>
            </div>
          </div>
        </a>
        <a href="" className="cursor-pointer">
          <div className="h-[150px] bg-slate-200 rounded-lg flex flex-row justify-center items-center  border border-solid border-blueborder mb-4">
            <div className="w-[60%] h-[100px]">
              <img
                src="https://www.bobby.com.vn/content/dam/sites/www_bobby_com_vn/images/products/ta-quan-m-76-mieng.png"
                alt=""
              />
            </div>
            <div className="p-2">
              <p className="text-xl">
                Tã quần Bobby Vừa Vặn Ngăn Tràn, tha hồ lẫy lật-Bobby
              </p>
              <p>www.bobby.com.vn</p>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full">
        <div className="h-[96px] w-full bg-slate-200 rounded-lg flex flex-col justify-center items-center  border border-solid border-blueborder mb-4">
          <p className="text-base font-semibold text-black">New</p>
          <p className="text-4xl font-bold text-blueborder">POSTS</p>
        </div>
        <div className="w-full">
          <a href="" className="cursor-pointer w-full">
            <div className="h-[150px] w-full bg-slate-200 rounded-lg grid-cols-1 justify-center items-center  border border-solid border-blueborder mb-4">
              <div className="p-2">
                <p className="text-xl font-bold">
                  Các loại cây có nguy cơ gây ngộ độc
                </p>
                <p className=" truncate ... pt-2">
                  Cây trúc đào, đỗ quyên, hoa thủy tiên, hạt thầu dầu… có chứa
                  chất độc, nếu ăn phải gây buồn nôn, đau bụng, tiêu chảy.{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSideBlog;
