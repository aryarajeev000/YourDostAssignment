import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-10">
      <div className="h-10 w-10 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
