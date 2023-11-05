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
import herobg from '../images/galaxysone/heropage.jpg'
import { AiFillWallet } from 'react-icons/ai'
import { IoWallet } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import ProductCard from './ProductCard'
import g1 from '../images/galaxysone/g1.png'
import g2 from '../images/galaxysone/g2.png'
import g3 from '../images/galaxysone/g3.png'
import g4 from '../images/galaxysone/g4.png'
import g5 from '../images/galaxysone/g5.png'
import g6 from '../images/galaxysone/g6.png'
import g7 from '../images/galaxysone/g7.png'
import g8 from '../images/galaxysone/g8.png'
import g9 from '../images/galaxysone/g9.png'



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
            {/* popup */}
            {/* <Popup /> */}

            {/* <div className="mx-auto mb-28 bgimg overflow-hidden">
                <div className="w-full mx-auto max-w-[800px]" >

                    <Link to={`/invite`}>
                        <div className='max-w-full min-h-[90px] mx-auto bg-[#ff6766] invite ' >

                            <div className="relative z-[1]">
                                <img src={inviteBg} alt="" className='w-full' />
                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </Link>

                    <div className="relative -top-[60px] mx-auto z-[1]">

                        <div className="m-[10px]">

                            <div className="pt-5 px-5 pb-[10px] bg-white shadow-[0px_-20px_30px_20px_rgba(0,40,14,0.1)] rounded-[7px_7px_0_0] ">

                                <Link to={`/vip`} className='flex items-end top-[10px] right-5 absolute'>
                                    <RiVipLine size={40} className='text-[#b3bdc4]' />
                                    <img src={vipimg} alt="" className='w-6' />
                                </Link>

                                <ul className='flex flex-wrap items-end'>

                                    <li className='w-full mb-5'>
                                        <p className='text-[26px] font-bold text-[#4b4d5e] leading-none' >
                                            <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                            {userDetails?.balance.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Balance</span>
                                    </li>
                                    <li className='flex-1'>
                                        <p className='text-lg font-bold text-[#4b4d5e] leading-none' >
                                            <span className='mr-1 px-[2px] text-base leading-none border-0 font-light align-top'>₹</span>
                                            {userDetails?.earning?.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total Earnings</span>
                                    </li>
                                    <li className='flex-1'>
                                        <p className='text-lg font-bold text-[#4b4d5e] leading-none' >
                                            {userDetails?.plans_purchased?.length}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Order</span>
                                    </li>
                                </ul>

                            </div>

                            <div className="flex flex-wrap items-stretch">

                                <div className="h-5">
                                    <img src={splitNotchL} alt="" className='h-full' />
                                </div>

                                <div className="flex flex-wrap flex-1 items-center bg-white before:contents-[' '] before:block before:w-full before:h-[10px] before:border-0 before:border-b-[5px] before:border-dotted before:border-[#eee] "></div>

                                <div className="h-5">
                                    <img src={splitNotchR} alt="" className='h-full' />
                                </div>

                            </div>

                            <div className="bg-white flex flex-wrap items-center justify-end w-full px-5 pb-5 pt-[10px] rounded-bl-[7px] rounded-br-[7px]">
                                <Link to={`/invest`} className=' flex-1 text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base  border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative flex justify-center items-center font-bold w-full '>
                                    <BiCoin size={30} className='font-light' /> Start managing money
                                </Link>
                            </div>

                        </div>

                        <div className="m-[10px]">
                            <div className="min-h-[150px] py-[10px] bg-white rounded-[7px]">
                                <div className='flex flex-wrap items-start'>


                                    <Link to={`/vip`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={vip} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>VIP</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/message`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={message} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Messages</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <a href='https://wa.me/+12513616917' target="_blank" rel="noopener noreferrer" className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={whatsapp} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Service Online</p>
                                            </div>
                                        </div>
                                    </a>

                                    <div onClick={() => setTelegram(true)} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={telegram} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Office Center</p>
                                            </div>
                                        </div>
                                    </div>

                                    {telegramopen &&
                                        <div className={`top-0 right-0 bottom-0 left-0 p-5 fixed z-[999] justify-center items-center flex`}>
                                            <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>


                                            <div className="max-w-[600px] w-full -top-[20%] relative mx-auto p-5 bg-white backdrop-blur-sm shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] z-[2] rounded-[15px]">
                                                <div onClick={() => setTelegram(false)} className="w-[45px] h-[45px] top-0 right-0 font-bold absolute bg-[rgba(255,87,40,0.9)] z-50 rounded-bl-[30px] flex justify-center items-center ">
                                                    <RxCross1 size={16} className='font-bold text-white' />
                                                </div>
                                                <div className="">
                                                    <div className="w-full my-[10px]">
                                                        <h3 className='text-2xl font-bold'>Official telegram channel</h3>
                                                        <p className='text-sm text-[#818393] leading-5'>Join the official telegram channel <br />to get the latest daily rewards</p>
                                                    </div>
                                                </div>

                                                <Link to={'https://telegram.me/kraftofficial1'} className="flex justify-center items-end">
                                                    <div>
                                                        <img src={telegram} alt="telegram" className='w-12 m-1' />
                                                        <p className='text-[#818393] text-base'>Telegram</p>
                                                    </div>

                                                </Link>

                                            </div>
                                        </div>
                                    }

                                    <Link to={`/task`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={task} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Task</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/invite`} className='max-w-[120px] w-1/4 p-[10px] text-center'>
                                        <div className="">
                                            <div className="mb-1 flex flex-wrap items-center justify-center relative">
                                                <img src={invite} alt="" className='w-3/5 max-w-[45px] min-w-[35px]' />
                                            </div>
                                            <div className="">
                                                <p className='text-[#4b4d5e] text-sm font-bold'>Share</p>
                                            </div>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>

                        <div className="my-[10px] mx-[5px]">

                            <div className="flex">

                                <div className="flex-1 ">

                                    <Card
                                        img={img201}
                                        title={'gift'}
                                        content={'A small gift for all VIP usersCycle: one day Income: 300 quick pick up Stop time: 21:30'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />

                                    <Card
                                        img={img201}
                                        title={'Link change'}
                                        content={'dear user Our promotion link will be changed frequently, it is recommended that you use the APP to log in If you need the latest link, please click to copy the latest link in the sharing interface'}
                                        timestamp={'2023-08-22 13:07:04'}
                                    />

                                    <Card
                                        img={img301}
                                        title={'A small gift for all VIP users'}
                                        content={'Cycle: one day Income: 300 quick pick up Stop time: 14:00'}
                                        timestamp={'2023-08-20 13:18:04'}
                                    />
                                </div>

                                <div className="flex-1 ">

                                    <Card
                                        img={img301}
                                        title={'Welfare release'}
                                        content={'Today&#39s system has been updated, it will be more stable and secure, so 2 super event products will be sent to users again'}
                                        timestamp={'2023-08-22 20:08:42'}
                                    />

                                    <Card
                                        img={img201}
                                        title={'Quickly join'}
                                        content={'Quickly join Kraft and become a VIP🤑🤑🤑 We will send a lot of gifts to our trusted and loyal users in the days to come.'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />

                                    <Card
                                        img={img301}
                                        title={'Call for prizes'}
                                        content={'announcement We need more withdrawal screenshots for display Let more users see that there will be no problem with withdrawing money in Kraft Please send the screenshot of your withdrawal to the bank card today to our customer service, if your screenshot is true and qualified, then we will reward you 50Rs The activity ends at 18:00'}
                                        timestamp={'2023-08-24 20:22:04'}
                                    />
                                </div>

                            </div>

                            <Link to={`/article`} className="m-5 flex flex-wrap justify-center items-center w-full">

                                <div className="font-bold text-[rgba(52,86,255,0.9)] text-base flex items-center">
                                    MORE <HiOutlineChevronDoubleRight size={18} />
                                </div>

                            </Link>

                        </div>

                    </div>

                    <Tradmark />

                </div>
            </div> */}


            {/* footer */}

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
                        <Link to={'/widthdrawl'} className="border-2 z-20 border-[#0e88fb] rounded-md p-2 h-fit flex items-center space-x-2">
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
                            plan_cycle={60}
                            plan_amount={800}
                            plan_daily_earning={40}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g2}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={2000}
                            plan_daily_earning={105}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g3}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={3000}
                            plan_daily_earning={170}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g4}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={5000}
                            plan_daily_earning={300}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g5}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={15000}
                            plan_daily_earning={1000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g6}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={25000}
                            plan_daily_earning={22000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g7}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={40000}
                            plan_daily_earning={3000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g8}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={80000}
                            plan_daily_earning={5000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g2}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={150000}
                            plan_daily_earning={20000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g9}
                            product_type={0}
                            plan_cycle={60}
                            plan_amount={200000}
                            plan_daily_earning={30000}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g1}
                            product_type={0}
                            plan_cycle={60}
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