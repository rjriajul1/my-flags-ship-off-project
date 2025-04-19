import React from 'react';
import Banner from '../../components/banner/Banner';
import { useLoaderData } from 'react-router';
import Phones from '../phones/Phones';

const Home = () => {
    const data = useLoaderData()
    // console.log(data);
   
    return (
        <div>
            <Banner/>
            <Phones Phones={data}/>
        </div>
    );
};

export default Home;