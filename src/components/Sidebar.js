import React from 'react'
import { useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsFillCreditCard2FrontFill, BsFillPersonFill, BsHeadphones, BsRecordBtn } from 'react-icons/bs'
import { GoShieldCheck } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import { TbHelpSquare } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Sidebar = ({ setRight, right }) => {


    return (

        <>

            <div className={`sidebarBG h-screen fixed w-[80vw] top-0 -right-[80vw] z-[10000] transition-all duration-500 ${right} text-white `}>

                <div className="flex justify-end p-5">
                    <RxCross2 size={30} onClick={() => setRight('')} />
                </div>

                <div className="p-5">

                    <Link to={'/update'} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <BsFillCreditCard2FrontFill className='text-[#37668b] ' size={25} />

                        <p>My Account</p>

                    </Link>

                    <Link to={'/accountsecurity'} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <GoShieldCheck className='text-[#37668b] ' size={25} />

                        <p>Account Security</p>

                    </Link>

                    <Link to={''} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <BsRecordBtn className='text-[#37668b] ' size={25} />

                        <p>Billing Records</p>

                    </Link>

                    <Link to={''} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <TbHelpSquare className='text-[#37668b] ' size={25} />

                        <p>Help for newbies</p>

                    </Link>

                    <Link to={''} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <BsHeadphones className='text-[#37668b] ' size={25} />
                        <p>Customer Service</p>

                    </Link>

                    <Link to={''} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <BsFillPersonFill className='text-[#37668b] ' size={25} />
                        <p>About Us</p>

                    </Link>

                    <Link to={''} className="flex space-x-3 border-b-2 py-3 px-1 border-[#424242]">

                        <AiOutlineDownload className='text-[#37668b] ' size={25} />
                        <p>Download app</p>

                    </Link>

                </div>

            </div>

        </>
    )
}

export default Sidebar