import React from "react";

const LeftSideForum = () => {
  return (
    <div className=" h-auto mt-6 ml-5 ">
      <div className="h-[96px] bg-slate-200 rounded-lg flex flex-col justify-center items-center  border border-solid border-blueborder mb-4">
        <p className="text-base font-semibold text-black">Community</p>
        <p className="text-4xl font-bold text-blueborder">PARENTS</p>
      </div>
      <div className="h-[150px] bg-slate-200 rounded-lg flex flex-col justify-center p-8 text-blueborder border border-solid border-blueborder mb-4">
        <div>
          <div className="flex ">
            <div className="w-4 h-4 mr-3 pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
              </svg>
            </div>
            <p className="text-base font-medium text-black">Discuss</p>
          </div>
          <p className="pl-6 text-xl font-bold text-blueborder">1000 posts</p>
        </div>
        <div>
          <div className="flex ">
            <div className="w-4 h-4 mr-3 pt-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
            </div>
            <p className="text-base font-medium text-black">Followed by</p>
          </div>

          <p className="pl-6 text-xl font-bold text-blueborder">100+ members</p>
        </div>
      </div>
      <div className="h-auto bg-slate-200 rounded-lg flex flex-col justify-center p-8 text-blueborder border border-solid border-blueborder mb-4">
        <div className="flex mb-5">
          <div className="w-4 h-4 mr-3 pt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" />
            </svg>
          </div>
          <p className="text-base font-medium text-black">Expert</p>
        </div>

        <div className="w-full  flex ">
          <a
            href=""
            className="w-8 h-8 border-[1px]  mr-3 mb-5 border-solid border-blueborder relative rounded-full"
          >
            <span className="overflow-hidden  block">
              <span className="pb-[100%] rounded-full"></span>
              <img
                src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-meo-dua-tay-che-mieng-khoc.jpg"
                alt=""
                className="rounded-full absolute w-full h-full"
              />
            </span>
          </a>

          <span className="text-base font-semibold">Anh Bui</span>
        </div>
        <div className="w-full  flex ">
          <a
            href=""
            className="w-8 h-8 border-[1px]  mr-3 mb-5 border-solid border-blueborder relative rounded-full"
          >
            <span className="overflow-hidden  block">
              <span className="pb-[100%] rounded-full"></span>
              <img
                src="https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-meo-dua-tay-che-mieng-khoc.jpg"
                alt=""
                className="rounded-full absolute w-full h-full"
              />
            </span>
          </a>

          <span className="text-base font-semibold">Anh Bui</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSideForum;
