import React, { useRef, useState } from "react";

const ReadMoreReadLess = ({ children, limit }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const readmorebtnRef = useRef(null);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
    readmorebtnRef.current.style.display = "none";
  };

  return (
    <div className="read-more-read-less ">
      {isReadMoreShown ? children : children.substr(0, limit)}
      <button onClick={toggleBtn} ref={readmorebtnRef} className="opacity-60">
        {children.length > limit ? "...Đọc tiếp" : ""}
      </button>
    </div>
  );
};

export default ReadMoreReadLess;
