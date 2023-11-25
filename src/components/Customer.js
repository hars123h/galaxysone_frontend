import React from "react";
import TeamImg from "../images/galaxysone/teamimg.png";
import WpImg from "../images/whatsapp.svg";
import TeleImg from "../images/telegram.svg";

import { IoIosArrowForward } from "react-icons/io";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const CustomerCare = () => {
    return (
        <>

            <header className="h-[50px] leading-[50px] block mb-[10px] ">
                <div className="bg-black max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                    <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                        <LiaAngleLeftSolid size={22} />
                    </Link>

                    <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Customer Service</h2>

                </div>
            </header>
            <div className="p-5 text-white ">
                <div className="w-full flex items-center justify-center mb-[60px]">
                    <img className=" w-[150px]" src={TeamImg} alt="" />
                </div>

                <div className="flex items-center">
                    <img className="w-[50px] mr-[10px]" src={TeamImg} alt="" />
                    <p>Hi- do you need any help</p>
                </div>

                <div className="flex items-center mt-[20px]">
                    <img className="w-[30px] mr-[10px]" src={TeamImg} alt="" />
                    <p>9:30 - 18:30</p>
                </div>
                <p>
                    If you have question about me you can ask me in the following ways
                </p>

                <div>
                    <a href="https://wa.me/447578046579" className="flex items-center border-gray-400	border-2 p-4 rounded-lg my-3 ">
                        <img className="w-[45px] pr-[10px] border-r-2" src={WpImg} alt="" />
                        <div className="pl-[10px] pr-[10px] ">
                            <div>Whatsapp</div>
                            <p className="text-[grey] text-[15px]">
                                Click to contact customer service
                            </p>
                        </div>
                        <IoIosArrowForward />
                    </a>

                    <a href='https://telegram.me/Evergreenofficial656' className="flex items-center border-gray-400	border-2 p-4 rounded-lg my-3 ">
                        <img className="w-[45px] pr-[10px] border-r-2" src={TeleImg} alt="" />
                        <div className="pl-[10px] pr-[10px] ">
                            <div>Telegram</div>
                            <p className="text-[grey] text-[15px]">
                                Click to contact customer service
                            </p>
                        </div>
                        <IoIosArrowForward />
                    </a>




                </div>


            </div>
        </>
    );
};

export default CustomerCare;