import React from 'react';
import Phone from '../phone/Phone';


const Phones = ({Phones}) => {
    console.log(Phones);

    return (
        <div>
            <div className='max-w-7xl mx-auto'>
             
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        Phones.map(singlePhone=><Phone singlePhone={singlePhone} key={singlePhone.id}></Phone>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Phones;