import React from 'react';

import download from '../assets/icon-downloads.png'
import review from '../assets/icon-ratings.png'

const InstalledApp = ({app, handleUninstall}) => {
   
   
    return (
        <div className='flex justify-between items-center bg-[#FFFFFF] p-5 rounded-2xl'>
            <div className='flex items-center'>
                <img className='w-[100px] h-[100px]' src={app.image} alt="" />
                <div className='ml-5'>
                    <h1 className='font-semibold text-2xl'>{app.title}</h1>
                    <div className='flex space-x-5'>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[16px] h-[16px]' src={download} alt="" />
                            <p>{app.downloads}</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[16px] h-[16px]' src={review} alt="" />
                            <p>{app.reviews}</p>
                        </div>
                        <div>
                            <p>{app.size}MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handleUninstall(app.id)} className='py-3 px-4 bg-[#00D390] text-white font-semibold rounded-xl'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;