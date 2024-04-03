import React from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Info = () => {
  return (
    <button className="inline-flex gap-3 items-center text-left">
      <ErrorOutlineOutlinedIcon fontSize="20" className="text-[#abadad] w-5 h-5" color="#abadad" />
      <div className="flex-1">
        <div className="text-[#2e3333]">Info</div>
        <div className="text-[#585c5c] text-sm">Map, allergens, and hygiene rating</div>
      </div>
      <ArrowForwardIosOutlinedIcon fontSize="16" className="text-[#00ccbc]" />
    </button>
  );
};

export default Info;
