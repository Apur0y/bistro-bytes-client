import React from 'react';
import './Featured.css';
import TitleName from '../../../component/SectionTitle/TitleName';
import featuredImg from "../../../assets/home/featured.jpg"


const Featured = () => {
    return (
        <div  className='featured-item my-12 bg-fixed'>
            <TitleName heading={"Featured Items"} subHeading={"Open For Limited Time"}></TitleName>
            <div className='flex gap-4 py-12 justify-center px-36 '>
                <img src={featuredImg} alt="" className='w-64' />
                <div>
                    <h4 className='text-xl'>January 01, 2025</h4>
                    <h3 className='text-xl'>Where I can Get Some?</h3>
                    <p>Get he best food at the right palce. Came to check out all the <br /> exciting food avaiable to you nearest shop.</p>
                    <button className='btn btn-outline border-0 border-b-4 bg-slate-200'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;