import React, { useContext, useEffect, useState } from 'react'
import BASE_URL from '../api_url';
import { Link, useNavigate } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import axios from 'axios'
import { ContextApi } from '../App';

const WidthdrawlRecords = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user } = useContext(ContextApi);

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

    const nameMapper = {
        confirmed: 'success',
        declined: 'declined',
        pending: 'pending'
    }

    const [withdrawal_list, setWithdrawal_list] = useState([]);


    useEffect(() => {
        const getWithdrawals_list = async () => {
            const querySnapshot = await axios.post(`${BASE_URL}/get_user_withdrawals`, { user_id: localStorage.getItem('uid') })
                .then(res => res.data);
            setWithdrawal_list(querySnapshot);
        }
        getWithdrawals_list();
    }, []);

    // console.log(withdrawal_list);

    return (
        <>
            <div className="bg-[#e0f2f1]  after:contents-[' '] after:fixed h-screen ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/account'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Widthdrawl Records</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1]">
                        <div className="m-[5px]">
                            <ul>

                                {withdrawal_list?.map((data, index) =>

                                    <li key={index} className='my-[5px] p-[10px] bg-[rgba(255,255,255,0.6)] rounded-[7px] flex flex-col items-stretch'>

                                        {/* <div className="flex-1">
                                            <p className='text-[#666]'>{nameMapper[String(data.status)]}</p>
                                            <span className='text-sm text-[#999]'>{new Date(data.time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
                                        </div>

                                        <div className="">
                                            <p>
                                                <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                {new Intl.NumberFormat().format(data.withdrawalAmount)}
                                            </p>
                                        </div> */}

                                        <div className="flex justify-between items-center">
                                            <p>Result</p>
                                            {nameMapper[String(data.status)] === 'success' ?
                                                <p className='text-green-600'>Payment Succeeded</p>
                                                :
                                                <p className='text-red-700'>Payment Pending</p>
                                            }
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className='text-[#666]'>Amount received</p>
                                            <p className='text-[#666]'>
                                                <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                {new Intl.NumberFormat().format(data.withdrawalAmount * 0.9)}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className='text-[#666]'>Tax</p>
                                            <p className='text-[#666]'>
                                                <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                {new Intl.NumberFormat().format(data.withdrawalAmount * 0.1)}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className='text-[#666]'>Submit Time</p>
                                            <p className='text-[#666]'>{new Date(data.time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</p>
                                        </div>

                                    </li>

                                )
                                }

                            </ul>

                            <div className="h-[50px] relative overflow-hidden text-xs translate-z-0  ">
                                <div className="h-[50px] leading-[50px] text-center text-[#cfd0d9]">No more data</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WidthdrawlRecords