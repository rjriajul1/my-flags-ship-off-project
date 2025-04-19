import React from 'react';
import Button from '../../Utilies/Button/Button';

const Phone = ({singlePhone}) => {

    const {name,image,description} = singlePhone;
   
  
    return (
        <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
          className='object-cover'
            src={image}
            alt="card image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Button name={"View Details"}></Button>
          </div>
        </div>
      </div>
    );
};

export default Phone;