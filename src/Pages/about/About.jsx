import React from 'react';
import { useLoaderData } from 'react-router';
import Button from '../../Utilies/Button/Button';

const About= () => {
    const data = useLoaderData()

  
    return (
       <div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 py-10 p-4'>
            {
                data.map((singleAbout,index)=>(
                 <div key={index} className='border   duration-100 hover:scale-110 rounded-xl p-6'>
                       <img className='w-12' src={singleAbout.icon} alt="" />
                       <p className='font-bold py-3'>{singleAbout.name}</p>
                       <p>{singleAbout.description}</p>
                   
                 </div>
            ))
            }
           
        </div>
        <div className='flex mb-6 justify-center'>
           <Button  name='Lear More'/>
           </div>
       </div>
    );
};

export default About;




