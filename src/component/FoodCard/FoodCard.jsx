import React from "react";

const FoodCard = ({foodImg,title,description,price}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={foodImg}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 text-yellow-600 bg-gray-200">ADD TO CARD</button>
        </div>
        <p style={{borderRadius:'200px 0px 0px 200px'}} className="absolute top-2 right-0 mr-2 bg-slate-800 text-white px-3 py-1">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
