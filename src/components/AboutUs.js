import React from 'react'
import aboutusimg from "../images/galaxysone/aboutusimg.jpg";
import { Link } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';

const AboutUs = () => {
    return (
        <>

            <div className="  after:contents-[' '] bg-[#c80e00] after:fixed h-screen ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px] ">
                        <div className="bg-black max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >About Us</h2>

                        </div>
                    </header>

                    <div className="p-5 text-white">
                        <img src={aboutusimg} alt="" className='border border-white rounded-lg mb-5' />

                        <div className="">
                            WE ARE BY YOUR SIDE
                            <br />
                            As your trusted logistics partner, we support you every step of the way – and we prefer to do so personally. We start by listening to you and understanding your business. Only then can we together find the best solution tailored specifically to your growth strategy.

                            If any unforeseen changes should occur, we find quick and pragmatic solutions. Always being close by when you need us.

                            <br /> <br />

                            THIS IS WHAT WE STAND FOR: <br />
                            Benefits pictogram <br />
                            TRUSTED <br />
                            We deliver on our promises and constantly ensure that cargo arrives at its destination on time and in good condition. Because we feel responsible for every single shipment. Large or small. From the first mile to the last.

                            <br /> <br />

                            By your side pictogram <br />
                            BY YOUR SIDE <br />
                            We care about your business and are dedicated to your success. We offer smart digital solutions, while at the same time ensuring that our ties to you, our valued customers, remain personal.
                            <br /><br />

                            Multibrand pictogram <br />
                            CAN-DO <br />
                            We are can-do people. We anticipate challenges before they arise, we react flexibly to changing needs and situations – and we find solutions, often making the seemingly impossible possible.
                            <br /> <br />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutUs