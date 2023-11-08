import React, { useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import WpasswordChange from './WpasswordChange'
import ChangePassword from './ChangePassword'

const AccountSecurity = () => {

    const [toogle, setToogle] = useState('login')
    const [login, setLogin] = useState('')
    const [pin, setPin] = useState('')

    useEffect(() => {

        if (toogle === 'login') {
            setLogin('bg-[#0ef] text-black')
            setPin('bg-[#242424] text-white')
        }
        else {
            setLogin('bg-[#242424] text-white')
            setPin('bg-[#0ef] text-black')
        }

    }, [toogle, setToogle])


    return (
        <>

            <div className="after:contents-[' '] after:fixed h-screen text-white ">
                <div className="w-full mx-auto max-w-[800px] p-5">

                    <header className="h-[50px] leading-[50px] block mb-[10px] bg-black">
                        <div className="bg-black max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Account security</h2>

                        </div>
                    </header>

                    <div className="flex justify-between items-center space-x-3 text-[4vw] ">

                        <button onClick={() => setToogle('login')} className={`btnbox h-[13vw] w-full rounded-sm font-bold ${login}`}>Login Password</button>

                        <button onClick={() => setToogle('pin')} className={`btnbox h-[13vw] w-full rounded-sm font-bold ${pin}`}>PIN Password</button>

                    </div>

                    {toogle === 'login' ?

                        <ChangePassword />
                        :
                        <WpasswordChange />


                    }


                </div>
            </div>


        </>
    )
}

export default AccountSecurity