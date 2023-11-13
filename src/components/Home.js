import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import inviteBg from '../images/invitebg.png'
import { RiVipLine } from 'react-icons/ri'
import splitNotchL from '../images/notch_L.svg'
import splitNotchR from '../images/notch_R.svg'
import { BiCoin } from 'react-icons/bi'
import vip from '../images/vip.svg'
import message from '../images/message.svg'
import telegram from '../images/telegram.svg'
import whatsapp from '../images/whatsapp.svg'
import task from '../images/05.svg'
import invite from '../images/06.svg'
import img201 from '../images/201.png'
import img301 from '../images/301.png'
import Card from './Card'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Tradmark from './Tradmark'
import { ContextApi } from '../App'
import { RxCross1 } from 'react-icons/rx'
import herobg from '../images/galaxysone/home bg.jpg'
import { AiFillWallet } from 'react-icons/ai'
import { IoWallet } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import ProductCard from './ProductCard'
import g1 from '../images/galaxysone/g1.jpg'
import g2 from '../images/galaxysone/g2.jpg'
import g3 from '../images/galaxysone/g3.jpg'
import g4 from '../images/galaxysone/g4.jpg'
import g5 from '../images/galaxysone/g5.jpg'
import g6 from '../images/galaxysone/g6.jpg'
import g7 from '../images/galaxysone/g1.jpg'
import g8 from '../images/galaxysone/g2.jpg'
import g9 from '../images/galaxysone/g3.jpg'



const Home = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [wpwd, setWpwd] = useState(localStorage.getItem('wpwd'))
    const [telegramopen, setTelegram] = useState(false)

    // console.log(userDetails);

    // useEffect(() => {
    //     // console.log(wpwd);
    //     if (wpwd === 'undefined') {
    //         toaster('Set Trade Password')
    //         setTimeout(() => {
    //             navigate('/widthdrawlpassword')
    //         }, 3000);
    //     }
    // }, [])

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }

    }, [])

    return (
        <>
            <Navbar />

            <div className="text-white text-[4vw] px-3 mb-36">

                <img src={herobg} alt="" className='mt-5 rounded-md' />

                <div className=" border-2 border-solid border-white my-3 navbg p-3 rounded-md  flex justify-between">

                    <div className="">
                        <p className='text-white'>My Balance</p>
                        <h1 className='text-[yellow] text-lg'>
                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                            {userDetails?.balance}
                        </h1>
                    </div>

                    <div className="flex space-x-3 items-center ">
                        <Link to={'/deposit'} className="border-2 border-white rounded-md p-2 h-fit flex items-center space-x-2">
                            <p className=''>Deposit </p>
                            <AiFillWallet size={20} className='text-[#0e88fb]' />
                        </Link>
                        <Link to={'/widthdrawl'} className="border-2 z-20 border-white rounded-md p-2 h-fit flex items-center space-x-2">
                            <p className=''>Withdraw </p>
                            <IoWallet size={20} className='text-[#0e88fb]' />
                        </Link>
                    </div>

                </div>

                <div className="">

                    <div className="flex items-center space-x-3">
                        <FaListAlt className='text-[#0e88fb]' />
                        <h1>Equipment List</h1>
                    </div>

                    <div className="mt-5">

                        <ProductCard
                            product_image={g1}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={800}
                            plan_daily_earning={40}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g2}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={2000}
                            plan_daily_earning={105}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g3}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={3000}
                            plan_daily_earning={170}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g4}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={5000}
                            plan_daily_earning={300}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g5}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={15000}
                            plan_daily_earning={1000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g6}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={25000}
                            plan_daily_earning={22000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g7}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={40000}
                            plan_daily_earning={3000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g8}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={80000}
                            plan_daily_earning={5000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g2}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={150000}
                            plan_daily_earning={20000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g9}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={200000}
                            plan_daily_earning={30000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g1}
                            product_type={0}
                            plan_cycle={45}
                            plan_amount={300000}
                            plan_daily_earning={50000}
                        // plan_name={'Communication Satellite'}
                        />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Home