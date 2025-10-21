import React, { useEffect, useState } from 'react';
import { handleLoadApps } from '../utilis/localstorage';

import InstalledApp from './InstalledApp';


const Installed = () => {
    const [installed, setInstalled] = useState([])
    console.log(installed)

    useEffect(() => {
        setInstalled(handleLoadApps)
    }, []) 
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='max-w-[1440px] mx-auto pb-20'>
                <div className='text-center space-y-3 mt-10'>
                    <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className='font-semibold text-2xl'>1 Apps Found</h1>
                        <button>Sort By Size</button>
                    </div>

                   <div className='space-y-3'>
                    {
                        installed.map(app=> <InstalledApp app={app}></InstalledApp>)
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Installed;