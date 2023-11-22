import React, { useContext, useEffect, useState } from 'react'
import taskBG from '../images/04.png'
import { Link } from 'react-router-dom'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { TbTicket } from 'react-icons/tb'
import { BiCopy, BiSolidGift } from 'react-icons/bi'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'
import Navbar from './Navbar'
import { BsFillEnvelopePaperHeartFill, BsFlagFill } from 'react-icons/bs'
import CopyToClipboard from 'react-copy-to-clipboard'
import { PiCopyBold } from 'react-icons/pi'
import giftimg from '../images/galaxysone/giftimg.png'
import planateglob from '../images/galaxysone/planateglob.png'


const Task = () => {

    const date = new Date();

    const { userDetails, setUserDetails, getUserDetails, user, toaster, vipimg } = useContext(ContextApi);

    const [level_1, setLevel_1] = useState(0)
    const [signinrewardactive, setSigninrewardactive] = useState(new Date(userDetails?.last_signin_reward) < date)

    const handelSignin = async () => {
        await axios.post(`${BASE_URL}/signinReward`, { _id: localStorage.getItem('uid') }).then(responce => {
            // console.log(responce);
            toaster(responce.data.message)
            setSigninrewardactive(new Date(responce.data.last_signin_reward) < date)
        }).catch(error => {
            toaster("Something went wrong")
        })
    }

    useEffect(() => {
        const level1 = async () => {
            await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(responce => {
                // console.log(responce);
                // toaster(responce.data.message)
                setLevel_1(responce.data.level1.filter(element => element.vipLevel > 0).length)

            }).catch(error => {
                console.log(error);
                toaster("Something went wrong")
            })
        }
        level1()
    }, [])

    // const directMemberVip = level_1.filter(element => element.vipLevel > 0)

    // console.log(directMemberVip.length);
    // console.log(level_1);

    // useEffect(() => {

    const activation = async () => {
        await axios.post(`${BASE_URL}/task_reward`, { _id: localStorage.getItem('uid'), count: level_1 }).then(responce => {
            // console.log(responce);
            toaster(responce.data.message)

        }).catch(error => {
            console.log(error);
            toaster("Something went wrong")
        })

    }

    //     activation()

    // }, [level_1, setLevel_1])

    // console.log(userDetails);



    // console.log(new Date(userDetails?.last_signin_reward) < date);


    const origin = window.location.origin

    console.log(origin);




    return (
        <>

            <Navbar />

            <div className="px-3 mt-10 mb-36 text-white ">

                <div className="flex items-center space-x-3 ">

                    <div className="flex items-center justify-center border border-white bg-[rgb(10,170,183)] rounded-full h-10 w-10">
                        <BsFillEnvelopePaperHeartFill />
                    </div>

                    <h1 className='text-sm'>
                        Invite friends to get rich rewards
                        <p className='text-[#c6ced9] text-xs'>Share my invitation link</p>
                    </h1>

                </div>

                <div className="border border-[#424242] my-5"></div>

                <div className="border border-[#424242] my-5 bg-[#06454c] rounded-lg p-5">

                    <h1 className='text-center'>My invitation code</h1>

                    <div className="border border-[#ffffff3d] my-3"></div>

                    <div className="flex items-center justify-around">

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[0]}</span>
                        </div>

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[1]}</span>
                        </div>

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[2]}</span>
                        </div>

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[3]}</span>
                        </div>

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[4]}</span>
                        </div>

                        <div className="bg-[#021b1d] border border-[#424242] flex justify-center items-center w-8 h-8 rounded-lg text-[#4f999b]">
                            <span>{userDetails?.user_invite[5]}</span>
                        </div>

                        <CopyToClipboard text={userDetails?.user_invite} onCopy={() => toaster('copied succeded')}>
                            <PiCopyBold className='text-[#4f999b]' />
                        </CopyToClipboard>


                    </div>

                    <div className="border border-[#424242] my-4 bg-[#052e32] text-center text-[#96afb3] rounded-lg py-3">

                        <p>{`${origin}/signup?invitation_code=${userDetails?.user_invite}`}</p>

                    </div>


                    <CopyToClipboard text={`${origin}/signup?invitation_code=${userDetails?.user_invite}`} onCopy={() => toaster('copy succeded')}>
                        <button className='btnbox block h-[13vw] mx-auto bg-[#13d2e4] rounded-lg text-[#074762] font-bold'>Copy Link</button>
                    </CopyToClipboard>


                </div>

                <h1 className='text-center my-3'>Invite registration rewards</h1>

                <div className="border border-white rounded-lg bg-[#003235] p-5">

                    <div className="flex items-end justify-between">

                        <img src={giftimg} alt="" className='w-[15vw]' />

                        <p className='text-sm'>Invite friends to register and get
                            <span className='text-[yellow]'> ₹50 </span>
                            for the first time
                            <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 1 ? '1' : '0'}</span>/1</p>
                        </p>

                        {userDetails?.direactMember === 1 && userDetails.memcount !== 1 ?
                            <button onClick={activation} className='bg-[yellow] text-black text-xs px-3 py-1 rounded-full font-bold'>Finish</button>
                            :
                            <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Finish</button>
                        }

                    </div>

                    <div className="border border-[#ffffff3d] my-3"></div>

                    <div className="">

                        <p>Get<span className='text-[yellow]'> ₹6 </span>for every person you invite to register</p>

                        <div className="flex items-end justify-between mt-1">

                            <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 20 ? '20' : userDetails?.direactMember}</span>/20</p>

                            {userDetails?.direactMember === 20 && userDetails.memcount !== 20 ?
                                <button onClick={activation} className='bg-[yellow] text-black text-xs px-3 py-1 rounded-full font-bold'>Finish</button>
                                :
                                <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Finish</button>
                            }

                        </div>

                    </div>

                </div>

                <h1 className='text-center my-3'>Invite investment rewards</h1>

                <div className="border border-white rounded-lg bg-[#003235] p-5">

                    <div className="flex items-center justify-between">
                        <h1 className=' my-3'>
                            Invitation mission rewards
                            <p className='text-xs text-[#c6ced9]'>Invite valid users to invest and get <span className='text-[#13d2e4]'>₹100</span></p>
                        </h1>

                        {/* <img src={planateglob} alt="" className='w-[15vw]' /> */}
                    </div>

                    <div className="bg-[#000a09] flex items-center justify-around py-2 mb-5 text-center">

                        <div className="">
                            <p className='text-[yellow]'>₹{(userDetails?.vipMemcount * 100)}</p>
                            <p>Received</p>
                        </div>

                        <div className="">
                            <p className='text-[yellow]'>₹{((level_1 - userDetails?.vipMemcount) * 100)}</p>
                            <p>Active</p>
                        </div>

                    </div>

                    <div className="flex justify-between items-center">

                        <p className='text-sm'>Number of people <span className='text-[yellow]'>{level_1}</span></p>

                        {userDetails?.vipMemcount < level_1 ?

                            <button onClick={activation} className='bg-[yelloe] text-black text-xs px-3 py-1 rounded-full font-bold'>Receive</button>
                            :
                            <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>

                        }

                    </div>

                </div>

                <div className="mt-5">

                    <div className="flex space-x-3 my-5">
                        <div className="px-2 rounded-lg bg-white flex justify-center items-center">
                            <BsFlagFill className='text-[orange]' size={25} />
                        </div>
                        <div className="flex-1 text-sm">
                            <p className='text-[#c6ced9]'>Invite 20 Level 1 friends to recharge and invest with a bonus of <span className='text-[yellow]'>₹2000</span></p>

                            <div className="flex justify-between items-end">
                                <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 20 ? '20' : userDetails?.direactMember}</span>/20</p>

                                {userDetails?.vipMemcount !== 20 && level_1 === 20 ?
                                    <button onClick={activation} className='bg-[yelloe] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                    :
                                    <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 my-5">
                        <div className="px-2 rounded-lg bg-white flex justify-center items-center">
                            <BsFlagFill className='text-[blue]' size={25} />
                        </div>
                        <div className="flex-1 text-sm">
                            <p className='text-[#c6ced9]'>Invite 50 Level 1 friends to recharge and invest with a bonus of <span className='text-[yellow]'>₹10000</span></p>

                            <div className="flex justify-between items-end">
                                <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 50 ? '50' : userDetails?.direactMember}</span>/50</p>
                                {userDetails?.vipMemcount !== 50 && level_1 === 50 ?
                                    <button onClick={activation} className='bg-[yelloe] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                    :
                                    <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 my-5">
                        <div className="px-2 rounded-lg bg-white flex justify-center items-center">
                            <BsFlagFill className='text-[green]' size={25} />
                        </div>
                        <div className="flex-1 text-sm">
                            <p className='text-[#c6ced9]'>Invite 100 Level 1 friends to recharge and invest with a bonus of <span className='text-[yellow]'>₹50000</span></p>

                            <div className="flex justify-between items-end">
                                <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 100 ? '100' : userDetails?.direactMember}</span>/100</p>
                                {userDetails?.vipMemcount !== 100 && level_1 === 100 ?
                                    <button onClick={activation} className='bg-[yelloe] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                    :
                                    <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-3 my-5">
                        <div className="px-2 rounded-lg bg-white flex justify-center items-center">
                            <BsFlagFill className='text-[purple]' size={25} />
                        </div>
                        <div className="flex-1 text-sm">
                            <p className='text-[#c6ced9]'>Invite 300 Level 1 friends to recharge and invest with a bonus of <span className='text-[yellow]'>₹150000</span></p>

                            <div className="flex justify-between items-end">
                                <p>Invite people: <span className='text-[yellow]'> {userDetails?.direactMember > 300 ? '300' : userDetails?.direactMember}</span>/300</p>
                                {userDetails?.vipMemcount !== 300 && level_1 === 300 ?
                                    <button onClick={activation} className='bg-[yelloe] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                    :
                                    <button className='bg-[#767c81] text-black text-xs px-3 py-1 rounded-full font-bold'>Received</button>
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Task