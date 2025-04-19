import React, { useState } from 'react';
import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import Phones from '../phones/Phones';

const Home = () => {
    const data = useLoaderData();

    const [phoneData, setPhoneData] = useState(data)
   
    const handleSearch = (e,text) =>{
        e.preventDefault();
        if(text === '') return setPhoneData(data)
       const searchPhones = phoneData.filter(phone=>phone.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
       phone.brand.toLowerCase().split(' ').includes(text.toLowerCase())
    ) 
       
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