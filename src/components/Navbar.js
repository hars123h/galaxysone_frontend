import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { PiNotebookBold, PiPlanet } from 'react-icons/pi'
import { RiShieldUserLine } from 'react-icons/ri'
import { FaBars, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import iNav from '../images/invest.png'
import { BiSolidPlanet } from 'react-icons/bi'
import { MdHandshake, MdOutlineHandshake, MdSatelliteAlt } from "react-icons/md";
import { TbHeadset, TbMoneybag, TbSatellite } from 'react-icons/tb'
import { IoDiamond, IoDiamondOutline } from 'react-icons/io5'
import { BsEmojiSmile, BsFillEmojiSmileFill } from 'react-icons/bs'
import navlogo from '../images/galaxysone/logo.png'
import Sidebar from './Sidebar'





const Navbar = () => {

    const pathname = window.location.pathname

    const [head, setHead] = useState('Home')
    const [right, setRight] = useState('')


    useEffect(() => {

        switch (pathname) {
            case '/home':
                setHead('Home')
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

            <Sidebar right={right} setRight={setRight} />

            <div className="mx-3 left-[10px] right-[10px] z-[999] mt-5 bg-transparent">

                <div className="flex justify-between">

                    <div className="flex space-x-4 items-center">
                        <img src={navlogo} alt="" className='w-32 border border-white rounded-md' />
                        <h1 className='text-white'>{head}</h1>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <Link to={'/customer'}>
                            <TbHeadset className='text-white' size={20} />
                        </Link>
                        <FaBars onClick={() => setRight('right-[0]')} className='text-[#00eefe]' size={20} />

                    </div>

                </div>

            </div>

            <div className=' fixed bottom-5 left-[10px] right-[10px] z-[999] text-[4vw]'>
                <div className="shadow-[0_-3px_30px_1px_rgba(0,40,14,0.3)] backdrop-blur-[5px] rounded-xl navbg ">
                    <ul className='flex items-center text-white py-3 '>

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
                                <MdHandshake size={28} className='text-[#00eefe]' /> :
                                <MdOutlineHandshake size={28} />
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

                        <div onClick={() => setRight('right-[0]')} className={`text-center relative flex-1 no-underline flex flex-col justify-center items-center`}>
                            {pathname === '/me' ?
                                <BsFillEmojiSmileFill size={28} className='text-[#00eefe]' /> :
                                <BsEmojiSmile size={28} />
                            }
                            <p className={``}>Me</p>
                        </div>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar