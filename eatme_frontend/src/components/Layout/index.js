import React from "react";
import Navbar from "../Navbar";
import MenuHeader from "../MenuHeader";
import MealsNavBar from "../MealsNavBar";
import ScrollContainer from "../ScrollContainer";
import CardContainer from "../CardContainer";
import { mealCategories } from "../../constants/meal_constants";
import Basket from "../Basket";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="relative"
    >
      <Navbar />
      <div>
        <MenuHeader />
        <MealsNavBar />
        <div className="px-[64px] py-8 gap-8 flex items-start w-full bg-[#f9fafa]">
          <div className="w-[70%]">
            <p className="text-sm text-[#585c5c]">
              Adults need around 2000 kcal a day
            </p>
            <h2 className="mt-8 font-bold text-xl mb-4">
              Popular with other people
            </h2>
            <ScrollContainer />
            <div className="bg-[#f9fafa]">
              {mealCategories.map((cat, index) => (
                <CardContainer key={index} title={cat.title} />
              ))}
            </div>
          </div>
          <Basket />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
