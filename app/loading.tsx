"use client";
import React from "react";
import { Bars } from "react-loader-spinner";
function PageLoaderIcon() {
  return (
    <div className="flex h-[78vh] mx-auto justify-center items-center relative w-screen">
      <Bars
        height="80"
        width="80"
        color="#fff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default PageLoaderIcon;
