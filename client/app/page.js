'use client'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux/'
import {increment, decrement, incrementByAmount} from './redux/features/counter/counterSlice'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Home() {
  const count  = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  function handleInputs(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    async function submit() {
      try {
        const {data} = await axios.post('http://localhost:3001/login', inputs)
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('Token guardado en el LocalStorage');
        }
      } catch (error) {
        console.log(error)
      }
    }
    submit()
  }

  const token = localStorage.getItem('token');
  useEffect(() => {

    if (token) {
      console.log('Estoy logueado:', token);
    } else {
      console.log('Token no encontrado en el LocalStorage');
    }
  },[token])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Login</div>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input key='email' type='email' name="email" onChange={handleInputs} value={inputs.email}></input>
        <br></br>
        <label>Password</label>
        <input key='password' type='password' name="password" onChange={handleInputs} value={inputs.password}></input>
        <button type='submit'>Submit</button>
      </form>
      <h2>Dont have an account? <Link href={'./signup'}>SignUp</Link></h2>
      <button onClick={() => dispatch(increment())}>
        increment
      </button>
      <span>
        {count}
      </span>
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>

    </main>
  )
}
