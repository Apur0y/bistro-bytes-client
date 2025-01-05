import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet-async';
import OurMenu from '../OurMenu/OurMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Home</title>
            </Helmet>
          
            <Banner></Banner>
            <Category></Category>
            <OurMenu></OurMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;