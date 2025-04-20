import React, { useState } from 'react';
import bannerImg from '../../assets/banner.png'
import Button from '../../Utilies/Button/Button';

const Banner = ({handleSearch}) => {
    const [search, setSearch] = useState('')

    return (
        <div className='py-20'>
            <img className='w-[400px] mx-auto' src={bannerImg} alt="" />
            <h1 className='font-thin text-5xl md:text-7xl text-gray-600 text-center'>Browse, Search, View, Buy</h1>
            <p className='text-gray-500 text-center py-4 lg:w-1/2  w-4/5 mx-auto'>Best place to browse, search, view details and purchase of top flagship phones
            of the current time - FlagshipFaceOff</p>
            <form onSubmit={(e)=>{
                handleSearch(e,search);
                setSearch('')
            }} className='flex flex-col justify-center md:flex-row gap-6  px-6'>
                <input 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                type="text"  
                className='border md:w-1/2 p-3 rounded-2xl outline-0 border-gray-500 shadow' placeholder='Search Phone by Name' />
               <div className='flex justify-center'><Button type='submit'  name={"Search"}></Button> </div>
            </form>
        </div>
    );
};

export default Banner;