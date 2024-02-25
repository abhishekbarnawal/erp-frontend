'use client';
import React, { useState } from 'react'

const page = () => {
  const [selectedTab, setSelectedTab] = useState('tab2'); // 'tab2' is selected by default

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };
  return (
    <div className='  w-full bg-slate-100 flex gap-2 p-4 '>
      <div className=' flex items-start bg-white w-full border border-slate-300 p-4 rounded-md'>
        <div role="tablist" className="tabs tabs-bordered w-full">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab whitespace-nowrap mb-4"
            aria-label="Annual Engagement"
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
            aria-label="General"
            checked={selectedTab === 'tab2'}
            onChange={() => handleTabChange('tab2')}
          />
          <div role="tabpanel" className={`tab-content p-10 ${selectedTab !== 'tab2' && 'hidden'}`}>Tab content 2</div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab whitespace-nowrap mb-4"
            aria-label="Notifications"
            checked={selectedTab === 'tab3'}
            onChange={() => handleTabChange('tab3')}
          />
          <div role="tabpanel" className={`tab-content p-10 ${selectedTab !== 'tab3' && 'hidden'}`}>Tab content 3</div>

        </div>
        <button className="btn btn-primary">Button</button>
      </div>


    </div>
  )
}

export default page