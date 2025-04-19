import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='py-20'>
            <img className='w-[400px] mx-auto' src={bannerImg} alt="" />
            <h1 className='font-thin text-5xl md:text-7xl text-gray-600 text-center'>Browse, Search, View, Buy</h1>
            <p className='text-gray-500 text-center py-4 lg:w-1/2  w-4/5 mx-auto'>Best place to browse, search, view details and purchase of top flagship phones
            of the current time - FlagshipFaceOff</p>
            <form className='text-center'>
                <input type="text"  className='border w-1/2 p-2 rounded-2xl outline-0 border-gray-500 shadow' placeholder='Search Phone by Name' />
                <input type="submit" className='border ml-4 p-2 rounded-2xl border-gray-500 ' value="search" /> 
            </form>
        </div>
    );
};

export default Banner;