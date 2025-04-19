import React, { useEffect, useState } from 'react';
import Phone from '../phone/Phone';
import Button from '../../Utilies/Button/Button';


const Phones = ({Phones}) => {

    const [displayPhone,setDisplayPhone] = useState([]);
    const [showAll,setShowAll] = useState(false);

    useEffect(()=>{
        if(showAll){
            setDisplayPhone(Phones);
        }else{
            setDisplayPhone(Phones.slice(0,6));
        }
    },[Phones,showAll])

    return (
        <div>
            <div className='max-w-7xl mx-auto'>
             
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        displayPhone.map(singlePhone=><Phone singlePhone={singlePhone} key={singlePhone.id}></Phone>)
                    }
                </div>
                <div onClick={()=>{
                    setShowAll(!showAll)
                    if(showAll) window.scrollTo(0,400)
                }} className='py-6'><Button name={showAll? 'Show Less':'Show All'}/></div>
            </div>
        </div>
    );
};

export default Phones;