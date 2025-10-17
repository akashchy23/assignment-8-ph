import React from 'react';

import downloadImg from '../assets/icon-downloads.png'
import rateIcon from '../assets/icon-ratings.png'

const AppsCard = ({ app }) => {
    const {image ,title,downloads,reviews
} = app;
    return (
        <div className='bg-[#FFFFFF] w-87 mx-auto shadow-sm p-4 rounded-xl'>
            <img className='h-[316px] w-[316px]' src={image} alt="" />
            <h1 className='font-medium my-2'>{title}</h1>
            <div className='flex justify-between my-2'>
                <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                    <img className='w-3 h-3' src={downloadImg} alt="" />
                    <p className='text-[#00D390] font-medium ml-2'>{downloads}</p>
                </button>
                <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                    <img className='w-3 h-3' src={rateIcon} alt="" />
                    <p className='text-[#00D390] font-medium ml-2'>{reviews}</p>
                </button>
            </div>
        </div>
    );
};

export default AppsCard;

/*
 <div className='bg-[#FFFFFF] w-87 shadow-sm p-4 rounded-xl'>
                        <img className='h-[316px] w-[316px]' src={img} alt="" />
                        <h1 className='font-medium'>Forest: Focus for Productivity</h1>
                        <div className='flex justify-between'>
                            <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                                <img className='w-3 h-3' src={dnld} alt="" />
                                 <p className='text-[#00D390] font-medium ml-2'>9M</p>
                            </button>
                            <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                                <img className='w-3 h-3' src={iconrate} alt="" />
                                 <p className='text-[#00D390] font-medium ml-2'>5</p>
                            </button>
                        </div>
                    </div>
*/