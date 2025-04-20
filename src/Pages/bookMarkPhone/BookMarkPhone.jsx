import React from 'react';
import Button from '../../Utilies/Button/Button';
import { Link } from 'react-router';
import { Trash2 } from 'lucide-react';
const BookMarkPhone = ({bookMark,handleDelete}) => {
   
    const {name, image, description,id} = bookMark;
    
    
    return (
        <div className=''>
            <div className='border rounded-2xl p-6 relative'>
                <img className='rounded-2xl' src={image} alt="" />
                <h1 className='font-bold py-3 text-xl'>{name}</h1>
                <p>{description}</p>
               <div className='flex justify-end'><Link to={`/phoneDetails/${id}`}><Button name='View Details'/></Link></div>
               <div className='absolute -top-4 -right-4 hover:bg-black hover:rounded-2xl hover:px-1 hover:text-white'><button onClick={()=>handleDelete(id)}><Trash2/></button></div>
             
            </div>
        </div>
    );
};

export default BookMarkPhone;