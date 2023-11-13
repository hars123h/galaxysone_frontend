import React from 'react'
import aboutusimg from "../images/galaxysone/aboutusimg.jpg";
import { Link } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';

const AboutUs = () => {
    return (
        <>

            <div className="  after:contents-[' '] after:fixed h-screen ">
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
                            Adopted in May 2007, Evergreen Line is the common trading name for the Evergreen Group's container shipping companies that comprise Evergreen Marine Corp. (Taiwan) Ltd., Italia Marittima S.p.A., Evergreen Marine (UK) Ltd., Evergreen Marine (Hong Kong) Ltd., and Evergreen Marine (Singapore) Pte. Ltd..

                            <br /> <br />

                            With Evergreen Marine (Asia) Pte. Ltd. joining the brand name agreement in year 2021, the six shipping companies operate a modern fleet of container ships with a combined capacity of more than 1.5 million TEU and maintain services across a broad array of trade lanes around the world.

                            <br /> <br />

                            Since its establishment, Evergreen Line has been a global brand which symbolizes innovative, reliable and sustainable marine transportation service. We continue with our mission to build efficient e-commerce platforms and to accelerate our fleet renewal program, introducing ever more eco-friendly container ships.

                            <br /> <br />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutUs