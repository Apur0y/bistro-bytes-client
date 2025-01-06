import React from "react";
import MenuCard from "../../Home/OurMenu/MenuCard";

const MenuCategory = ({ items,coverImg,title }) => {
  return (
    <div>
      { title && <Cover img={coverImg} title={title}></Cover> }

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
