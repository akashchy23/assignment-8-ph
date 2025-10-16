import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayOut;