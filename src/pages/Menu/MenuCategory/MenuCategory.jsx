import React from "react";
import MenuCard from "../../Home/OurMenu/MenuCard";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items,coverImg,title }) => {
  return (
    <div>
      { title && <Cover img={coverImg} title={title}></Cover> }

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 text-yellow-600 bg-gray-200">ADD TO CARD</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
