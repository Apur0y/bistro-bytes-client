import React from 'react';

const MenuCard = ({item}) => {
    return (
        <div className='flex justify-between gap-3'>
        <div>
            <img style={{borderRadius:'0 200px 200px 200px'}} src={item.image} alt="" className='w-[100px]' />
        </div>

        <div>
            <h1 className='text-2xl font-semibold'>{item.name}</h1>
            <p>{item.recipe}</p>
        </div>

        <div>
            <h3 className='text-xl text-yellow-500'>{item.price}</h3>
        </div>
    </div>
    );
};

export default MenuCard;