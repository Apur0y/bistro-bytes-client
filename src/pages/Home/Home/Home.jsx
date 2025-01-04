import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Bytes | Home</title>
            </Helmet>
          
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;