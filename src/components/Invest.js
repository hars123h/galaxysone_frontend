import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import hot from '../images/hot.svg'
import ProductCard from './ProductCard'
import img202 from '../images/201.png'
import img302 from '../images/301.png'
import { ContextApi } from '../App'
import { FaListAlt } from 'react-icons/fa'
import g1 from '../images/galaxysone/g1.png'
import g2 from '../images/galaxysone/g2.png'
import g3 from '../images/galaxysone/g3.png'
import g4 from '../images/galaxysone/g4.png'
import g5 from '../images/galaxysone/g5.png'
import g6 from '../images/galaxysone/g6.png'
import g7 from '../images/galaxysone/g7.png'
import g8 from '../images/galaxysone/g8.png'
import g9 from '../images/galaxysone/g9.png'

const Invest = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);


    const [stable, setStable] = useState('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
    const [welfare, setWelfare] = useState('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
    const [activity, setActivity] = useState('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
    const [activelist, setActivelist] = useState('stable')
    const [totalEarn, setTotalEarn] = useState(0)


    const swiperHandel = name => {
        setActivelist(name)
        if (name === 'stable') {
            setStable('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
            setWelfare('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setActivity('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
        }
        else if (name === 'welfare') {
            setStable('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setWelfare('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
            setActivity('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
        }
        else {
            setStable('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setWelfare('bg-[rgba(255,255,255,0.3)] text-white text-lg ')
            setActivity('-top-[5px] bg-white font-bold text-[#0aa496] text-xl')
        }
    }


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

    const DateDifference = (date1, date2) => {


        //console.log(date1, date2);    
        var Difference_In_Time = date2.getTime() - date1.getTime();
        //console.log(Difference_In_Time);
        var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

        //console.log(Difference_In_Days);

        return Difference_In_Days;
    }

    useEffect(() => {


        userDetails?.plans_purchased?.forEach(element => {
            setTotalEarn(
                totalEarn + (DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning)
            )

        });

    }, [])

    console.log(totalEarn);





    return (
        <>
            <Navbar />

            <div className="mx-3 mt-5 mb-36 text-white">

                <div className="">

                    <div className="flex items-center space-x-3">
                        <FaListAlt className='text-[#0e88fb]' />
                        <h1>Equipment List</h1>
                    </div>

                    <div className="mt-5">

                        <ProductCard
                            product_image={g1}
                            product_type={1}
                            plan_cycle={1}
                            plan_amount={200}
                            plan_daily_earning={300}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g2}
                            product_type={2}
                            plan_cycle={7}
                            plan_amount={1000}
                            plan_daily_earning={250}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g3}
                            product_type={3}
                            plan_cycle={7}
                            plan_amount={2500}
                            plan_daily_earning={500}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g4}
                            product_type={4}
                            plan_cycle={10}
                            plan_amount={4000}
                            plan_daily_earning={600}
                        // plan_name={'Communication Satellite'}
                        />

                        <ProductCard
                            product_image={g5}
                            product_type={5}
                            plan_cycle={10}
                            plan_amount={10000}
                            plan_daily_earning={1500}
                        // plan_name={'Communication Satellite'}
                        />

                    </div>

                </div>
            </div>

        </>
    )
}

export default Invest