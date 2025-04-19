import React from 'react';
import Button from '../../Utilies/Button/Button';
import { Link } from 'react-router';

const Phone = ({singlePhone}) => {

    const {name,image,description,id} = singlePhone;
   
  
    return (
        <div className="card bg-base-100 p-3 shadow-sm">
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
            <Link to={`/phoneDetails/${id}`}><Button name={"View Details"}></Button></Link>
          </div>
        </div>
      </div>
    );
};

export default Phone;