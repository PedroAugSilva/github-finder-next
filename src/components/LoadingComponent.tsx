import React from "react";

const LoadingComponent = () => {
  return (
    <div className="grid place-items-center w-screen h-screen absolute inset-0 bg-black/40 backdrop-blur-sm">
      <div className="grid place-items-center rounded-md w-20 h-20 bg-zinc-800/60 backdrop-blur-sm">
        <span className="w-8 h-8 rounded-full animate-ping bg-white"></span>
      </div>
    </div>
  );
};

export default LoadingComponent;
