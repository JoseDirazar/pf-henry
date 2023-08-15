'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function SignUp() {
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
            const {data} = await axios.post('http://localhost:3001/signup', inputs)
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
  return (
    <form onSubmit={onSubmit}>
        <h1>SignUp</h1>
        <br />
        <label>Email</label>
        <input key='email' type='email' name="email" onChange={handleInputs} value={inputs.email}></input>
        <br></br>
        <label>Password</label>
        <input key='password' type='password' name="password" onChange={handleInputs} value={inputs.password}></input>
        <button type='submit'>Submit</button>
      </form>
  )
}
