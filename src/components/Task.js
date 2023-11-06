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
import { BsFillEnvelopePaperHeartFill } from 'react-icons/bs'
import CopyToClipboard from 'react-copy-to-clipboard'

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
            await axios.post(`${BASE_URL}/lvl1`, { _id: localStorage.getItem('uid') }).then(responce => {
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
                            <BiCopy className='text-[#4f999b]' />
                        </CopyToClipboard>


                    </div>

                    <div className="border border-[#424242] my-4 bg-[#052e32] text-center text-[#96afb3] rounded-lg py-3">

                        <p>{`${origin}/signup?invitation_code=${userDetails?.user_invite}`}</p>

                    </div>


                    <CopyToClipboard text={`${origin}/signup?invitation_code=${userDetails?.user_invite}`} onCopy={() => toaster('copy succeded')}>
                        <button className='btnbox block h-[13vw] mx-auto bg-[#13d2e4] rounded-lg text-[#074762] font-bold'>Copy Link</button>
                    </CopyToClipboard>


                </div>

            </div>

        </>
    )
}

export default Task