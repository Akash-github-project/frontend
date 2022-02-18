import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginId, password,remember } from '../app/features/LoginSlice'
import {Input } from './input'
import { Password } from './password'
import {Checkbox} from './checkbox'
import { Label } from './label'

export const Login = () => {
    const rememberMe = useSelector((state) => state.login.rememberMe)
    const logId = useSelector((state) => state.login.loginId)
    const passwd = useSelector((state) => state.login.password)
    
    const dispatch = useDispatch()
  
  return (
    <div className="px-10 py-10 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <form >
                    <div className="mt-4">
                        <div className='flex gap-4 items-center'>
                            {/* <label className="block text-secondary w-24 text-sm" for="username">Mobile or Email</label> */}
                            <Label forItem='username' message="Mobile of Email"/>
                            <Input holder="Name" iType="text" change={(value) => dispatch(loginId(value))} val={logId} Id="username"/>
                        </div>

                        <div className="mt-4 flex gap-4 items-center">
                            <Label forItem='passwd' message="Password"/>
                            {/* <Input holder="password" iType="password" change={(value) => dispatch(password(value))} val={passwd} Id="passwd"/> */}
                            <Password holder="password" iType="password" change={(value) => dispatch(password(value))} val={passwd} Id="passwd"/>
                            
                        </div>
                        <div className="flex items-center">
                            {/* conditional class application inline */}
                            <Checkbox toStore={rememberMe} click={(value)=>dispatch(remember())} whenClick="filledCheckbox" extraClass='mr-1'/>
                            <span className='mr-auto'>
                                Remember Me
                            </span><a href="#" className='text-primary'>Forgot Password</a></div>

                        <div className="flex">
                            <button className="w-full  p-2 mt-4 bg-primary text-white  rounded-lg hover:bg-pink-900 hover:shadow-pink-900 ">
                                Login</button>

                        </div>
                        <div className="mt-6 text-black">
                            Not having account, Please 
                            <a className="text-primary" href="#">
                               Sign Up 
                            </a>
                        </div>
                    </div>
                </form>
            </div>
  )
}

