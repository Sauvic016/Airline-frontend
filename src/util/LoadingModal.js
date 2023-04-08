import React from "react";

const LoadingModal = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex items-center bg-white p-5 rounded-lg shadow-lg">
        <div className="w-16 h-16 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin duration-3000 mr-3"></div>
        <div>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingModal;
