import React, { useState } from 'react';
import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import Phones from '../phones/Phones';
import EmptyState from '../../components/emptyState/EmptyState';

const Home = () => {
    const data = useLoaderData();

    const [phoneData, setPhoneData] = useState(data)
    console.log(phoneData);
   
    const handleSearch = (e,text) =>{
        console.log(text);
        e.preventDefault();
        if(text === '') return setPhoneData(data)
       const searchPhones = phoneData.filter(phone=>phone.name.toLowerCase().includes(text.toLowerCase()) ||
       phone.brand.toLowerCase().includes(text.toLowerCase())
    ) 
       console.log(searchPhones);
       setPhoneData(searchPhones)

    }
   
    return (
        <div>
         
            <Banner handleSearch={handleSearch}/>
            <Phones Phones={phoneData}/>
        </div>
    );
};

export default Home;