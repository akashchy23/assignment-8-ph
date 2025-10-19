import React from 'react';
import { useParams } from 'react-router';

import icondownload from '../assets/icon-downloads.png'
import iconrating from '../assets/icon-ratings.png'
import iconreview from '../assets/icon-review.png'
import useAppsData from '../hooks/useApps';
const AppsDetails = () => {
    const { id } = useParams()
    const {apps,loading} =useAppsData()
    const app = apps.find(p=> p.id === parseInt(id))
    if(loading) return <p>loading....</p>
    return (
        <div className='max-w-[1440px] mx-auto'>
            {/* details of app */}
            <div  className='flex flex-col md:flex-row p-3 mt-10 md:mt-16 space-y-2'>
                <div className='md:w-1/3'>
                    <img className='w-[400px] md:w-[350px] h-[350px]' src={app.image} alt="" />
                </div>
                <div className='ml-5 space-y-2 md:w-2/3'>
                    <h1 className='font-bold text-4xl'>{app.title}</h1>
                    <p className='text-[#627382] text-xl'>Developed by <span className='text-[#632EE3] font-semibold'>{app.companyName}</span></p>
                    <hr className='my-7' />

                    <div className='flex space-x-15'>
                        <div className='space-y-2'>
                            <img src={icondownload} alt="" />
                            <p>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>{app.downloads}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={iconrating} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='font-extrabold text-4xl'>{app.ratingAvg}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={iconreview} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='font-extrabold text-4xl'>{app.reviews}</h1>
                        </div>
                    </div>
                    
                    <button className='py-3 px-6 bg-[#00D390] text-white font-bold rounded-xl text-xl mt-8'>
                        Install 
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default AppsDetails;