import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import applogo from '../images/appLogo.png'
import telegram from '../images/telegram.svg'
import { toast } from 'react-toastify'
import kraft from '../images/app-release.apk'
import navlogo from '../images/galaxysone/logo.png'
import calender from '../images/galaxysone/calender.png'
import { FaGift } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Popup = () => {

    const [popOpen, setPopOpen] = useState('block')
    // const [download, setDownload] = useState(true)


    return (
        <>
            <div className={`top-0 right-0 bottom-0 left-0 p-5 fixed z-[999] justify-center items-center h-screen max-h-screen flex ${popOpen} `}>
                <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>

                <div className="p-5 max-w-[600px] w-full -top-5 relative mx-auto bg-[#ff5353] text-white border border-white backdrop-blur-sm shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[15px]">

                    {/* <div  className="w-[45px] h-[45px] top-0 right-0 font-bold absolute bg-[rgba(255,87,40,0.9)] z-50 rounded-bl-[30px] flex justify-center items-center ">
                        <RxCross1 size={16} className='font-bold text-white' />
                    </div> */}

                    <div className="flex space-x-3 items-center">

                        <img src={navlogo} alt="" className='w-32' />
                        {/* <h1 className='text-xl font-bold'>Hamburg Sud</h1> */}

                    </div>

                    <hr className='my-5' />

                    <h1 className='text-lg font-bold mb-5 capitalize'>WELCOME</h1>

                    <div className="bg-[#ff5353] border border-white px-2 py-5 rounded-lg text-sm">

                            {/* <h2 className='text-white font-bold'><span className='inline-block'><FaGift /></span> Most Profitable Long Term App Name in India. </h2>

                            <p className='text-[#787b8a] py-5'><img src={calender} alt="" className='w-5 inline-block' /> Launch date: November 19, 2023</p> */}

                            <div className="">
                                {/* <p>
                                    An Hamburg Sud, or timeless, person or thing.
                                    Webster's New World. Something that remains perennially fresh, interesting, or well liked.
                                    American Heritage. (colloquial) A news story that can be published or broadcast at any time.
                                </p> */}
                                <br />
                                <p>Hamburg Sud company divides the customer team into three levels. Level 1 can get a 10% reward of the recharge amount, level 2 can get a 3% reward of the recharge amount, and level 3 can get a 1% reward of the recharge amount.</p>
                                <br />
                                <p>Recommend a first-level user to get 20 registration reward of 120 rupees.</p>
                            </div>


                    </div>

                    <a href='https://telegram.me/Hamburg Sudofficial656' className='text-white mt-5 bg-[#13d2e4] text-sm flex items-center justify-center w-full py-2 rounded-md'><FaTelegramPlane className='inline-block mr-1' />Service</a>

                    <div onClick={() => setPopOpen('hidden')} className="absolute -bottom-10 flex justify-center items-center w-full ">
                        <div className="bg-[#848484] w-7 h-7 flex justify-center items-center rounded-full mx-auto text-white">X</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Popup