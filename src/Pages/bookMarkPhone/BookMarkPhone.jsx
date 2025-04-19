import React from 'react';
import Button from '../../Utilies/Button/Button';
import { Link } from 'react-router';
const BookMarkPhone = ({bookMark}) => {
    const {name, image, description,id} = bookMark;
    
    return (
        <div className=''>
            <div className='border rounded-2xl p-6'>
                <img className='rounded-2xl' src={image} alt="" />
                <h1 className='font-bold py-3 text-xl'>{name}</h1>
                <p>{description}</p>
               <div className='flex justify-end'><Link to={`/phoneDetails/${id}`}><Button name='View Details'/></Link></div>
            </div>
        </div>
    );
};

export default BookMarkPhone;