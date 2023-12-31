'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  function handleInputs(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    async function submit() {
      try {
        const { data } = await axios.post(
          'http://localhost:3001/login',
          inputs
        );
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('Token guardado en el LocalStorage');
        }
      } catch (error) {
        console.log(error);
      }
    }
    submit();
  }
  useEffect(() => {
    const token = localStorage?.getItem('token');
    if (token) {
      console.log('Estoy logueado:', token);
    } else {
      console.log('Token no encontrado en el LocalStorage');
    }
  }, []);
  return (
    <div className='flex flex-col align-start'>
      <div className='text-center text-2xl font-semibold mt-8'>Login</div>
      <form
        className='max-w-sm mx-auto p-6 bg-white shadow-md rounded-md'
        onSubmit={onSubmit}
      >
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Email</label>
          <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500'
            key='email'
            type='email'
            name='email'
            onChange={handleInputs}
            value={inputs.email}
          ></input>
        </div>

        <div className='mb-6'>
        <label className='block text-gray-700 font-semibold mb-2'>Password</label>
        <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500'
          key='password'
          type='password'
          name='password'
          onChange={handleInputs}
          value={inputs.password}
        ></input>
        </div>

        <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md' type='submit'>Submit</button>
      </form>
      <h2 className='text-gray-600 text-center mt-4'>
  Don't have an account?{' '}
  <Link className='text-blue-500 hover:underline' href='/signup'>
   SignUp
  </Link>
</h2>
    </div>
  );
}
