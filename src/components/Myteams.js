import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import CopyToClipboard from 'react-copy-to-clipboard';
import Navbar from './Navbar';
import { LiaAngleRightSolid } from 'react-icons/lia';
import teamImg from "../images/galaxysone/teamimg.jpg";
import one from "../images/galaxysone/1.png";
import two from "../images/galaxysone/2.png";
import three from "../images/galaxysone/3.png";
import { BiCoinStack } from 'react-icons/bi';

const Myteams = () => {

    const { userDetails, setUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [lvl1, setLvl1] = useState([])
    const [lvl2, setLvl2] = useState([])
    const [lvl3, setLvl3] = useState([])
    const [toogle, setToogle] = useState('lvl1')
    var teamInvest = 0;

    const getUserDetails = async () => {
        // const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
        await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl1(data.level1);

        });
        await axios.post(`${BASE_URL}/lvl2`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl2(data.level2);

        });
        await axios.post(`${BASE_URL}/lvl3`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl3(data.level3);

        });

        // setUserDetails(details);
    }

    useEffect(() => {
        getUserDetails();

    }, [])

    const handelTooglle = (name) => {
        setToogle(name)
    }

    // console.log(typeof userDetails);

    useEffect(() => {
        lvl1.map(data => {
            data.plans_purchased.map(e => {
                teamInvest += e.plan_amount;
            })
        })

        lvl2.map(data => {
            data.plans_purchased.map(e => {
                teamInvest += e.plan_amount;
            })
        })

        lvl3.map(data => {
            data.plans_purchased.map(e => {
                teamInvest += e.plan_amount;
            })
        })
    }, [])


    return (
        <>
            <Navbar />

            <div className="text-white px-3 mt-8 mb-36 bg-[#ff5353]">

                <div className="flex p-5 justify-between items-start bg-white border border-[#424242] rounded-lg text-black">

                    <div className="">
                        <p className=''>Team Invest</p>
                        <p className='text-[#00eefe]'>₹{teamInvest}</p>
                        <Link to={'/award'} className='flex items-center mt-3 text-[red]'>To invite <LiaAngleRightSolid /></Link>
                    </div>

                    <div className="">
                        <p className=''>Team Size</p>
                        <p className=''>{userDetails?.directMember?.length + userDetails?.indirectMember?.length + userDetails?.in_indirectMember?.length}</p>
                    </div>

                    <img src={teamImg} alt="" className='w-20' />

                </div>

                <h1 className='text-center text-lg font-bold my-5'>My team</h1>

                <div className="p-5 border my-3 bg-black rounded-lg border-[#424242]">

                    <div className=" flex items-center justify-between">
                        <h1 className='flex items-center'>Level 1 Team <LiaAngleRightSolid className='m-2 text-[#00eefe]' /></h1>

                        {/* <div className="text-white w-10 h-10 rounded-full bg-[gold] flex justify-center items-center border border-white"><BiCoinStack size={28} /></div> */}
                        <img src={one} alt="" />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <p className='text-[#c6ced9] text-xs'>Commission rate: <span className='ml-1 text-[#00eefe]'>10%</span></p>
                        {/* <p className='text-[#c6ced9] text-xs'>Rebate rate: <span className='ml-1 text-[#00eefe]'>20%</span></p> */}
                    </div>

                    <div className="bg-[#005359] py-1 mt-2 flex items-center justify-around border border-[#424242]">

                        <div className="text-center">
                            <p className='text-white'>{userDetails?.directMember?.length}</p>
                            <p className='text-[#c6ced9] text-sm'>Team size</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.directRecharge * 0.05)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Commission</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.directRecharge)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Team Recharge</p>
                        </div>

                    </div>


                </div>

                <div className="p-5 border my-3 bg-black rounded-lg border-[#424242]">

                    <div className="flex items-center justify-between">
                        <h1 className='flex items-center'>Level 2 Team <LiaAngleRightSolid className='m-2 text-[#00eefe]' /></h1>
                        <img src={two} alt="" />
                        {/* <div className="text-white w-10 h-10 rounded-full bg-[silver] flex justify-center items-center border border-white"><BiCoinStack size={28} /></div> */}
                    </div>


                    <div className="flex justify-between items-center mt-3">
                        <p className='text-[#c6ced9] text-xs'>Commission rate: <span className='ml-1 text-[#00eefe]'>3%</span></p>
                        {/* <p className='text-[#c6ced9] text-xs'>Rebate rate: <span className='ml-1 text-[#00eefe]'>20%</span></p> */}
                    </div>

                    <div className="bg-[#005359] py-1 mt-2 flex items-center justify-around border border-[#424242]">

                        <div className="text-center">
                            <p className='text-white'>{userDetails?.indirectMember?.length}</p>
                            <p className='text-[#c6ced9] text-sm'>Team size</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.indirectRecharge * 0.02)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Commission</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.indirectRecharge)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Team Recharge</p>
                        </div>

                    </div>


                </div>

                <div className="p-5 border my-3 bg-black rounded-lg border-[#424242]">
                    <div className="flex items-center justify-between">
                        <h1 className='flex items-center'>Level 3 Team <LiaAngleRightSolid className='m-2 text-[#00eefe]' /></h1>
                        <img src={three} alt="" />
                        {/* <div className="text-white w-10 h-10 rounded-full bg-[#CD7F32] flex justify-center items-center border border-white"><BiCoinStack size={28} /></div> */}
                    </div>

                    <div className="flex justify-between items-center mt-3">
                        <p className='text-[#c6ced9] text-xs'>Commission rate: <span className='ml-1 text-[#00eefe]'>1%</span></p>
                        {/* <p className='text-[#c6ced9] text-xs'>Rebate rate: <span className='ml-1 text-[#00eefe]'>20%</span></p> */}
                    </div>

                    <div className="bg-[#005359] py-1 mt-2 flex items-center justify-around border border-[#424242]">

                        <div className="text-center">
                            <p className='text-white'>{userDetails?.in_indirectMember?.length}</p>
                            <p className='text-[#c6ced9] text-sm'>Team size</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.in_indirectRecharge * 0.01)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Commission</p>
                        </div>

                        <div className="text-center">
                            <p className='text-white'>₹{(userDetails?.in_indirectRecharge)?.toFixed(2)}</p>
                            <p className='text-[#c6ced9] text-sm'>Team Recharge</p>
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Myteams