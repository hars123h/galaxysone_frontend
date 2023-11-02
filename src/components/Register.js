import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import BASE_URL from '../api_url';
import { ContextApi } from '../App';
// import logo from '../images/logo (1).svg'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
// import applogo from '../images/appLogo.png'
// import tradelogo from '../images/logo_g.svg'
// import Tradmark from './Tradmark';
import logo from '../images/galaxysone/logo.png'
import imgriti from '../images/galaxysone/imgriti.png'
import phone from '../images/galaxysone/phone.png'
import sms from '../images/galaxysone/sms.png'
import indian from '../images/galaxysone/indianFlag.png'
import password from '../images/galaxysone/password.png'
import eyeclosed from '../images/galaxysone/eyeclosed.png'
import eyeopened from '../images/galaxysone/eyeopened.png'


const Register = () => {

    const navigate = useNavigate();

    const {
        setLoading,
        toaster,

    } = useContext(ContextApi);

    const [search, setSearch] = useSearchParams();

    const [otpfield, setOTPfield] = useState('');
    const [otp, setOtp] = useState('');
    const [mobno, setMobno] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwd2, setPwd2] = useState('')
    const [invt, setInvt] = useState(search.get('invitation_code'));
    const [loginpwd, setLoginpwd] = useState('password')
    const [loginpwd2, setLoginpwd2] = useState('password')


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

    const validatePassword = password => /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleRegister = async () => {

        if (mobno.length !== 10) {
            toaster('Invalid Mobile Number');
            return;
        }

        else if (pwd.length < 6) {
            toaster('Password must contain at least 6 characters!');
            return;
        }

        else if (validatePassword(pwd) === false) {
            toaster('Password must contain letters and numbers or special symbols');
            return;
        }

        else if (pwd !== pwd2) {
            toaster('password does not match')
        }

        setLoading(true);

        await axios.post(`${BASE_URL}/register`, { mobno, pwd, invt })
            .then(({ data }) => {
                if (data.message === 'Mobile Number already registered!') {
                    toaster('Mobile Number already registered!');
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                } else if (data.message === 'invalid invite code') {
                    toaster('invalid invite code!');
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                } else {
                    toaster('registration success');
                    // localStorage.setItem('uid', data.user_id);
                    setMobno('');
                    setPwd('');
                    // setInvt('');
                    setOTPfield('')
                    setOtp('')
                    setTimeout(() => {
                        navigate('/login');
                        setLoading(false);
                    }, 2000);
                }
            })
            .catch((error) => {
                toaster('Something went wrong');
                setLoading(false)
                console.error(error);
            });
    }

    const handleMessage = () => {
        if (mobno.length !== 10) {
            toaster('Invalid Mobile No, please enter a valid number');
            return;
        }
        // fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=27b58V4YOqBDMgWvNjapz1k9IHlrJfynC6w0hceRAZGoLimK3PuJC7OoiV4N2B6DjfwWKzb0lhgEetPH&variables_values=${otpfield}&route=otp&numbers=${mobno}`)
        //     .then((response) => {
        //         console.log(response);
        //         toaster('OTP sent successfully');
        //     })
        //     .catch(error => toaster('Something went wrong'));
        // console.log(otpfield, "otpfield");
    }

    // console.log("otp",otpfield);

    return (
        <>

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

                                <input onChange={e => { setMobno(e.target.value); setOTPfield(String(Math.floor(100000 + Math.random() * 900000))) }}
                                    type="tel"
                                    inputMode="numeric"
                                    id="van-field-1-input"
                                    className="van-field__control inline-block"
                                    placeholder="Please enter phone number"

                                />


                            </div>

                        </div>
                    </div>

                    {/* <div className="numberi" data-v-380ab766="">
                        <img src={sms} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">SMS verification code</p>
                    </div>

                    <div className="van-cell van-field input-box btnbox" data-v-380ab766="">
                        <div className="van-cell__value van-field__value flex-1">
                            <div className="van-field__body">
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    id="van-field-2-input"
                                    className="van-field__control"
                                    placeholder="Enter SMS verification code"
                                />
                                <div className="van-field__right-icon shrink-0">
                                    <button onClick={handleMessage} type="button" className="van-button van-button--default van-button--normal senduis" data-v-380ab766="">
                                        <div className="van-button__content">
                                            <span className="van-button__text">
                                                Send
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="numberi" data-v-380ab766="">
                        <img src={password} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">Login password</p>
                    </div>

                    <div className="van-cell van-field input-box" data-v-380ab766="">
                        <div className="van-cell__value van-field__value">
                            <div className="van-field__body">
                                <input onChange={e => setPwd(e.target.value)}
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

                    <div className="numberi" data-v-380ab766="">
                        <img src={password} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">Enter password again</p>
                    </div>

                    <div className="van-cell van-field input-box" data-v-380ab766="">
                        <div className="van-cell__value van-field__value">
                            <div className="van-field__body">
                                <input onChange={e => setPwd2(e.target.value)}
                                    type={loginpwd2}
                                    id="van-field-4-input"
                                    className="van-field__control"
                                    placeholder="Please enter login password again"
                                />
                                <div onClick={() => secrethandel('loginpwd2')} className="van-field__right-icon">
                                    {loginpwd2 === 'password' ?
                                        <img className="eyeimg" src={eyeclosed} alt="" data-v-380ab766="" />
                                        :
                                        <img className="eyeimg" src={eyeopened} alt="" data-v-380ab766="" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="numberi" data-v-380ab766="">
                        <img src={password} alt="" data-v-380ab766="" />
                        <p data-v-380ab766="">Invitation code（Optional）</p>
                    </div>

                    <div className="van-cell van-field input-box" data-v-380ab766="">

                        <div className="van-cell__value van-field__value">
                            <div className="van-field__body">
                                <input onChange={e => setInvt(e.target.value)}
                                    type="text"
                                    id="van-field-5-input"
                                    className="van-field__control"
                                    placeholder="Please enter the invitation code"
                                />
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-between items-center space-x-3">
                        <Link to={'/login'} className='h-[13vw] w-full'>
                            <button className='btnbox h-[13vw] w-full bg-[#2b2b2b] rounded-sm text-[#6e6e6e] font-bold' >Login</button>
                        </Link>
                        <button className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-sm text-[#074762] font-bold'>Register</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register