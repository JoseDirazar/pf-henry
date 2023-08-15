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

  

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <button onClick={() => dispatch(increment())}>
        increment
      </button>
      <span>
        {count}
      </span>
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>
    <Link href='/login'>Login</Link>
    </main>
  )
}
