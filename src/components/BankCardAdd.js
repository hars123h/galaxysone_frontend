import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import bankaccountimg from '../images/galaxysone/bankaccountimg.png'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';

const BankCardAdd = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster, setLoading } = useContext(ContextApi);

    const [details, setDetails] = useState(
        {
            fullName: '',
            bankAccount: '',
            ifsc: '',
        }
    );
    const [pop, setpop] = useState(false);
    const [wpwd, setWpwd] = useState()


    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
        // console.log(details);
    }

    const handleSubmit = async () => {
        // console.log(userDetails.wpwd,wpwd);
        if (true) {
            setLoading(true)
            await axios.post(`${BASE_URL}/bank_details`, { user_id: localStorage.getItem('uid'), bank_details: details })
                .then(() => {
                    setLoading(false)
                    toaster('Bank details added successfully!');
                    navigate('/home')
                })
                .catch(() => { setLoading(false); toaster('Some error Occured') }
                );
        } else {
            setLoading(false)
            toaster('Incorrect withdrawal password!');
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

    return (
        <>



            <div className="after:bg-white after:contents-[' '] after:fixed ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block mb-[10px] bg-black">
                        <div className="bg-black max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Bank Account</h2>

                        </div>
                    </header>

                    <div className="p-5">

                        <img src={bankaccountimg} alt="" className='mx-auto w-32' />

                        <div className='mt-5'>

                            <div className="numberi" data-v-380ab766="">
                                {/* <img src={password} alt="" data-v-380ab766="" /> */}
                                <BsFillPersonFill className='text-[#0098e7] mr-1' size={25}/>
                                <p data-v-380ab766="">Holder's Name</p>
                            </div>

                            <div className="van-cell van-field input-box" data-v-380ab766="" style={{ background: '#242424', border: '0' }}>
                                <div className="van-cell__value van-field__value">
                                    <div className="van-field__body">
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            name='fullName'
                                            id="van-field-3-input"
                                            className="van-field__control bg-[#242424]"
                                            placeholder="Please enter Holder's name"
                                        />

                                    </div>
                                </div>
                            </div>

                            <div className="numberi" data-v-380ab766="">
                                {/* <img src={password} alt="" data-v-380ab766="" /> */}
                                <AiOutlineCreditCard className='text-[#0098e7] mr-1' size={25}/>
                                <p data-v-380ab766="">Account number</p>
                            </div>

                            <div className="van-cell van-field input-box" data-v-380ab766="" style={{ background: '#242424', border: '0' }}>
                                <div className="van-cell__value van-field__value">
                                    <div className="van-field__body">
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            name='bankAccount'
                                            id="van-field-3-input"
                                            className="van-field__control"
                                            placeholder="Please enter bank account number"
                                        />

                                    </div>
                                </div>
                            </div>

                            <div className="numberi" data-v-380ab766="">
                                {/* <img src={password} alt="" data-v-380ab766="" /> */}
                                <BiCoinStack className='text-[#0098e7] mr-1' size={25}/>
                                <p data-v-380ab766="">IFSC</p>
                            </div>

                            <div className="van-cell van-field input-box" data-v-380ab766="" style={{ background: '#242424', border: '0' }}>
                                <div className="van-cell__value van-field__value">
                                    <div className="van-field__body">
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            name='ifsc'
                                            id="van-field-3-input"
                                            className="van-field__control"
                                            placeholder="Please enter IFSC"
                                        />

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center space-x-3 text-[4vw]">

                                <button onClick={handleSubmit} className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-lg text-[#074762] font-bold'>Confirm</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default BankCardAdd