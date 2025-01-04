import React from 'react';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from '../../hook/useMenu';

const Menu = () => {

    const [menu] =useMenu();
    const salad = menu.filter(item=>item.category=="salad")
    console.log(salad);

    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Menu</title>
            </Helmet>
            <Cover img={menuImg}></Cover>
        </div>
    );
};

export default Menu;