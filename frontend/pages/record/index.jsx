import React from "react";
import Recording from "@/components/record/index";
import Navbar from "@/components/navbar";
import RecordFile from "@/components/record/file";
const Record = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Recording />
      </div>
    </div>
  );
};

export default Record;
