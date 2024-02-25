import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@mdi/react';
import { MdOutlineAccountCircle, MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

const Dashboard = () => {
    return (
        <div className=' w-full'>

            <div className='topBar  bg-white border-b border-slate-200 shadow-sm flex items-center justify-between px-4 py-3   align-middle'>
                <span className='text-lg text-slate-700 font-medium'>Payroll Overview</span>
                <Button className='ml-auto'>Add New Employee</Button>
                <div className='flex gap-4 pl-6'>


                    <DropdownMenu>
                        <DropdownMenuTrigger><div className='bg-contain text-xl text-slate-900'><MdOutlineSettings /></div></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><div className='bg-contain text-xl text-slate-900'><MdOutlineNotifications /></div></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><div className='bg-contain text-xl text-slate-900 outline-none'><MdOutlineAccountCircle /></div></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </div>
            <div className='dashboardBody flex flex-col bg-slate-200 gap-4 px-4 py-4 h-auto'>
                <div className='dashboardHeader'>
                    <div className='grid grid-cols-4 gap-4 justify-between'>
                        <div className='flex bg-white flex-col gap-2 shadow-sm hover:shadow rounded-lg  px-4 py-2'>
                            <p className='border-b border-b-slate-300 pb-2'>Total Salary</p>
                            <span className='currency flex gap-2 items-center text-slate-900 text-2xl font-normal'>$<p>8283823</p></span>
                        </div>
                        <div className='flex bg-white flex-col gap-2 shadow-sm hover:shadow rounded-lg  px-4 py-2'>
                            <p className='border-b border-b-slate-300 pb-2'>Total Allowances</p>
                            <span className='currency flex gap-2 items-center text-slate-900 text-2xl font-normal'>$<p>8283823</p></span>
                        </div>
                        <div className='flex bg-white flex-col gap-2 shadow-sm hover:shadow rounded-lg  px-4 py-2'>
                            <p className='border-b border-b-slate-300 pb-2'>Total Deductions</p>
                            <span className='currency flex gap-2 items-center text-slate-900 text-2xl font-normal'>$<p>8283823</p></span>
                        </div>
                        <div className='flex bg-white flex-col gap-2 shadow-sm hover:shadow rounded-lg  px-4 py-2'>
                            <p className='border-b border-b-slate-300 pb-2'>Comapny Name</p>
                            <span className='currency flex gap-2 items-center text-slate-900 text-2xl font-normal'>$<p>8283823</p></span>

                        </div>

                    </div>
                </div>
                <div className='dashboardBody grid grid-cols-2  justify-between gap-4'>
                    <div className='shadow bg-white rounded border border-slate-200 px-4 py-2 grid  '>Something</div>
                    <div className='shadow bg-white rounded border border-slate-200 px-4 py-2 grid '>Something</div>
                </div>
                <div className='dashboardFooter bg-white rounded-lg p-2 overflow-y-auto max-h-[440px]'>
                    <p>Employees list</p>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </div>

    )
}

export default Dashboard