import React from "react";
import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hook/useMenu";
import FoodCard from "../../../component/FoodCard/FoodCard";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const {category} = useParams();
  const categories = ["salad", "soup", "dessert", "pizza", "drinks"];
  const tabIndex = categories.indexOf(category);
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const pizza = menu.filter((item) => item.category == "pizza");
  const dessert = menu.filter((item) => item.category == "dessert");
  const offered = menu.filter((item) => item.category == "offered");
  const drinks = menu.filter((item) => item.category == "drinks");

  return (
    <div>
      <Cover img={orderImg} title={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex >= 0 ? tabIndex : 0}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
         <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
         <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
       
      </Tabs>
    </div>
  );
};

export default Order;
