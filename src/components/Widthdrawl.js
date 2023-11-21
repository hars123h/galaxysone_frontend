import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import chip from '../images/Chip.svg'
import BASE_URL from '../api_url';
import axios from 'axios';
import { BiSolidCoinStack } from 'react-icons/bi';
import floatings from '../images/galaxysone/g2.png'
import eyeclosed from '../images/galaxysone/eyeclosed.png'
import eyeopened from '../images/galaxysone/eyeopened.png'

const Widthdrawl = () => {

    const navigate = useNavigate();


    const { userDetails, setLoading, setUserDetails, getUserDetails, user, toaster, amounts, setAmounsts } = useContext(ContextApi);
    const [loginpwd, setLoginpwd] = useState('password')
    const [loginpwd2, setLoginpwd2] = useState('password')
    const [nextBtn, setnextBtn] = useState(false)

    // console.log(amounts);

    // const [bank_details, setBank_details] = useState(
    //     {
    //         fullName: '',
    //         bankAccount: '',
    //         ifsc: '',
    //     }
    // )
    const [bank_details, setBank_details] = useState(userDetails?.bank_details)

    const [deposit, setDeposit] = useState()
    const [wpwd, setWpwd] = useState()
    const [wpwd2, setWpwd2] = useState(localStorage.getItem('wpwd'))

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    const withdrawDate = new Date(userDetails?.lastWithdrawal)
    withdrawDate.setHours(0, 0, 0, 0)

    const isBetween = () => {
        var startTime = '09:00:00';
        var endTime = '21:00:00';

        var currentDate = new Date()

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);


        var valid = startDate < currentDate && endDate > currentDate;
        //console.log(valid);
        return valid;
    }

    const handleWithdrawal = async () => {

        setnextBtn(true)

        if (Number(deposit) === false || Number(deposit) <= 0) {
            toaster('Enter a valid number');
            return;
        }

        if ((Number(deposit)) < Number(amounts.mwamount)) {
            //console.log((Number(deposit)+Number(amounts.withdrawal_fee)), Number(amounts.mwamount));
            toaster(`Amount should be greater than ${amounts.mwamount}`);
            //console.log(deposit, amounts.amount);
            return;
        }

        if (withdrawDate.toDateString() === date.toDateString()) {
            toaster('you can withdraw once in a day.')
            return
        }

        if ((Number(deposit) > 50000)) {
            toaster('Amount should not be greatr than Rs 50,000');
            return;
        }

        if (((Number(deposit)) > Number(userDetails.balance))) {
            toaster('You dont have enough balance');
            return;
        }
        //&& otp === otpfield
        if (userDetails.wpwd === wpwd) {
            try {
                //const docRef1 = 
                var temp_details = bank_details;
                delete temp_details._id;

                setLoading(true)

                await axios.post(`${BASE_URL}/place_withdrawal`, {
                    withdrawalAmount: (Number(deposit)),
                    ...temp_details,
                    afterDeduction: (Number(deposit) - (Number(amounts.withdrawal_fee) * Number(deposit) / 100)),
                    user_id: localStorage.getItem('uid'),
                    time: new Date(),
                    balance: userDetails.balance,
                    status: 'pending'
                }).then(() => {
                    setLoading(false)
                    toaster('Withdrawal request placed successfully!');
                    setTimeout(() => {
                        navigate('/widthdrawlrecords')
                    }, 3000);
                }).catch(e => {
                    setLoading(false)
                    toaster("some error occured")
                    console.log(e);
                })

            } catch (e) {
                setLoading(false)
                toaster('error adding document')
                console.error("Error adding document: ", e);

            }
        } else {
            setLoading(false)
            toaster('Trade Password is incorrect');
            //console.log(wpassword, loc.state.withdrawalPassword);
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

    useEffect(() => {
        // console.log(wpwd2);

        if (wpwd2 === 'undefined') {
            toaster('Set Trade Password')
            setTimeout(() => {
                navigate('/accountsecurity', { state: "pin  " })
            }, 3000);
        }

        else if (userDetails?.bank_details.bankAccount.length === 0) {
            toaster("Add bank details first")
            setTimeout(() => {
                navigate('/bankcardadd')
            }, 3000);
        }
    }, [])


    // console.log(bank_details,'withdrawl');


    console.log();

    const secrethandel = type => {

        console.log(type);

        if (type === 'loginpwd') {
            if (loginpwd === 'password') {
                setLoginpwd('text')
            }
            else {
                setLoginpwd('password')
            }
        }
        else if (type === 'loginpwd2') {
            if (loginpwd2 === 'password') {
                setLoginpwd2('text')
            }
            else {
                setLoginpwd2('password')
            }
        }
    }




    return (
        <>
            <div className=" after:contents-[' '] after:fixed ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block">
                        <div className="bg-black max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Withdraw</h2>

                        </div>
                    </header>

                    <div className="px-5 mt-12 ">

                        <div className="rounded-lg ">

                            <div className="bg-[#009fe9] flex relative justify-between p-5 rounded-lg rounded-bl-none">

                                <div className="">
                                    <div className="flex items-center space-x-1 mb-1" >
                                        <BiSolidCoinStack className='text-[yellow]' size={25} /> <span>My balance</span>
                                    </div>
                                    <p className='text-black text-xl font-bold'>
                                        <em className=' p-0 px-[2px] border-0 not-italic leading-none '>₹</em>
                                        {userDetails?.balance.toFixed(2)}
                                    </p>
                                </div>

                                {/* <img src={floatings} className='h-32 w-32 absolute right-0 -top-14' alt="" /> */}

                            </div>

                            <div className="flex ">
                                <div className="flex-1 -z-10 bg-[#009fe9] rounded-xl rounded-t-none inverted_radius relative">

                                </div>
                                <Link to={'/widthdrawlrecords'} className="bg-[#009fe9] flex justify-center items-center rounded-lg border-2 mt-2 border-black px-5 py-2">
                                    Withdraw record
                                </Link>
                            </div>
                        </div>

                        <div className="van-cell van-field input-box mt-7 bg-[#1e1e20]" data-v-380ab766="" style={{ background: '#1e1e20', border: 'none' }}>

                            <div className="van-field__left-icon">
                                <div className="phonen" data-v-380ab766="">
                                    {/* <img src={indian} alt="" data-v-380ab766="" /> */}
                                    <p data-v-380ab766="" className='mr-1'>₹</p>
                                    <span data-v-380ab766=""></span>
                                </div>
                            </div>

                            <div className="van-cell__value van-field__value flex-1 ">

                                <div className="van-field__body">

                                    <input onChange={e => { setDeposit(e.target.value) }}
                                        type="number"
                                        inputMode="numeric"
                                        id="van-field-1-input"
                                        className="van-field__control inline-block font-bold"
                                        placeholder="Please enter withdraw amount"
                                        style={{ color: 'white', fontWeight: 700 }}

                                    />


                                </div>

                            </div>
                        </div>

                        <div className="van-cell van-field input-box" data-v-380ab766="" style={{ background: '#1e1e20', border: 'none' }}>
                            <div className="van-cell__value van-field__value">
                                <div className="van-field__body">
                                    <input onChange={e => setWpwd(e.target.value)}
                                        type={loginpwd}
                                        id="van-field-3-input"
                                        className="van-field__control"
                                        placeholder="Please enter withdrawl password"
                                    />
                                    <div onClick={() => secrethandel('loginpwd')} className="van-field__right-icon">
                                        {loginpwd === 'password' ?
                                            <img className="eyeimg" src={eyeclosed} alt="" data-v-380ab766="" />
                                            :
                                            <img className="eyeimg" src={eyeopened} alt="" data-v-380ab766="" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between items-center space-x-3 text-[4vw]">
                            {isBetween() ?
                                <button onClick={handleWithdrawal} disabled={nextBtn} className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-lg text-[#074762] font-bold'>Withdraw</button>
                                :
                                <button onClick={() => { toaster('You can withdraw only between 09:00:00 to 21:00:00 ') }} className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-lg text-[#074762] font-bold'>Withdraw</button>
                            }
                        </div>

                        <div className="mx-[10px] py-5">
                            <div className="my-5">
                                <p className='leading-tight py-[2px] text-[white] mb-[10px]'>1. The daily withdrawal time is from 09:00:00 to 21:00:00</p>
                                <p className='leading-tight py-[2px] text-[white] mb-[10px]'>2. The single withdrawal amount is between 300 and 50000</p>
                                <p className='leading-tight py-[2px] text-[white] mb-[10px]'>3. 10% of the withdrawal amount will be charged as tax for each withdrawal</p>
                                <p className='leading-tight py-[2px] text-[white] mb-[10px]'>4. In order to facilitate financial settlement, you can only apply for cash withdrawal 1 times a day</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Widthdrawl