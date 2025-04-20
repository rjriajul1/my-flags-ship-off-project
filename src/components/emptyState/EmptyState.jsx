import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div className='flex justify-center py-50'>
            <div>
                <h1 className='text-center text-5xl lg:text-8xl  font-bold'>No Data Found! </h1>
                <h3 className='text-center text-3xl lg:text-5xl py-5 font-thin'>Browse,Search Phones,Add to Cart, Favorites.</h3>
                <div className='flex justify-center py-6'><button className='btn-primary btn'><Link  to='/'>Back  To Browser</Link></button></div>
            </div>
          
        </div>
    );
};

export default EmptyState;