import React, { useState } from 'react';
import search from '../assets/search.png'
import useAppsData from '../hooks/useApps';
import AppsCard from './AppsCard';
const Apps = () => {
    const { apps, loading } = useAppsData()
    const [searchApps, setSearchApps] = useState('');
    const term = searchApps.trim().toLowerCase()
    const searchedApps = term ?
        apps.filter(app => app.title.toLowerCase().includes(term))
        : apps;

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-center mt-10 md:mt-15 space-y-4'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div>
                <div className='flex flex-col space-y-5 md:flex-row md:justify-between items-center mb-4'>
                    <p className='font-semibold text-2xl'>({searchedApps.length}) Apps Found </p>
                    <label className='input'>
                        <img src={search} alt="" />
                        <input value={searchApps} onChange={(e) => setSearchApps(e.target.value)} type="search" placeholder='search apps here' />
                    </label>
                </div>
                {
                    loading ?
                        <div className='flex items-center justify-center'>
                            <span className="loading loading-spinner text-success w-24 h-24"></span>
                        </div>
                        :
                        searchedApps.length === 0 ?
                            (<div className='text-center'>
                                <p className='text-5xl text-gray-300 font-black'>No Apps Found</p>
                            </div>)
                            : (
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto mb-15'>
                                    {
                                        searchedApps.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                                    }
                                </div>
                            )
                }
            </div>
        </div>

    );
};

export default Apps;