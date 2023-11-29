import React from "react";
import Category from "./category";
import RecordFile from "./file";

const Recording = () => {
  return (
    <div className="w-full flex h-screen">
      <Category />
      <RecordFile />
    </div>
  );
};

export default Recording;
