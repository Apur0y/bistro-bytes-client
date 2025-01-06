import React from "react";
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hook/useMenu";
import FoodCard from "../../../component/FoodCard/FoodCard";

const Order = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const pizza = menu.filter((item) => item.category == "pizza");
  const dessert = menu.filter((item) => item.category == "dessert");
  const offered = menu.filter((item) => item.category == "offered");

  return (
    <div>
      <Cover img={orderImg} title={"Order Food"}></Cover>
      <Tabs>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
         <div className="grid grid-cols-3">
         {salad.map((item) => (
            <FoodCard
              foodImg={item.image}
              title={item.name}
              description={item.recipe}
              price={item.price}
            ></FoodCard>
          ))}
         </div>
        </TabPanel>
       
      </Tabs>
    </div>
  );
};

export default Order;
