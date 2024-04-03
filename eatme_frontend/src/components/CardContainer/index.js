import React from "react";
import HorizontalCard from "../HorizontalCard";
import { dummyCards } from "../../constants/meal_constants";

const CardContainer = ({ title }) => {
  return (
    <>
      <div className="p-[32px_0px]">
        <h2 className="font-bold text-xl mb-4">{title}</h2>
        <div className="grid 3xl:grid-cols-3 lg:grid-cols-2 gap-4">
          {dummyCards.map((card, index) => (
            <HorizontalCard
              key={index}
              title={card.title}
              description={card.description}
              calories={card.calories}
              price={card.price}
              popularity={card.popularity}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
