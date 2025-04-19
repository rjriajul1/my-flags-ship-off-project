import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../../Utilies/Button/Button';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosBookmark } from 'react-icons/io';

const PhoneDetails = () => {
    const {id}= useParams()
    const convertedId = parseInt(id)
    const data = useLoaderData()
  const specificPhone = data.find(phone=> phone.id === convertedId);

  const {name,image,description,brand,model,price,storage,camera_info} = specificPhone;
 
    return (
        <div className='py-20 max-w-7xl mx-auto'>
           <img className='mx-auto' src={image} alt="" />
           <div className='flex py-4 items-center justify-between'>
            <h1 className='font-thin text-5xl'>{name}</h1>
           <div className='space-x-3'>
           <Button name={<IoCartOutline />}/>
           <Button name={<IoIosBookmark />}/>
           </div>
           </div>
           <span className='font-thin text-gray-600 text-2xl'>Details:</span>
           <div className='space-y-2'>
           <h2><span className='font-bold mr-2'>Brand:</span>{brand}</h2>
           <h2><span className='font-bold mr-2'>Model:</span>{model}</h2>
           <h2><span className='font-bold mr-2'>Storage:</span>{storage[0]}
           <p className='ml-17'>{storage[1]}</p>
           </h2>
           <h2><span className='font-bold mr-2'>Price:</span>
         <div className='ml-12 -mt-6'>
         <p>{price["1TB"]}</p>
         {price['512GB']}
         </div>
           </h2>
           <h2><span className='font-bold mr-2'>Camera Info: </span>{camera_info}</h2>
           <h2><span className='font-bold mr-2'>Description: </span>{description}</h2>
           </div>
        </div>
    );
};

export default PhoneDetails;