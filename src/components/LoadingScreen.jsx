// import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-900 bg-opacity-90">
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
  </div>
  );
};

export default LoadingScreen;
