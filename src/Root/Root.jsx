import React from 'react';
import Navbar from '../components/Header/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-288px)]'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;