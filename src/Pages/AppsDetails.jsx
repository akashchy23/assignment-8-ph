import React from 'react';
import { Link, useParams } from 'react-router';

import icondownload from '../assets/icon-downloads.png'
import iconrating from '../assets/icon-ratings.png'
import iconreview from '../assets/icon-review.png'
import useAppsData from '../hooks/useApps';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
const AppsDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useAppsData()
    const app = apps.find(p => p.id === parseInt(id))
    if (loading) return <p>loading....</p>
    
    if (!app) {
        return (
            <div className='flex justify-center items-center mt-20'>
                <div className='text-center space-y-6'>
                    <h1 className='font-bold text-4xl'>App Not Found</h1>
                    <p className='text-gray-400 text-xl'>The app you are looking for does not exist or may have been removed.</p>
                    <Link to='/' className='text-white rounded-sm font-semibold py-3 px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-[1440px] mx-auto mb-10 md:mb-20'>
            {/* details of app */}
            <div className='flex flex-col md:flex-row p-3 mt-10 md:mt-16 space-y-2'>
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
                        Install Now(<span>{app.size}MB</span>)
                    </button>
                </div>
            </div>

            {/* details of graph chart */}
            <div>
                <hr className='my-12' />
            </div>

            <div className='mx-5'>
                <h1 className='text-2xl font-semibold'>Ratings</h1>
                <div className='w-full h-[300px] md:[400px] '>
                    <ResponsiveContainer width={'100%'} height={'100%'}>
                        <BarChart data={[...app.ratings].reverse()} layout='vertical' >
                            <XAxis type='number'></XAxis>
                            <YAxis type='category' dataKey={'name'}></YAxis>
                            <Bar dataKey={'count'} fill="#FF8811" barSize={30}></Bar>
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <hr className='my-12' />
            <div className='space-y-2 mx-3'>
                <h2 className='font-semibold text-2xl'>Description</h2>
                <p className='text-[#627382] text-xl'>{app.description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;