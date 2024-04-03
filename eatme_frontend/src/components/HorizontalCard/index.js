import React from "react";
import Button from "../Button";
import AddIcon from '@mui/icons-material/Add';
const HorizontalCard = ({
  title,
  description,
  calories,
  price,
  popularity,
  img
}) => {
  return (
    <>
      <div className="flex bg-white p-4 transition-all duration-300 hover:shadow-[0_22px_24px_0_#00000014] gap-4 cursor-pointer" >
        <div className="flex-1">
          <h4 className="text-base text-[#2e3333] font-bold line-clamp-1">{title} </h4>
          <p className="line-clamp-2 text-[14px] leading-[19px] pt-1 text-[#585c5c]">{description} </p>
          <p className="line-clamp-2 text-sm pt-1 text-[#585c5c]">{calories} </p>
          <p className="line-clamp-2 text-base pt-1 text-[#585c5c]">{price} </p>
          <p className="line-clamp-2 text-base pt-1 text-[#585c5c]">{popularity} </p>
        </div>
        <div className="w-[100px] h-[100px] border border-[#00000014]">
          {img ? (
            <img src={img} alt="food" className="w-full h-full object-cover" />
          ) : (
            <img src='./placeholder.svg' alt="placeholder" className="w-full h-full object-cover" />
          )}
        </div>
        <div>
          <button className="inline-flex items-center justify-center border border-[#00000014] w-[40px] h-[100px] transition-all duration-200\ hover:border-gray-300"><AddIcon /></button>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
