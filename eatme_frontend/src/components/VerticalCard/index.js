import React from "react";
import AddIcon from '@mui/icons-material/Add';
const VerticalCard = ({ name, calories, price }) => {
  return (
    <div className="card h-auto w-full rounded-md shadow-[0_0_10px_rgba(0,0,0,0.1)]" >
      <div className="aspect-[4/3]">
        <img src="logo.png" alt={name} className="w-full h-full object-cover object-center" />
      </div>
      <div className="card-content">
        <h3 className="card-name font-bold mb-4 text-sm">{name} Name</h3>
        <div className="card-details">
          <p className="card-calories text-sm">{calories} 432 Kcal</p>
          <p className="card-price text-sm">{price}31 €</p>
        </div>
      <button className="inline-flex items-center justify-center border border-[#00000014] w-full mt-2 py-1 hover:border-gray-300 text-[#00b8a9]"><AddIcon /></button>
      </div>
    </div>
  );
};

export default VerticalCard;
