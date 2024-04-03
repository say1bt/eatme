import React, { useEffect, useState } from "react";
import { mealCategories } from "../../constants/meal_constants";

const MealsNavBar = () => {

  const [isActiveState, setActiveState] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function setActiveMenu(item){
    mealCategories.forEach((item)=>{
      item.active = false;
    })

    item.active = true;
    setActiveState(true)
    
  }

  useEffect(()=>{
    setActiveState(false)
  },[isActiveState])


  return (
    <div className="px-16 flex bg-white z-50 mealsNavbar items-center justify-center sticky top-[69px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] border-t border-[#00000014]">
      <ul className="flex 3xl:hidden items-center w-full justify-start gap-3 h-[74px] ">
        {mealCategories.map((item, index) => {
            if (index > 8 ) {
              return;
          }
          return (
            <li key={index} >
              <button onClick={() => setActiveMenu(item)} className={`${item.active && 'bg-[#00b8a9] text-white'} inline-flex items-center justify-center px-4 py-[1px] cursor-pointer text-[#00b8a9] rounded-full text-sm hover:opacity-80`}>
                {item.name}
              </button>
            </li>
          )
        })}

        {
          mealCategories.length > 8 && 
          <li className="ml-auto">
                <button className="flex items-center text-[#00b8a9] gap-2">
            <span>More</span> 
            <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" class="ccl-2608038983f5b413 ccl-ab78be2f3c0b8a03"><path d="M4.88398 7.11612L3.11621 8.88389L12.0001 17.7678L20.884 8.88389L19.1162 7.11612L12.0001 14.2322L4.88398 7.11612Z"></path></svg>
          </button>
          </li>
          }
      </ul>

      <ul className="hidden 3xl:flex items-center w-full justify-start gap-3 h-[74px] ">
        {mealCategories.map((item, index) => {
            if (index > 10 ) {
              return;
          }
          return (
            <li key={index} >
              <button onClick={() => setActiveMenu(item)} className={`${item.active && 'bg-[#00b8a9] text-white'} inline-flex items-center justify-center px-4 py-[1px] cursor-pointer text-[#00b8a9] rounded-full text-sm hover:opacity-80`}>
                {item.name}
              </button>
            </li>
          )
        })}
        {
          mealCategories.length > 10 && 
          <li className="ml-auto">
            <button className="flex items-center text-[#00b8a9] gap-2">
              <span>More</span> 
              <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" class="ccl-2608038983f5b413 ccl-ab78be2f3c0b8a03"><path d="M4.88398 7.11612L3.11621 8.88389L12.0001 17.7678L20.884 8.88389L19.1162 7.11612L12.0001 14.2322L4.88398 7.11612Z"></path></svg>
            </button>
          </li>
        }
      </ul>
    </div>
  );
};

export default MealsNavBar;
