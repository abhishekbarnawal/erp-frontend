'use client'
import React, { useState } from 'react'

const page = () => {
    const [selectedTab, setSelectedTab] = useState('tab2'); // 'tab2' is selected by default

    const handleTabChange = (tabName) => {
        setSelectedTab(tabName);
    };
    return (
        <div className='  w-full bg-slate-100 flex gap-2 p-4 '>
            <div className=' flex items-start bg-white w-full border border-slate-300 p-4 rounded-md'>
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab whitespace-nowrap mb-4"
                        aria-label="Profile"
                        checked={selectedTab === 'tab1'}
                        onChange={() => handleTabChange('tab1')}
                    />
                    <div role="tabpanel" className={`border border-slate-200 tab-content p-10 ${selectedTab !== 'tab1' && 'hidden'}`}>

                        <h1 className='font-semibold'>Dummy Heading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequatur! Similique nesciunt totam quidem laboriosam impedit aspernatur dolore officia eos.</p>
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab whitespace-nowrap mb-4"
                        aria-label="Team"
                        checked={selectedTab === 'tab2'}
                        onChange={() => handleTabChange('tab2')}
                    />
                    <div role="tabpanel" className={`tab-content p-10 ${selectedTab !== 'tab2' && 'hidden'}`}>Tab content 2</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab whitespace-nowrap mb-4"
                        aria-label="Manage"
                        checked={selectedTab === 'tab3'}
                        onChange={() => handleTabChange('tab3')}
                    />
                    <div role="tabpanel" className={`tab-content p-10 ${selectedTab !== 'tab3' && 'hidden'}`}>Tab content 3</div>
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab whitespace-nowrap mb-4"
                        aria-label="Pay"
                        checked={selectedTab === 'tab4'}
                        onChange={() => handleTabChange('tab4')}
                    />
                    <div role="tabpanel" className={`tab-content p-10 ${selectedTab !== 'tab4' && 'hidden'}`}>Tab content 4</div>
                </div>
            </div>
            <div className='  h-[max-content] bg-white flex-col items-center gap-3 w-[45%] border border-slate-300 p-4 rounded-md'>
                <h1 className='text-2xl font-semibold '>Profile</h1>
                <div className='border-2 border-slate-500 rounded-full w-24 h-24 '></div>
                <h1 className='text-2xl font-semibold '>Abhishek Barnawal</h1>
                <div className='w-full'>
                    <span className='flex items-start w-full gap-2'>
                        <p>Icon</p>
                        <p className="text-slate-700">Profile</p>
                    </span>
                    <span className='flex items-start w-full gap-2'>
                        <p>Icon</p>
                        <p className="text-slate-700">Management</p>
                    </span>
                    <span className='flex items-start w-full gap-2'>
                        <p>Icon</p>
                        <p className="text-slate-700">Kathmandu</p>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default page