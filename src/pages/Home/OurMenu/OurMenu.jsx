import React from "react";
import useMenu from "../../../hook/useMenu";
import MenuCard from "./MenuCard";
import TitleName from "../../../component/SectionTitle/TitleName";

const OurMenu = () => {
  const [menu] = useMenu();

  const populatItems = menu.filter((item) => item.category == "popular");
  console.log(populatItems);
  return (
    <div className="my-7">

<TitleName heading={"FROM OUR MENU"} subHeading={"---Check It Out---"}></TitleName>

      <div className="grid grid-cols-2 gap-4">
        {populatItems.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
