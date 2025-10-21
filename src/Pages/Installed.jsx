import React, { useEffect, useState } from 'react';
import { handleLoadApps, handleRemoveApp } from '../utilis/localstorage';

import InstalledApp from './InstalledApp';


const Installed = () => {
    const [installed, setInstalled] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    console.log(sortOrder)
    useEffect(() => {
        const availableAPp = handleLoadApps()
        console.log(availableAPp)
        setInstalled(availableAPp)
    }, [])

    const handleUninstall = (id) => {
        handleRemoveApp(id)
        setInstalled(prev => prev.filter(app => app.id !== id));
    }

    const sortedApps = () => {
        if (sortOrder === 'size-desc') {

            return [...installed].sort((a, b) => b.size - a.size)
        }
        if (sortOrder === "size-asc") {
            return [...installed].sort((a, b) => a.size - b.size)
        }
        else {
            return installed
        }
    }
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='max-w-[1440px] mx-auto pb-20'>
                <div className='text-center space-y-3 mt-10'>
                    <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className='font-semibold text-2xl'>{installed.length} Apps Found</h1>
                        <label className='form-control w-full max-w-xs'>
                            <select className='select' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="none">Sort By Size</option>
                                <option value="size-desc">High to Low</option>
                                <option value="size-asc">Low To High</option>
                            </select>

                        </label>
                    </div>

                    <div className='space-y-3'>
                        {
                            sortedApps().map(app => <InstalledApp key={app.id} app={app} handleUninstall={handleUninstall}></InstalledApp>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installed;