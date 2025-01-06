import React from 'react';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import menuImg from "../../assets/menu/banner3.jpg"
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
    console.log(offered);

    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <TitleName heading={"Today's Offer"} subHeading={"Don't Miss"}></TitleName>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={salad} coverImg={menuImg} title={"Salad"}></MenuCategory>
           
        </div>
    );
};

export default Menu;