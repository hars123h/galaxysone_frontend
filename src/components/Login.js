import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../api_url';
import applogo from '../images/appLogo.png'
import Tradmark from './Tradmark';
import { ContextApi } from '../App';
import logo from '../images/galaxysone/logo.png'
import imgriti from '../images/galaxysone/imgriti.png'
import phone from '../images/galaxysone/phone.png'
import sms from '../images/galaxysone/sms.png'
import indian from '../images/galaxysone/indianFlag.png'
import password from '../images/galaxysone/password.png'
import eyeclosed from '../images/galaxysone/eyeclosed.png'
import eyeopened from '../images/galaxysone/eyeopened.png'

const Login = () => {

    const navigate = useNavigate();

    const {
        setLoading,
        toaster,
        setUser
    } = useContext(ContextApi);

    const [mobno, setmobno] = useState('');
    const [pwd, setpwd] = useState('');
    const [bloackedUsers, setBlockedUsers] = useState([]);
    const [loginpwd, setLoginpwd] = useState('password')
    const [loginpwd2, setLoginpwd2] = useState('password')

    const getBlockedUsers = async () => {
        const dataRes = await axios.get(`${BASE_URL}/get_blocked_users`).then(res => res.data);
        var temp = [];
        dataRes.forEach((doc) => {
            //console.log(doc.data());
            temp.push(doc.user_id);
            setBlockedUsers(temp);
        });
    }

    const handleSignIn = async () => {
        if (bloackedUsers.includes(String(mobno))) {
            toaster('You are blocked by the administrator!');
            return;
        }
        setLoading(true);

        await axios.post(`${BASE_URL}/login`, { mobno, pwd })
            .then(({ data }) => {
                if (data.user_details === null) {
                    throw "Could not login/something went wrong";
                }
                localStorage.setItem('uid', data.user_details._id);
                setUser(data.user_details._id)
                setTimeout(() => {
                    navigate('/home');
                    setLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                    toaster("Some thing went wrong")
                }, 1000);
            });
    }

    useEffect(() => {
        getBlockedUsers();
    }, [])

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

            {/* <div className="signupMain bgimg01 after:bg-white">

                <div className="max-w-[800px] mx-auto">

                    <div className="flex relative items-center min-h-[90vh] flex-wrap mx-auto">

                        <div className="w-full">

                            <div className="mx-[10px] px-[10px]">
                                <h4 className='text-[32px] text-[#1f3d70] font-bold '>Hello!</h4>
                                <p className='text-xl leading-none'>Welcome to Kraft.</p>
                            </div>

                            <div className="bg-white mt-5 mb-[50px] mx-[10px] pt-10 px-5 pb-5 relative rounded-lg">

                                <div className="">

                                    <div className="mb-5 relative">

                                        <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                            <div className="flex items-center flex-wrap h-full text-center z-10">
                                                <p className='text-sm text-[#818393] leading-none mr-1'>+91</p>
                                            </div>
                                            <div className="flex items-center relative flex-1">
                                                <input
                                                    onChange={e => setmobno(e.target.value)}
                                                    type="number"
                                                    name="mob"
                                                    id="mob"
                                                    className=' fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent flex-1 '
                                                    maxLength={11}
                                                    size={11}
                                                    placeholder=''
                                                />
                                                <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                                <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>TEL</label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5 relative">

                                        <div className="px-[10px] relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                            <input
                                                onChange={e => setpwd(e.target.value)}
                                                type="password"
                                                name="pass"
                                                id="pass"
                                                className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                                placeholder=''

                                            />
                                            <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                            <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Login password</label>

                                        </div>
                                    </div>

                                    <div className="my-10">
                                        <Link to={`/forgotpassword`} className='text-sm leading-none text-[rgba(52,86,255,0.9)]'>Forgot your password?</Link>
                                    </div>


                                    <div className="flex flex-wrap items-center my-10 w-full justify-end ">

                                        <Link to={`/signup`} className='text-[#1f3d70] bg-white border-[1px] border-[#1f3d70] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>SIGN UP</Link>

                                        <button className='ml-[10px] flex-1 text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative ' onClick={handleSignIn}>
                                            LOG IN
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex max-w-lg m-[10px] p-[10px] items-start flex-wrap ">

                                <div className="w-20 p-1 bg-white rounded-2xl ">
                                    <img src={applogo} alt="appLogo" />
                                </div>

                                <Link to={`/download`} className="flex-1 ml-[10px]">
                                    <h3 className='p-0 m-0 text-2xl text-[#3468a3] font-bold'>Kraft</h3>
                                    <p className=' p-0 m-0 pb-[10px] text-base leading-none text-[#818393]'>
                                        Rest assured financial management, quality service, low risk investment, 100% return
                                    </p>
                                </Link>

                            </div>

                        </div>


                    </div>


                    <Tradmark />


                </div>
            </div> */}

            <div className="min-h-screen pt-[8vw] pb-[10vw] relative z-[1] loginPage overflow-y-scroll">
                <div className="px-[8vw] text-left ">

                    <div className="mb-[6vw] relative">

                        <img src={logo} alt="logo" className='w-[41vw] h-auto mb-[2.5vw] ' />

                        <p className="andount" data-v-380ab766="">Register to receive free </p>
                        <p className="andount" data-v-380ab766="">equipment and total</p>
                        <p className="andount" data-v-380ab766="">revenue is <span data-v-380ab766="">₹11988</span></p>
                        <img className="imgriti" src={imgriti} alt="" data-v-380ab766=""></img>

                    </div>

                    <div className="numberi" data-v-380ab766="">
                        <img src={phone} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">Phone number</p>
                    </div>

                    <div className="van-cell van-field input-box" data-v-380ab766="">

                        <div className="van-field__left-icon">
                            <div className="phonen" data-v-380ab766="">
                                <img src={indian} alt="" data-v-380ab766="" />
                                <p data-v-380ab766="">+91</p>
                                <span data-v-380ab766=""></span>
                            </div>
                        </div>

                        <div className="van-cell__value van-field__value flex-1 ">

                            <div className="van-field__body">

                                <input onChange={e => { setmobno(e.target.value) }}
                                    type="tel"
                                    inputMode="numeric"
                                    id="van-field-1-input"
                                    className="van-field__control inline-block"
                                    placeholder="Please enter phone number"

                                />


                            </div>

                        </div>
                    </div>

                    <div className="numberi" data-v-380ab766="">
                        <img src={password} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">Login password</p>
                    </div>

                    <div className="van-cell van-field input-box" data-v-380ab766="">
                        <div className="van-cell__value van-field__value">
                            <div className="van-field__body">
                                <input onChange={e => setpwd(e.target.value)}
                                    type={loginpwd}
                                    id="van-field-3-input"
                                    className="van-field__control"
                                    placeholder="Please enter login password"
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

                    <div className="flex justify-between items-center space-x-3">
                        <Link to={'/login'} className='h-[13vw] w-full'>
                            <button className='btnbox h-[13vw] w-full bg-[#2b2b2b] rounded-sm text-[#6e6e6e] font-bold' >Register</button>
                        </Link>
                        <button className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-sm text-[#074762] font-bold'>Login</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login