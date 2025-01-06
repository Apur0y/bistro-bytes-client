import React from 'react';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import menuImg from "../../assets/menu/banner3.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import useMenu from '../../hook/useMenu';
import OurMenu from '../Home/OurMenu/OurMenu';
import TitleName from '../../component/SectionTitle/TitleName';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] =useMenu();
    const salad = menu.filter(item=>item.category=="salad")
    const soup = menu.filter(item=>item.category=="soup")
    const pizza = menu.filter(item=>item.category=="pizza")
    const dessert = menu.filter(item=>item.category=="dessert")
    const offered = menu.filter(item=>item.category=="offered")
    console.log(offered,salad,soup,pizza);

    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <TitleName heading={"Today's Offer"} subHeading={"Don't Miss"}></TitleName>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={salad} coverImg={saladImg} title={"Salad"}></MenuCategory>
            <MenuCategory items={soup} coverImg={soupImg} title={"soup"}></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={dessert} coverImg={dessertImg} title={"dessert"}></MenuCategory>
           
        </div>
    );
};

export default Menu;