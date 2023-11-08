import React, { useContext, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import password from '../images/galaxysone/password.png'

const ChangePassword = () => {

    const navigate = useNavigate();


    const {
        setLoading,
        toaster,
        userDetails

    } = useContext(ContextApi);

    const [secret, setSecret] = useState('password')
    const [pwd, setPwd] = useState('')
    const [newPwd, setNewPwd] = useState('')

    const secrethandel = () => {
        if (secret === 'password') {
            setSecret('text')
        }
        else {
            setSecret('password')
        }
    }

    const validatePassword = password => /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleRegister = async () => {

        if (pwd !== userDetails?.pwd) {
            toaster('Old password doees not match')
        }

        else if (newPwd.length < 6) {
            toaster('Password must contain at least 6 characters!');
            return;
        }

        else if (validatePassword(newPwd) === false) {
            toaster('Password must contain letters and numbers or special symbols');
            return;
        }

        else {

            await axios.post(`${BASE_URL}/reset_login_password`,
                { new_pwd: newPwd, user_id: localStorage.getItem('uid') }).then(() => {
                    // setOtp('');
                    // setOTPfield('');
                    setPwd('');
                    setNewPwd('')
                    toaster('Password successfully updated!');
                    setTimeout(() => {
                        navigate('/account')
                    }, 3000);
                })
                .catch(error => toaster('Some Error Occured'));
        }

    }

    return (
        <>
            <div className='mt-5'>

                <div className="numberi" data-v-380ab766="">
                    <img src={password} alt="" data-v-380ab766="" />
                    <p data-v-380ab766="">Current password</p>
                </div>

                <div className="van-cell van-field input-box" data-v-380ab766="">
                    <div className="van-cell__value van-field__value">
                        <div className="van-field__body">
                            <input onChange={e => setPwd(e.target.value)}
                                type='password'
                                id="van-field-3-input"
                                className="van-field__control"
                                placeholder="Enter current password"
                            />

                        </div>
                    </div>
                </div>

                <div className="numberi" data-v-380ab766="">
                    <img src={password} alt="" data-v-380ab766="" />
                    <p data-v-380ab766="">New password</p>
                </div>

                <div className="van-cell van-field input-box" data-v-380ab766="">
                    <div className="van-cell__value van-field__value">
                        <div className="van-field__body">
                            <input onChange={e => setNewPwd(e.target.value)}
                                type='password'
                                id="van-field-3-input"
                                className="van-field__control"
                                placeholder="Enter new password "
                            />

                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center space-x-3 text-[4vw]">
                    {/* <Link to={'/signup'} className='h-[13vw] w-full'>
                    <button className='btnbox h-[13vw] w-full bg-[#2b2b2b] rounded-sm text-[#6e6e6e] font-bold' >Register</button>
                    </Link> */}
                    <button onClick={handleRegister} className='btnbox h-[13vw] w-full bg-[#0098e7] rounded-lg text-[#074762] font-bold'>Confirm</button>
                </div>

            </div>
        </>
    )
}

export default ChangePassword