import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { message } from "antd";

import { addUser } from "../store/StoreSlice";
import './auth.scss'

export const Auth = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

  const [login, setLogin] = useState('login')

  const onSubmit = (data, type) => {
    const { email, password } = data
    const auth = getAuth()

    if (type === 'login') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({
            token: user.accessToken,
            email: user.email
          }))
          message.success('You are successfully logined');
          reset()
        })
        .catch((error) => {
          const errorMessage = error.message;
          message.error(errorMessage);
        })
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({
            token: user.accessToken,
            email: user.email
          }))
          message.success('You are successfully registered');
          reset()
        })
        .catch((error) => {
          const errorMessage = error.message;
          message.error(errorMessage);
        })
    }
    
  }
  return (
    <div className="login-wrapper">
      <div className="login-block">
        <form onSubmit={handleSubmit((data) => onSubmit(data, login))}>
          <div className='input-item'>
            <label htmlFor="email">Email</label>
            <input type={'email'} id='email' placeholder='Email *' {...register("email", { required: true })} />
            {errors.email && <span className='error'>This field is required</span>}
          </div>

          <div className='input-item'>
            <label htmlFor="password">Password</label>
            <input type={'password'} id='password' placeholder='Password *' {...register("password", { required: true })} />
            {errors.password && <span className='error'>This field is required</span>}
          </div>

          <div className='btn-group'>
            <button className='btn btn-sign-in' type='submit' onClick={() => setLogin('login')}>Log In</button>
            <button className='btn btn-sign-up' type='submit' onClick={() => setLogin('register')}>Register</button>
          </div>
        </form>
      </div>
    </div >
  )
}
