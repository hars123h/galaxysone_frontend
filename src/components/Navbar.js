import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { PiNotebookBold, PiPlanet } from 'react-icons/pi'
import { RiShieldUserLine } from 'react-icons/ri'
import { FaBars, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import iNav from '../images/invest.png'
import { BiSolidPlanet } from 'react-icons/bi'
import { MdSatelliteAlt } from "react-icons/md";
import { TbHeadset, TbMoneybag, TbSatellite } from 'react-icons/tb'
import { IoDiamond, IoDiamondOutline } from 'react-icons/io5'
import { BsEmojiSmile, BsFillEmojiSmileFill } from 'react-icons/bs'
import navlogo from '../images/galaxysone/navLogo.png'





const Navbar = () => {

    const pathname = window.location.pathname

    const [head, setHead] = useState('Home')

    useEffect(() => {

        switch (pathname) {
            case '/home':
                setHead('Head')
                return
            case '/equipment':
                setHead('Equipment')
                return
            case '/team':
                setHead('Team')
                return
            case '/award':
                setHead('Award')
                return
            case '/me':
                setHead('Me')
                return
            default:
                return null
        }



    }, [])




    return (
        <>

            <div className="fixed top-0 max-w-[800px] left-[10px] right-[10px] mx-auto z-[999] mt-5 bg-transparent">

                <div className="flex justify-between">

                    <div className="flex space-x-4 items-center">
                        <img src={navlogo} alt="" className='w-10 h-10 border border-white rounded-md' />
                        <h1 className='text-white'>{head}</h1>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <TbHeadset className='text-white' size={20} />
                        <FaBars className='text-[#00eefe]' size={20} />

                    </div>

                </div>

            </div>

            <div className='max-w-[800px] fixed bottom-5 left-[10px] right-[10px] mx-auto z-[999] '>
                <div className="mx-auto bg-black shadow-[0_-3px_30px_1px_rgba(0,40,14,0.3)] backdrop-blur-[5px] rounded-xl ">
                    <ul className='flex items-center text-white py-3 text-sm'>

                        <Link to={`/home`} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/home' ?
                                <BiSolidPlanet size={28} className='text-[#00eefe]' /> :
                                <PiPlanet size={28} />
                            }
                            <p className={``}>Home</p>
                        </Link>

                        <Link to={`/equipment`} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/equipment' ?
                                <MdSatelliteAlt size={28} className='text-[#00eefe]' /> :
                                <TbSatellite size={28} />
                            }
                            <p className={``}>Equipment</p>
                        </Link>

                        <Link to={`/team`} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/team' ?
                                <IoDiamond size={28} className='text-[#00eefe]' /> :
                                <IoDiamondOutline size={28} />
                            }
                            <p className={``}>Team</p>
                        </Link>

                        <Link to={`/award`} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/award' ?
                                <TbMoneybag size={28} className='text-[#00eefe]' /> :
                                <TbMoneybag size={28} />
                            }
                            <p className={``}>Award</p>
                        </Link>

                        <Link to={`/me`} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/me' ?
                                <BsFillEmojiSmileFill size={28} className='text-[#00eefe]' /> :
                                <BsEmojiSmile size={28} />
                            }
                            <p className={``}>Me</p>
                        </Link>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar