'use client'
import { HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement, useEffect, useState } from 'react';
import { MdAccessAlarm } from 'react-icons/md';
import logo from '../../public/icons/logo.svg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
const Sidebar = () => {
    const pathname = usePathname()
    type NavItem = {
        id: number,
        title: string,
        link: string,
        icon: ReactElement,
        subItems?: NavItem[]
    }
    const navItems: NavItem[] = [
        {
            id: 1,
            title: 'Dashboard',
            icon: <HomeOutlinedIcon className="w-5 h-5" />,
            link: 'dashboard'
        },
        {
            id: 2,
            title: 'Profile',
            icon: <AccountBoxOutlinedIcon className="w-5 h-5" />,
            link: 'Profile'
        },
        {
            id: 3,
            title: 'Leave Tracker',
            icon: <EditCalendarOutlinedIcon className="w-5 h-5" />,
            link: 'Leavetracker'
        },
        {
            id: 4,
            title: 'Attendance',
            icon: <EventAvailableOutlinedIcon className="w-5 h-5" />,
            link: 'Attendance'
        },
        {
            id: 5,
            title: 'Organization',
            icon: <ApartmentOutlinedIcon className="w-5 h-5" />,
            link: 'Organization'
        },
        {
            id: 6,
            title: 'HR',
            icon: <ManageAccountsOutlinedIcon className="w-5 h-5" />,
            link: 'HR'
        },
        {
            id: 7,
            title: 'Reports',
            icon: <InsertChartOutlinedRoundedIcon className="w-5 h-5" />,
            link: 'Reports'
        },
        {
            id: 8,
            title: 'Performance',
            icon: <EmojiEventsOutlinedIcon className="w-5 h-5" />,
            link: 'Performance'
        },
        {
            id: 9,
            title: 'Payroll Management',
            icon: <MdAccessAlarm className="w-5 h-5" />,
            link: 'payrollmanagement',
            // subItems: [
            //     {
            //         id: 1,
            //         title: 'Service',
            //         icon: <MdAccessAlarm className="w-5 h-5" />,
            //         link: 'service'
            //     }
            // ]
        },
        {
            id: 10,
            title: 'More',
            icon: <AppsOutlinedIcon className="w-5 h-5" />,
            link: 'More'
        },
    ]
    console.log(pathname)
    return (
        <aside className='bg-white border-[4px] flex  flex-col items-left place-content-between w-[70px] z-50 absolute lg:relative border-r'>
            <div>
                <div className='flex items-center place-content-between'>
                    <Image className='w-20'
                        priority
                        src={logo}
                        alt="Follow us"
                    />

                </div>
                <div className='flex mt-4 flex-col gap-3'>
                    <div className='border-b border-b-slate-200'>
                        {/* <div className='flex items-center gap-4 p-2.5 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer h-11 rounded mb-1 lg:mb-2 text-neutral-800'>
                            <Image src='/icons/dashboard.svg' className='hover:text-green-300' width={18} height={18} alt='svg' />
                            <div className='flex '>Dashboard</div>
                        </div> */}
                        {
                            navItems.map((navItem) =>
                            (
                                <Link href={`/${navItem.link}`} key={navItem.id} className={`h-[60px] overflow-hidden cursor-pointer flex flex-col justify-center items-center p-2   text-neutral-800 ${pathname.split("/").includes(navItem.link) ? 'text-white bg-[#5851D3]' : 'hover:bg-indigo-50 hover:text-indigo-700'} cursor-pointer flex gap-1`}>
                                    <span className='inline-flex'>{navItem.icon}</span>
                                    <div className={`flex items-center text-[11px] text-center`}>{navItem.title}</div>
                                    {
                                        Array.isArray(navItem.subItems) && navItem?.subItems.length > 0 &&
                                        <div>
                                            {
                                                navItem.subItems.map((subItem) => <Link key={`${subItem.id}/${subItem.title}`} href={`/${navItem.link}/${subItem.link}`}><span className={`${pathname.split("/").includes(subItem.link) && 'text-white'}`}>{subItem.title}</span></Link>)
                                            }
                                        </div>
                                    }
                                </Link>
                            ))
                        }
                        {/* <Link href={'/item-2'}>
                            <div className='flex items-center gap-4 p-2.5 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer h-11 rounded mb-1 lg:mb-2 text-neutral-800' >Item 2</div>
                        </Link>
                        <div className='flex items-center gap-4 p-2.5 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer h-11 rounded mb-1 lg:mb-2 text-neutral-800'>item 3</div> */}
                    </div>
                </div>
            </div>
            <div className='border-t border-b-slate-200 py-2'>
                <div className='flex flex-col text-[11px] items-center gap-4 p-2.5 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer h-11 rounded mb-1 lg:mb-2 text-neutral-800'>Account</div>
                <div className='flex flex-col text-[11px] items-center gap-4 p-2.5 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer h-11 rounded mb-1 lg:mb-2 text-neutral-800'>Settings</div>

            </div>
        </aside>
    )
}

export default Sidebar