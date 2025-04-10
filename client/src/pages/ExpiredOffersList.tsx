import React from "react";
import FilterHeader from "./FilterHeader";
import ExpiredOffer from "../Components/ExpiredOffer";
import { expiredOffersData } from "../assets/Data/expiredOffersData";

const ExpiredOffersList = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <FilterHeader />

      <div className="space-y-6">
        {expiredOffersData.map((offer, index) => (
          <ExpiredOffer key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredOffersList;
