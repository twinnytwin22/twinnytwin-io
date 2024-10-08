import React from "react";

export function NonActiveIndicator() {
  return (
    <>
      <span className="flex h-3 w-3 mt-1 justify-center ">
        <span className="absolute inline-flex h-3 w-3 rounded-full bg-gray-400 opacity-75"></span>
      </span>
      <span className=" lg:text-xs text-[10px] font-semibold px-2.5 py-0.5 text-white rounded-full  mx-2">
        Mint Closed
      </span>
    </>
  );
}

export function ActiveIndicator() {
  return (
    <>
      <span className="flex h-3 w-3 mt-1 justify-center  ">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className=" lg:text-xs text-[10px] font-semibold  px-1.5 py-0.5 text-white rounded-full mx-2">
        Mint Active
      </span>
    </>
  );
}

export function UpcomingIndicator() {
  return (
    <>
      <span className="flex h-3 w-3 mt-1 justify-center  ">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
      <span className=" lg:text-xs text-[10px] font-semibold  px-1.5 py-0.5 text-white rounded-full mx-2">
        Dropping Soon!
      </span>
    </>
  );
}
