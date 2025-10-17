import React from 'react';
import Banner from '../Component/Banner';
import useAppsData from '../hooks/useApps';
import AppsCard from './AppsCard';
import { Link } from 'react-router';

const Home = () => {
    const { apps } = useAppsData()
    const appsForHome = apps.slice(0,8)
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1440px] mx-auto'>
                <div className='text-center'>
                    <h1 className='font-bold text-5xl'>Trending Apps</h1>
                    <p className='text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto'>
                    {
                        appsForHome.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                    }
                </div>
                <div className='flex justify-center my-20'>
                    <Link to='/apps'>
                    <button className='font-semibold text-white py-4 px-10 rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
                    </Link>
                </div>

             

            </div>
        </div>
    );
};

export default Home;