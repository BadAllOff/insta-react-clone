import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  });

  return (
    <div className="h-screen bg-gray-500">
      <div className="h-full mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
