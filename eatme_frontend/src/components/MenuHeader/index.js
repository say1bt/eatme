import React from "react";
import Info from "../Info";
import Ratings from "../Ratings";
import { Link } from "react-router-dom";


const MenuHeader = () => {
  return (
    <div className="flex">
    <div className="px-[60px] w-full">
        <Link className="flex gap-3 text-[#00b8a9] my-4" href="#">
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Back" focusable="false"><path d="M9.6 5.5L11.1556 7.05558L7.21126 11H21V13H7.21126L11.1556 16.9443L9.6 18.5L3 12L9.6 5.5Z"></path></svg>
          <span>Back</span></Link>
    <div className="grid grid-cols-3 gap-[24px] pb-8">
      <div>
        <img src="./images/image.webp" alt="" className="w-full rounded" />
      </div>
      <div className="">
        <h1 className="font-bold text-[40px]">Tossed - St Martin's Lane</h1>
        <h3 className="text-base font-light">Chicken·Salads·Healthy</h3>
        <h3 className="pt-2 text-base font-light text-[#585c5c]">0.20 miles away · Opens at 11:00 · £7.00 minimum · £0.49 delivery</h3>
        <div className="mt-4">
          <Info />
        </div>
        <Ratings />
      </div>

      <div className="flex flex-col items-end justify-start pt-4">
      <button className="flex gap-3 items-center">
        <img src="/cycle.svg" alt="no-img" className="w-6" />
        <span>Deliver in 10 - 20 min</span>
        <span className="text-[#00b8a9]">Change</span>
      </button>

      <button className="signup-btn mt-4">
      <svg height="24" width="24" fill="#00b8a9" viewBox="0 0 24 24" role="presentation" focusable="false" class="ccl-2608038983f5b413 ccl-ab78be2f3c0b8a03"><path d="M11.6637 12.4466C13.0562 11.6816 14 10.201 14 8.5C14 6.01472 11.9853 4 9.5 4C7.01472 4 5 6.01472 5 8.5C5 10.201 5.9438 11.6816 7.3363 12.4466C4.48508 13.5922 2 16.7311 2 19.3846C2 19.6185 2.01931 19.8424 2.05647 20.0565L3 21H16L16.9435 20.0565C16.9807 19.8424 17 19.6185 17 19.3846C17 16.7311 14.5149 13.5922 11.6637 12.4466ZM12 8.5C12 9.88071 10.8807 11 9.5 11C8.11929 11 7 9.88071 7 8.5C7 7.11929 8.11929 6 9.5 6C10.8807 6 12 7.11929 12 8.5ZM13.19 15.8589C14.2374 16.9137 14.8339 18.0889 14.9699 19H4.0301C4.16611 18.0889 4.76258 16.9137 5.81002 15.8589C7.00225 14.6583 8.39696 14 9.5 14C10.603 14 11.9978 14.6583 13.19 15.8589Z"></path><path d="M13.4998 12.2749C13.877 11.8754 14.1951 11.4193 14.44 10.9205C14.6177 10.9723 14.8056 11 15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C14.9311 7 14.863 7.00349 14.7959 7.01029C14.6054 6.33189 14.2882 5.70656 13.8712 5.16149C14.2292 5.05639 14.608 5 15 5C17.2092 5 19 6.79086 19 9C19 10.0391 18.6038 10.9857 17.9541 11.6969C20.3438 12.8756 22 15.3903 22 18L21 19H17.9862C17.9385 18.3278 17.7688 17.6534 17.5074 17H19.8835C19.3853 14.8534 17.3514 13 15 13C14.8417 13 14.6848 13.0084 14.5297 13.0247C14.2014 12.7535 13.8569 12.502 13.4998 12.2749Z"></path></svg>
        <span>Start group order</span>  
        </button>
    </div>

    </div>
    </div>

    </div>
  );
};

export default MenuHeader;
