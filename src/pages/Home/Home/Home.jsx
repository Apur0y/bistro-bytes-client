import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet-async';
import OurMenu from '../OurMenu/OurMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Home</title>
            </Helmet>
          
            <Banner></Banner>
            <Category></Category>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;